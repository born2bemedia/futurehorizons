"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const HowWeWorkHero = () => {
  const t = useTranslations("howWeWork");
  return (
    <Parallax bgImage="/images/howWeWork/hero.webp" strength={-50}>
      <section className="how-hero">
        <div className="_container">
          <div className="how-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
              dangerouslySetInnerHTML={{ __html: t("HowWeWorkHero.title") }}
            />
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("HowWeWorkHero.subtitle") }}
            />
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default HowWeWorkHero;
