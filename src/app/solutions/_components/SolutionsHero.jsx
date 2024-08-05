"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";

const SolutionsHero = () => {
  return (
    <Parallax bgImage="/images/solutions/solutionsHero.webp" strength={-50}>
      <section className="solutions-hero">
        <div className="_container">
          <div className="solutions-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Solutions
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Comprehensive Solutions
              <br />
              for Digital Marketing Challenges
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              No matter the challenge—whether it's poor reputation, low search
              visibility, or launching a new brand—our solutions cover every
              <br />
              aspect of digital marketing. We make the impossible possible for
              your business.
            </motion.p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default SolutionsHero;
