"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Linkedin from "@/icons/social/Linkedin";
import YouTube from "@/icons/social/YouTube";
import Link from "next/link";
import X from "@/icons/social/X";
import TikTok from "@/icons/social/TikTok";
import Instagram from "@/icons/social/Instagram";
import Facebook from "@/icons/social/Facebook";

const ContactDirectly = () => {
  return (
    <section className="contact-directly">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Contact us directly
        </motion.h2>
        <div className="contact-directly__body">
          <motion.div
            className="left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="soc">
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <TikTok />
              </Link>
              <Link href="#">
                <X />
              </Link>
              <Link href="#">
                <YouTube />
              </Link>
              <Link href="#">
                <Linkedin />
              </Link>
            </div>

            <div className="contact">
              <span>Phone:</span>
              <Link href="#">Phone</Link>
            </div>
            <div className="contact">
              <span>Email:</span>
              <Link href="#">Email</Link>
            </div>
            <div className="contact">
              <span>Address:</span>
              <Link href="#">Address</Link>
            </div>
          </motion.div>
          <motion.div
            className="right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactDirectly;
