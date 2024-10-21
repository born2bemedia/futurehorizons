"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { Parallax } from "react-parallax";
import RequestForm from "@/components/RequestForm";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const t = useTranslations("contacts");

  return (
    <Parallax bgImage="/images/contacts/hero.webp" strength={-50}>
      <section className="contact-hero">
        <div className="_container">
          <div className="contact-hero__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("ContactHero.title")}
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t("ContactHero.subtitle")}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons-wrap"
            >
              {t("ContactHero.text")}
            </motion.p>

            <div className="form-wrap">
              <div className="left">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  dangerouslySetInnerHTML={{
                    __html: t("ContactHero.detailes.title"),
                  }}
                />
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  {t("ContactHero.detailes.subtitle")}
                </motion.p>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  details=
                  {t.rich("ContactHero.detailes.text", {
                    li: (chunks) => <li>{chunks}</li>,
                  })}
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
