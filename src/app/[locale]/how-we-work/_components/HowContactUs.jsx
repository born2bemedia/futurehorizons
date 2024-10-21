"use client";
import React from "react";
import "@/styles/home/homeWhy.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { Parallax } from "react-parallax";
import RequestButton from "@/components/RequestButton";
import { useTranslations } from "next-intl";

const HowContactUs = () => {
  const t = useTranslations("howWeWork");

  return (
    <section className="contact-block">
      <div className="_container">
        <div>
          <Parallax
            className="contact-block__body"
            bgImage="/images/home/whyBack.webp"
            strength={-100}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("HowContactUs.title") }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="button-wrap"
            >
              <RequestButton
                className={"orange-button"}
                text={t("HowContactUs.button")}
              />
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default HowContactUs;
