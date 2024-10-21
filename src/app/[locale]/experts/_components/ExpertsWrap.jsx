"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";
import { useTranslations } from "next-intl";

const ExpertsWrap = () => {
  const t = useTranslations("experts");

  return (
    <section className="experts-wrap">
      <div className="_container">
        <div className="experts-wrap__body">
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("ExpertsWrap.row1.title"),
                }}
              />
              <OrderButton
                className={"orange-button"}
                text={t("ExpertsWrap.row1.button")}
                service={t("ExpertsWrap.row1.service")}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row1.block1.title")}</h3>
              <p>{t("ExpertsWrap.row1.block1.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row1.block2.title")}</h3>
              <p>{t("ExpertsWrap.row1.block2.text")}</p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={t("ExpertsWrap.row1.button")}
              service={t("ExpertsWrap.row1.service")}
            />
          </div>

          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("ExpertsWrap.row2.title"),
                }}
              />
              <OrderButton
                className={"orange-button"}
                text={t("ExpertsWrap.row2.button")}
                service={t("ExpertsWrap.row2.service")}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row2.block1.title")}</h3>
              <p>{t("ExpertsWrap.row2.block1.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row2.block2.title")}</h3>
              <p>{t("ExpertsWrap.row2.block2.text")}</p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={t("ExpertsWrap.row2.button")}
              service={t("ExpertsWrap.row2.service")}
            />
          </div>

          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("ExpertsWrap.row3.title"),
                }}
              />
              <OrderButton
                className={"orange-button"}
                text={t("ExpertsWrap.row3.button")}
                service={t("ExpertsWrap.row3.service")}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row3.block1.title")}</h3>
              <p>{t("ExpertsWrap.row3.block1.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row3.block2.title")}</h3>
              <p>{t("ExpertsWrap.row3.block2.text")}</p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={t("ExpertsWrap.row3.button")}
              service={t("ExpertsWrap.row3.service")}
            />
          </div>

          <div className="row four-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("ExpertsWrap.row4.title"),
                }}
              />
              <OrderButton
                className={"orange-button"}
                text={t("ExpertsWrap.row4.button")}
                service={t("ExpertsWrap.row4.service")}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row4.block1.title")}</h3>
              <p>{t("ExpertsWrap.row4.block1.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row4.block2.title")}</h3>
              <p>{t("ExpertsWrap.row4.block2.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row4.block3.title")}</h3>
              <p>{t("ExpertsWrap.row4.block3.text")}</p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={t("ExpertsWrap.row4.button")}
              service={t("ExpertsWrap.row4.service")}
            />
          </div>

          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("ExpertsWrap.row5.title"),
                }}
              />
              <OrderButton
                className={"orange-button"}
                text={t("ExpertsWrap.row5.button")}
                service={t("ExpertsWrap.row5.service")}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row5.block1.title")}</h3>
              <p>{t("ExpertsWrap.row5.block1.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row5.block2.title")}</h3>
              <p>{t("ExpertsWrap.row5.block2.text")}</p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={t("ExpertsWrap.row5.button")}
              service={t("ExpertsWrap.row5.service")}
            />
          </div>

          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("ExpertsWrap.row6.title"),
                }}
              />
              <OrderButton
                className={"orange-button"}
                text={t("ExpertsWrap.row6.button")}
                service={t("ExpertsWrap.row6.service")}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row6.block1.title")}</h3>
              <p>{t("ExpertsWrap.row6.block1.text")}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>{t("ExpertsWrap.row6.block2.title")}</h3>
              <p>{t("ExpertsWrap.row6.block2.text")}</p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={t("ExpertsWrap.row6.button")}
              service={t("ExpertsWrap.row6.service")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsWrap;
