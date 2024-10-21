import React from "react";
import "@/styles/experts.scss";
import ExpertsHero from "./_components/ExpertsHero";
import ExpertsWrap from "./_components/ExpertsWrap";

export const metadata = {
  title: "Meet Our Marketing Experts",
  description:
    "Get to know the team behind your success. Our marketing experts at Next Wave Ad bring deep industry knowledge and data-driven strategies to help your business thrive.",
  openGraph: {
    title: "Meet Our Marketing Experts",
    description:
      "Get to know the team behind your success. Our marketing experts at Next Wave Ad bring deep industry knowledge and data-driven strategies to help your business thrive.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

const Experts = () => {
  return (
    <>
      <ExpertsHero />
      <ExpertsWrap />
    </>
  );
};

export default Experts;
