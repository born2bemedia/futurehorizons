import "@/styles/contact.scss";
import React from "react";
import ContactHero from "./_components/ContactHero";
import ContactDirectly from "./_components/ContactDirectly";

export const metadata = {
  title: "Contact  Marketing Experts",
  description:
    "Have questions or need expert help with your marketing strategy? Reach out to Next Wave Ad for personalised assistance and solutions tailored to your business needs.",
  openGraph: {
    title: "Contact  Marketing Experts",
    description:
      "Have questions or need expert help with your marketing strategy? Reach out to Next Wave Ad for personalised assistance and solutions tailored to your business needs.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

const ContactUs = () => {
  return (
    <>
      <ContactHero />
      <ContactDirectly />
    </>
  );
};

export default ContactUs;
