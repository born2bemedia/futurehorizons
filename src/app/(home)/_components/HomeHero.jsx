"use client";
import React from "react";
import "@/styles/home/homeHero.scss";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Brand name
          </motion.h2>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Data-driven <br />
            Marketing Solutions
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="buttons-wrap"
          >
            <Link href="#" className="bordered-button">
              Explore services
            </Link>
            <Link href="#" className="orange-button">
              Get a proposal
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
