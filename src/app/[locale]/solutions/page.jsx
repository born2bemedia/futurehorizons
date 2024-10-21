import React from "react";
import "@/styles/solutions.scss";
import SolutionsHero from "./_components/SolutionsHero";
import ContactUs from "./_components/ContactUs";
import SolutionsTabs from "./_components/SolutionsTabs";

export const metadata = {
  title: "Complex Solutions for Business Marketing Challenges",
  description:
    "Explore tailored marketing solutions to overcome your business challenges. From lead conversion to advanced analytics, Next Wave Ad provides expert strategies for sustained growth.",
  openGraph: {
    title: "Complex Solutions for Business Marketing Challenges",
    description:
      "Explore tailored marketing solutions to overcome your business challenges. From lead conversion to advanced analytics, Next Wave Ad provides expert strategies for sustained growth.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

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
