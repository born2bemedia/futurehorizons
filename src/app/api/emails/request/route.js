import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

// OAuth2 client credentials
const OAuth2 = google.auth.OAuth2;

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, lastName, email, phone, website, your_challenge } = bodyJSON;

    // Create an OAuth2 client with your credentials
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID, // Client ID from Google Developer Console
      process.env.GMAIL_CLIENT_SECRET, // Client Secret from Google Developer Console
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    // Set the refresh token and generate an access token
    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    // Configure nodemailer to use Gmail API OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER, // Your Gmail email
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    // Set up email data for the recipient (NextWaveAd team)
    const mailOptionsRecipient = {
      from: '"The Next Wave Ad" <noreply@nextwavead.com>', // Sender address
      to: "noreply@nextwavead.com", // NextWaveAd team's email
      subject: "New Consultation Request",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCompany website: ${website}\nChallenge: ${your_challenge}`,
    };

    // Set up email data for the client (the user who submitted the form)
    const mailOptionsClient = {
      from: '"The Next Wave Ad" <noreply@nextwavead.com>', // Sender address
      to: email, // Client's email
      subject: "Consultation Request Confirmation",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
          <thead>
            <tr>
              <td>
                <img style="width: 100%" src="https://nextwavead.com/images/email_header.png" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 40px">
                <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${firstName} ${lastName},</h2>
                <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for requesting a consultation with Next Wave Ad!</p>
                <p style="text-align: left; font-size: 16px;color:#202020;">We have successfully received your request and will review your details. A team member will contact you shortly to schedule your consultation and discuss your marketing needs.</p>
                <p style="text-align: left; font-size: 16px;color:#202020;">If you have any immediate questions or need further assistance, please do not hesitate to reply to this email or contact us at info@nextwavead.com.</p>
                <p style="text-align: left; font-size: 16px;color:#202020;">We look forward to connecting with you!</p>
                <h2 style="text-align: left; font-size: 20px;color:#202020;">Best regards,<br>The Next Wave Ad Team</h2>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td style="padding: 24px 40px; background: #222222; font-size: 20px; text-align: center; color: #ffffff;">
                Thanks for using <a href="https://nextwavead.com/" style="color: #EB6418; text-decoration: none;">Next Wave Ad</a>
              </td>
            </tr>
          </tfoot>
        </table>
      `,
    };

    // Send the email to the recipient (NextWaveAd team)
    await transporter.sendMail(mailOptionsRecipient);

    // Send the email to the client (form submitter)
    await transporter.sendMail(mailOptionsClient);

    // Return a successful response
    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}
