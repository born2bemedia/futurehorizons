import React from "react";
import "@/styles/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ContactUs from "../solutions/_components/ContactUs";
import ServicesTabs from "./_components/ServicesTabs";

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
