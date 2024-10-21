"use client";
import "@/styles/home/homeWhatWeCanDo.scss";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Percent from "./Percent";
import RequestButton from "@/components/RequestButton";
import { useTranslations } from "next-intl";

const HomeWhatWeCanDo = () => {
  const t = useTranslations("home");

  return (
    <section className="home-what">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t.rich("HomeWhatWeCanDo.title", {
            span: (chunks) => <span>{chunks}</span>,
          })}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("HomeWhatWeCanDo.subtitle")}
        </motion.p>
        <div className="home-what__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={57} prefix="+" />
            <p>{t("HomeWhatWeCanDo.block1")}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={174} prefix="+" />
            <p>{t("HomeWhatWeCanDo.block2")}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={100} prefix="+" />
            <p>{t("HomeWhatWeCanDo.block3")}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={107} prefix="+" />
            <p>{t("HomeWhatWeCanDo.block4")}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={87} prefix="" />
            <p>{t("HomeWhatWeCanDo.block5")}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={68} prefix="+" />
            <p>{t("HomeWhatWeCanDo.block6")}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="banner"
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t("HomeWhatWeCanDo.blockTitle"),
              }}
            />
            <RequestButton
              className={"orange-button"}
              text={t("HomeWhatWeCanDo.button")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhatWeCanDo;
