"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const BlogHero = () => {
  const t = useTranslations("blog");
  return (
    <Parallax bgImage="/images/services/servicesHero.webp" strength={-50}>
      <section className="blog-hero">
        <div className="_container">
          <div className="blog-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("BlogHero.title") }}
            />
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              dangerouslySetInnerHTML={{ __html: t("BlogHero.subtitle") }}
            />
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default BlogHero;
