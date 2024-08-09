"use client";
import "@/styles/home/homeWhatWeCanDo.scss";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Percent from "./Percent";
import RequestButton from "@/components/RequestButton";

const HomeWhatWeCanDo = () => {
  return (
    <section className="home-what">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          What We Can Do for <br />
          <span>Your Business</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          See the average results we deliver for our customers.
        </motion.p>
        <div className="home-what__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={57} prefix="+" />
            <p>in clicks</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={174} prefix="+" />
            <p>in organic traffic</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={100} prefix="+" />
            <p>in visibility rate</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={107} prefix="+" />
            <p>in revenue</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={87} prefix="" />
            <p>queries in top-10</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Percent percentageMax={68} prefix="+" />
            <p>in open rate</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="banner"
          >
            <p>Want the same results? Contact us!</p>
            <RequestButton
              className={"orange-button"}
              text={"Book consultation"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhatWeCanDo;
