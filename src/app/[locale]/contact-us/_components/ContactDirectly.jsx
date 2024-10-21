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
import { useTranslations } from "next-intl";

const ContactDirectly = () => {
  const t = useTranslations("contacts");

  return (
    <section className="contact-directly">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("ContactDirectly.title")}
        </motion.h2>
        <div className="contact-directly__body">
          <motion.div
            className="directly-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="soc">
              <Link href="https://www.facebook.com/nextwavead/" target="_blank">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/nextwavead/"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link href="https://x.com/nextwavead" target="_blank">
                <X />
              </Link>
            </div>

            <div className="row">
              <div className="contact">
                <span>{t("ContactDirectly.phone")}:</span>
                <Link href="tel:+35924373071">+35924373071</Link>
              </div>
              <div className="contact">
                <span>{t("ContactDirectly.email")}:</span>
                <Link href="mailto:info@nextwavead.com">
                  info@nextwavead.com
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="address">
                <h3>{t("ContactDirectly.officeAddress")}:</h3>
                <p>
                  46 Alabin street, 4th floor, 1000 Sofia Center, Sofia,
                  Bulgaria
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.4171169203923!2d23.317697076615524!3d42.69488791388158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856c427a8827%3A0x76dea3c577398e20!2zU29maWEgQ2VudGVyLCDRg9C7LiDigJ7QkNC70LDQsdC40L0g0JguINCS0Lsu4oCcIDQ2LCA0dGggZmxvb3IsIDEwMDAsIDEwMDAgU29maWEsIEJ1bGdhcmlh!5e0!3m2!1sen!2sua!4v1723200755715!5m2!1sen!2sua"
                  width="600"
                  height="220"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="address">
                <h3>{t("ContactDirectly.registeredAddress")}: </h3>
                <p>
                  Studentski District, 91B Metodi Andonov str., entr. A, ap. 14,
                  Sofia 1797, Bulgaria
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5096776893047!2d23.369346476613835!3d42.65055361669881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa869a9d71f513%3A0xfa4f26fdd5b6d475!2sMladost%201Mladost%2C%20ul.%20%22Metodi%20Andonov%22%2091%2C%201784%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sua!4v1723200926861!5m2!1sen!2sua"
                  width="600"
                  height="220"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactDirectly;
