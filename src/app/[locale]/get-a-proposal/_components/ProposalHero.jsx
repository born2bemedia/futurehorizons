"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import MultiStepForm from "./MultiStepForm";
import { useTranslations } from "next-intl";

const ProposalHero = () => {
  const t = useTranslations("proposal");
  return (
    <Parallax bgImage="/images/proposal/hero.webp" strength={-50}>
      <section className="proposal-hero">
        <div className="_container">
          <div className="proposal-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("ProposalHero.title") }}
            />
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("ProposalHero.subtitle") }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
              dangerouslySetInnerHTML={{ __html: t("ProposalHero.text") }}
            />
            <MultiStepForm />
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ProposalHero;
