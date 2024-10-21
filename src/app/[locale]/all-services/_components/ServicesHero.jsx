"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { useTranslations, useLocale } from "next-intl";

const ServicesHero = () => {
  const t = useTranslations("services");

  return (
    <Parallax bgImage="/images/services/servicesHero.webp" strength={-50}>
      <section className="services-hero">
        <div className="_container">
          <div className="services-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("ServicesHero.title")}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              {t("ServicesHero.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ServicesHero;
