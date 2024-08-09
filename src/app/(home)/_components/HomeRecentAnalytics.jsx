"use client";
import "@/styles/home/homeRecentAnalytics.scss";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeRecentAnalytics = () => {
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
              Recent Analytics from the Next Wave Ad Team
            </motion.h2>
            <Link href="/marketing-thinking" className="bordered-button">
              <span>More insights</span>
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
                <h2>
                  Avoiding Pitfalls in Advertising Analytics: Advanced Insights
                </h2>
              </div>
              <Link
                href="/marketing-thinking/avoiding-pitfalls-in-advertising-analytics-advanced-insights-and-best-practices"
                className="orange-button"
              >
                Read
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
                <h2>
                  Advanced Tools for Comprehensive Target Audience Analysis
                </h2>
              </div>
              <Link
                href="/marketing-thinking/advanced-tools-for-comprehensive-target-audience-analysis"
                className="orange-button"
              >
                Read
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecentAnalytics;
