"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";

const HowWeWorkHero = () => {
  return (
    <Parallax bgImage="/images/howWeWork/hero.webp" strength={-50}>
      <section className="how-hero">
        <div className="_container">
          <div className="how-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              How We Work
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              To Drive Your <br />
              Business Growth
            </motion.h1>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default HowWeWorkHero;
