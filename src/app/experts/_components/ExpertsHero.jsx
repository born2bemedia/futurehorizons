"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";

const ExpertsHero = () => {
  return (
    <Parallax bgImage="/images/experts/hero.webp" strength={-50}>
      <section className="experts-hero">
        <div className="_container">
          <div className="experts-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Expert Team
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Behind Your <br />
              Business Growth
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              At Future Horizons, our team of marketing professionals is
              committed to driving your <br />
              business success through innovative, data-driven marketing
              strategies.
            </motion.p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ExpertsHero;
