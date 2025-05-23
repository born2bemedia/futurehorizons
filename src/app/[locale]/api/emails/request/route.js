import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, lastName, email, phone, website, your_challenge } = bodyJSON;

    // OAuth2 Configuration
    const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";

    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    // Get Access Token
    const accessToken = await oauth2Client.getAccessToken();

    // Configure nodemailer with OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER, // Your Gmail email
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
      tls: {
        rejectUnauthorized: false, // This bypasses certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"The Next Wave Ad" <noreply@nextwavead.com>', // Sender address
      to: "noreply@nextwavead.com", // Change to your recipient's email
      subject: "Consultation Request Confirmation",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCompany website: ${website}\nChallenge: ${your_challenge}`,
    };

    // Set up email data for the client
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
              <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for requesting a consultation with Next Wave Ad!
</p>
              <p style="text-align: left; font-size: 16px;color:#202020;">We have successfully received your request and will review your details. A team member will contact you shortly to schedule your consultation and discuss your marketing needs.
</p>
              <p style="text-align: left; font-size: 16px;color:#202020;">If you have any immediate questions or need further assistance, please do not hesitate to reply to this email or contact us at info@nextwavead.com..</p>
              <p style="text-align: left; font-size: 16px;color:#202020;">We look forward to connecting with you!</p>
              <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best regards,<br>The Next Wave Ad Team </h2>
            </td>
          </tr>
        </tbody>
        <tfoot >
            <td style="padding: 24px 40px;background: #222222;background-size:cover;font-size: 20px;text-decoration: none;color: #ffffff;text-align: center;">
              Thanks for using <a href="https://nextwavead.com/" style="color: #fff;font-size: 20px;text-decoration: none;color: #EB6418;">Next Wave Ad</a>
            </td>
          </tfoot>
      </table>
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}
