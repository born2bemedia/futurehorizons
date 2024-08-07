"use client";
import React from "react";
import "@/styles/home/homeWhy.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import RequestButton from "@/components/RequestButton";

const HowContactUs = () => {
  return (
    <section className="contact-block">
      <div className="_container">
        <div>
          <Parallax
            className="contact-block__body"
            bgImage="/images/home/whyBack.webp"
            strength={-100}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Need professional marketing <br />
              assistance? Contact us!
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="button-wrap"
            >
              <RequestButton
                className={"orange-button"}
                text={"Book consultation"}
              />
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default HowContactUs;
