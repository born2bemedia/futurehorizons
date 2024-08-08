"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";
import RequestForm from "@/components/RequestForm";

const ContactHero = () => {
  return (
    <Parallax bgImage="/images/services/servicesHero.webp" strength={-50}>
      <section className="contact-hero">
        <div className="_container">
          <div className="contact-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Contact us
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Get Expert Marketing Help
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              Expert assistance on all your business marketing needs.
            </motion.p>

            <div className="form-wrap">
              <div className="left">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  Ready to Elevate <br />
                  Your Marketing?
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  Schedule an expert consultation to discover:
                </motion.p>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <li>
                    How Future Horizons can transform your marketing strategy.
                  </li>
                  <li>
                    How to scale your marketing efforts more effectively and
                    efficiently.
                  </li>
                  <li>
                    What sets us apart from agencies, freelancers, and in-house
                    teams.
                  </li>
                  <li>
                    The perfect solution package tailored to your business
                    needs.
                  </li>
                </motion.ul>
              </div>
              <div className="right">
                <RequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default ContactHero;
