"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const ExpertsHero = () => {
  const t = useTranslations("experts");

  return (
    <Parallax bgImage="/images/experts/hero.webp" strength={-50}>
      <section className="experts-hero">
        <div className="_container">
          <div className="experts-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("ExpertsHero.title")}
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("ExpertsHero.subtitle") }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
              dangerouslySetInnerHTML={{ __html: t("ExpertsHero.text") }}
            />
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ExpertsHero;
