"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/homeHero.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";

const HomeHero = () => {
  const [bgImage, setBgImage] = useState("/images/home/homeHero.webp");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setBgImage("/images/home/homeHero-mobile.webp");
      } else {
        setBgImage("/images/home/homeHero.webp");
      }
    };

    handleResize(); // Set the initial background image
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Parallax bgImage={bgImage} strength={-50}>
      <section className="home-hero">
        <div className="_container">
          <div className="home-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Next Wave Ad
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
              <Link href="/all-services" className="bordered-button">
                Explore services
              </Link>
              <Link href="/get-a-proposal" className="orange-button">
                Get a proposal
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default HomeHero;
