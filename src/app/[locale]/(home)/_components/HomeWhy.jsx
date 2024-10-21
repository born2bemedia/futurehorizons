"use client";
import React from "react";
import "@/styles/home/homeWhy.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const HomeWhy = () => {
  const t = useTranslations("home");

  return (
    <section className="home-why">
      <div className="_container">
        <div>
          <Parallax
            className="home-why__body"
            bgImage="/images/home/whyBack.webp"
            strength={-100}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("HomeWhy.title") }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("HomeWhy.subtitle") }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="button-wrap"
            >
              <Link href="/experts" className="orange-button">
                {t("HomeWhy.button")}
              </Link>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;
