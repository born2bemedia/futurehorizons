"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const SolutionsHero = () => {
  const t = useTranslations("solutions");
  return (
    <Parallax bgImage="/images/solutions/solutionsHero.webp" strength={-50}>
      <section className="solutions-hero">
        <div className="_container">
          <div className="solutions-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("SolutionsHero.title") }}
            />
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("SolutionsHero.subtitle") }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
              dangerouslySetInnerHTML={{ __html: t("SolutionsHero.text") }}
            />
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default SolutionsHero;
