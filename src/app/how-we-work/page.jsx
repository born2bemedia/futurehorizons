import React from "react";
import "@/styles/howWeWork.scss";
import HowWeWorkHero from "./_components/HowWeWorkHero";
import HowContactUs from "./_components/HowContactUs";
import HowWeWorkDetails from "./_components/HowWeWorkDetails";

export const metadata = {
  title: "Our Approach to Effective Marketing",
  description:
    "Learn how Next Wave Ad drives results with a data-driven, strategic approach to marketing. Discover our step-by-step process for delivering tailored solutions that grow your business.",
  openGraph: {
    title: "Our Approach to Effective Marketing",
    description:
      "Learn how Next Wave Ad drives results with a data-driven, strategic approach to marketing. Discover our step-by-step process for delivering tailored solutions that grow your business.",
    images: "https://nextwavead.com/images/meta.png",
  },
};

const HowWeWork = () => {
  return (
    <>
      <HowWeWorkHero />
      <HowWeWorkDetails />
      <HowContactUs />
    </>
  );
};

export default HowWeWork;
