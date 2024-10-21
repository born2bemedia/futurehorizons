"use client";
import "@/styles/home/homeRecentAnalytics.scss";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { Link } from "@/navigation";
import ButtonArrow from "@/icons/ButtonArrow";
import { useTranslations } from "next-intl";

const HomeRecentAnalytics = () => {
  const t = useTranslations("home");

  return (
    <section className="home-recent">
      <div className="_container">
        <div className="home-recent__body">
          <div className="left">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("HomeRecentAnalytics.title")}
            </motion.h2>
            <Link href="/marketing-thinking" className="bordered-button">
              <span>{t("HomeRecentAnalytics.button")}</span>
              <ButtonArrow />
            </Link>
          </div>

          <div className="right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="article-top">
                <Link
                  href="/marketing-thinking/avoiding-pitfalls-in-advertising-analytics-advanced-insights-and-best-practices"
                  className="thumb"
                  style={{ backgroundImage: "url(/images/blog/article2.webp)" }}
                ></Link>
                <h2>{t("HomeRecentAnalytics.article1")}</h2>
              </div>
              <Link
                href="/marketing-thinking/avoiding-pitfalls-in-advertising-analytics-advanced-insights-and-best-practices"
                className="orange-button"
              >
                {t("HomeRecentAnalytics.read")}
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="article-top">
                <Link
                  href="/marketing-thinking/advanced-tools-for-comprehensive-target-audience-analysis"
                  className="thumb"
                  style={{ backgroundImage: "url(/images/blog/article3.webp)" }}
                ></Link>
                <h2>{t("HomeRecentAnalytics.article2")}</h2>
              </div>
              <Link
                href="/marketing-thinking/advanced-tools-for-comprehensive-target-audience-analysis"
                className="orange-button"
              >
                {t("HomeRecentAnalytics.read")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecentAnalytics;
