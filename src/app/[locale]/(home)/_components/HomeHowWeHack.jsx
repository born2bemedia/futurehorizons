"use client";
import React from "react";
import "@/styles/home/homeHowWeHack.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

const HomeHowWeHack = () => {
  const t = useTranslations("home");

  return (
    <section className="home-how-we-hack">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("HomeHowWeHack.title")}
        </motion.h2>
        <div className="home-how-we-hack__body">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>001</span>
              <h3>{t("HomeHowWeHack.block1.title")}</h3>
              <p>{t("HomeHowWeHack.block1.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>002</span>
              <h3>{t("HomeHowWeHack.block2.title")}</h3>
              <p>{t("HomeHowWeHack.block2.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>003</span>
              <h3>{t("HomeHowWeHack.block3.title")}</h3>
              <p>{t("HomeHowWeHack.block3.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>004</span>
              <h3>{t("HomeHowWeHack.block4.title")}</h3>
              <p>{t("HomeHowWeHack.block4.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>005</span>
              <h3>{t("HomeHowWeHack.block5.title")}</h3>
              <p>{t("HomeHowWeHack.block5.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>006</span>
              <h3>{t("HomeHowWeHack.block6.title")}</h3>
              <p>{t("HomeHowWeHack.block6.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span>007</span>
              <h3>{t("HomeHowWeHack.block7.title")}</h3>
              <p>{t("HomeHowWeHack.block7.text")}</p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="button-wrap"
          >
            <Link href="/get-a-proposal" className="orange-button">
              <span>{t("HomeHowWeHack.button")}</span>
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowWeHack;
