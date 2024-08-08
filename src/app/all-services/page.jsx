import React from "react";
import "@/styles/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ContactUs from "../solutions/_components/ContactUs";
import ServicesTabs from "./_components/ServicesTabs";

export const metadata = {
  title: "All Marketing Services",
  description:
    "Browse our full range of marketing services designed to drive business success. Next Wave Ad covers all your marketing needs, from strategy development to content creation.",
  openGraph: {
    title: "All Marketing Services",
    description:
      "Browse our full range of marketing services designed to drive business success. Next Wave Ad covers all your marketing needs, from strategy development to content creation.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

const AllServices = () => {
  return (
    <>
      <ServicesHero />
      <ServicesTabs />
      <ContactUs />
    </>
  );
};

export default AllServices;
