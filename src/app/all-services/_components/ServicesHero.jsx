"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";

const ServicesHero = () => {
  return (
    <Parallax bgImage="/images/services/servicesHero.webp" strength={-50}>
      <section className="services-hero">
        <div className="_container">
          <div className="services-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              All services
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              To Solve Any Marketing Task
            </motion.p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ServicesHero;
