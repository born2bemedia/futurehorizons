import React from "react";
import "@/styles/howWeWork.scss";
import HowWeWorkHero from "./_components/HowWeWorkHero";
import HowContactUs from "./_components/HowContactUs";
import HowWeWorkDetails from "./_components/HowWeWorkDetails";

const page = () => {
  return (
    <>
      <HowWeWorkHero />
      <HowWeWorkDetails />
      <HowContactUs />
    </>
  );
};

export default page;
