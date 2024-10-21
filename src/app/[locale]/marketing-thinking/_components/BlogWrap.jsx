"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const BlogWrap = () => {
  const t = useTranslations("blog");
  return (
    <section className="blog-wrap">
      <div className="_container">
        <div className="blog-wrap__body">
          <div className="post">
            <Link
              href="/marketing-thinking/optimising-google-ads-for-high-performance-campaigns-expert-strategies"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article1.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>{t("BlogWrap.article1.title")}</h2>
                <p>{t("BlogWrap.article1.excerpt")}</p>
              </div>
              <Link
                href="/marketing-thinking/optimising-google-ads-for-high-performance-campaigns-expert-strategies"
                className="orange-button"
              >
                {t("BlogWrap.button")}
              </Link>
            </div>
          </div>
          <div className="post">
            <Link
              href="/marketing-thinking/avoiding-pitfalls-in-advertising-analytics-advanced-insights-and-best-practices"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article2.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>{t("BlogWrap.article2.title")}</h2>
                <p>{t("BlogWrap.article2.excerpt")}</p>
              </div>
              <Link
                href="/marketing-thinking/avoiding-pitfalls-in-advertising-analytics-advanced-insights-and-best-practices"
                className="orange-button"
              >
                {t("BlogWrap.button")}
              </Link>
            </div>
          </div>
          <div className="post">
            <Link
              href="/marketing-thinking/advanced-tools-for-comprehensive-target-audience-analysis"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article3.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>{t("BlogWrap.article3.title")}</h2>
                <p>{t("BlogWrap.article3.excerpt")}</p>
              </div>
              <Link
                href="/marketing-thinking/advanced-tools-for-comprehensive-target-audience-analysis"
                className="orange-button"
              >
                {t("BlogWrap.button")}
              </Link>
            </div>
          </div>
          <div className="post">
            <Link
              href="/marketing-thinking/maximising-roi-with-data-driven-email-marketing-strategies"
              className="thumb"
              style={{ backgroundImage: "url(/images/blog/article4.webp)" }}
            ></Link>
            <div className="info">
              <div>
                <h2>{t("BlogWrap.article4.title")}</h2>
                <p>{t("BlogWrap.article4.excerpt")}</p>
              </div>
              <Link
                href="/marketing-thinking/maximising-roi-with-data-driven-email-marketing-strategies"
                className="orange-button"
              >
                {t("BlogWrap.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogWrap;
