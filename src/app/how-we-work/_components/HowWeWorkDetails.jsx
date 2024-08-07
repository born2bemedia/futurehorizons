"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const HowWeWorkDetails = () => {
  return (
    <section className="how-details">
      <div className="_container">
        <div className="row">
          <div className="info">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Strategy <br />
              to Execution
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We elevate customer development by crafting targeted data-driven
              marketing campaigns that attract the right buyers and clearly
              communicate your value proposition.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Acquisition alone isn't enough to drive growth; that's why we also
              develop lead-to-sales nurturing programs that convert qualified
              leads into sales opportunities. By seamlessly connecting marketing
              and sales, we simplify and accelerate growth.
            </motion.p>
          </div>
          <div className="image-wrap">
            <Image fill src={"/images/howWeWork/detail1.webp"} />
          </div>
        </div>
        <div className="row">
          <div className="info">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Accelerated B2B <br />
              Marketing with <br />
              Data & Insights
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We rapidly accelerate qualified lead acquisition while
              strengthening our clients' marketing foundations. We set monthly
              lead acquisition goals, develop marketing assets, and create a
              data-driven strategy.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our approach includes launching pilot campaigns and continuously
              measuring results against benchmarks, allowing us to optimise,
              improve, and build for sustained success.
            </motion.p>
          </div>
          <div className="image-wrap">
            <Image fill src={"/images/howWeWork/detail2.webp"} />
          </div>
        </div>
        <div className="row">
          <div className="info">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Growth-Driven <br />
              Metrics
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We focus on metrics that matter for generating revenue and
              avoiding the fluff that doesn't drive business growth.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Traffic alone doesn't lead to revenue; by generating qualified
              leads, influencing key decision-makers, converting leads to
              opportunities, and engaging target accounts, we help our clients
              build smarter, more effective revenue streams.
            </motion.p>
          </div>
          <div className="image-wrap">
            <Image fill src={"/images/howWeWork/detail3.webp"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkDetails;
