"use client";
import React from "react";
import "@/styles/home/homeTools.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import PartnersSlider from "./PartnersSlider";
import { useTranslations } from "next-intl";

const firstLogosRow = [
  "/images/home/logos/logo1.png",
  "/images/home/logos/logo2.png",
  "/images/home/logos/logo3.png",
  "/images/home/logos/logo4.png",
  "/images/home/logos/logo5.png",
  "/images/home/logos/logo6.png",
  "/images/home/logos/logo7.png",
];

const secondLogosRow = [
  "/images/home/logos/logo8.png",
  "/images/home/logos/logo9.png",
  "/images/home/logos/logo10.png",
  "/images/home/logos/logo11.png",
  "/images/home/logos/logo12.png",
  "/images/home/logos/logo13.png",
  "/images/home/logos/logo14.png",
];

const HomeTools = () => {
  const t = useTranslations("home");

  return (
    <section className="home-tools">
      <div className="_container">
        <div className="home-tools__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t("HomeTools.title")}
          </motion.h2>

          <PartnersSlider images={firstLogosRow} rtlDirection={false} />

          <PartnersSlider images={secondLogosRow} rtlDirection={true} />
        </div>
      </div>
    </section>
  );
};

export default HomeTools;
