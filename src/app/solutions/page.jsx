import React from "react";
import "@/styles/solutions.scss";
import SolutionsHero from "./_components/SolutionsHero";
import ContactUs from "./_components/ContactUs";
import SolutionsTabs from "./_components/SolutionsTabs";

const SolutionsPage = () => {
  return (
    <>
      <SolutionsHero />
      <SolutionsTabs />
      <ContactUs />
    </>
  );
};

export default SolutionsPage;
