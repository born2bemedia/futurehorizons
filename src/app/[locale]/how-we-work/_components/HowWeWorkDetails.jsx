"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HowWeWorkDetails = () => {
  const t = useTranslations("howWeWork");

  return (
    <section className="how-details">
      <div className="_container">
        <div className="row">
          <div className="info">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{
                __html: t("HowWeWorkDetails.block1.title"),
              }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("HowWeWorkDetails.block1.text1")}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("HowWeWorkDetails.block1.text2")}
            </motion.p>
          </div>
          <div className="image-wrap">
            <Image fill src={"/images/howWeWork/detail1.webp"} />
          </div>
        </div>
        <div className="row">
          <div className="info">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{
                __html: t("HowWeWorkDetails.block2.title"),
              }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("HowWeWorkDetails.block2.text1")}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("HowWeWorkDetails.block2.text2")}
            </motion.p>
          </div>
          <div className="image-wrap">
            <Image fill src={"/images/howWeWork/detail2.webp"} />
          </div>
        </div>
        <div className="row">
          <div className="info">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{
                __html: t("HowWeWorkDetails.block3.title"),
              }}
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("HowWeWorkDetails.block3.text1")}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("HowWeWorkDetails.block3.text2")}
            </motion.p>
          </div>
          <div className="image-wrap">
            <Image fill src={"/images/howWeWork/detail3.webp"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkDetails;
