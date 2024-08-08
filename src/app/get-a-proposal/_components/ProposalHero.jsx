"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import MultiStepForm from "./MultiStepForm";

const ProposalHero = () => {
  return (
    <Parallax bgImage="/images/proposal/hero.webp" strength={-50}>
      <section className="proposal-hero">
        <div className="_container">
          <div className="proposal-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Get a proposal
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Craft Your Tailored <br />
              Marketing Plan
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              Ideal Solution Fitting Your Budget
            </motion.p>
            <MultiStepForm />
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ProposalHero;
