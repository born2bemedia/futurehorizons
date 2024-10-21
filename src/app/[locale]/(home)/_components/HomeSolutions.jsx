"use client";
import "@/styles/home/homeSolutions.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { Link } from "@/navigation";
import ButtonArrow from "@/icons/ButtonArrow";
import SolutionTab1 from "./solutionsTabs/SolutionTab1";
import SolutionTab2 from "./solutionsTabs/SolutionTab2";
import SolutionTab3 from "./solutionsTabs/SolutionTab3";
import SolutionTab4 from "./solutionsTabs/SolutionTab4";
import SolutionTab5 from "./solutionsTabs/SolutionTab5";
import SolutionTab6 from "./solutionsTabs/SolutionTab6";
import { useTranslations } from "next-intl";

const HomeSolutions = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const t = useTranslations("home");

  const tabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="home-solutions">
      <div className="_container">
        <div className="home-solutions__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t.rich("HomeSolutions.title", {
              span: (chunks) => <span>{chunks}</span>,
            })}
          </motion.h2>

          <div className="tabs">
            <div className="tabs-nav">
              <div>
                {["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => tabChange(tab)}
                    className={`${activeTab === tab ? "active" : ""}`}
                  >
                    {t(`HomeSolutions.Tab${tab.slice(-1)}.title`)}
                  </button>
                ))}
              </div>
              <Link href="/solutions" className="bordered-button">
                <span>{t("HomeSolutions.button")}</span>
                <ButtonArrow />
              </Link>
            </div>

            <div className="tabs-content">
              {activeTab == "tab1" && (
                <SolutionTab1
                  title={t("HomeSolutions.Tab1.title")}
                  buttonText={t("HomeSolutions.tabButton")}
                  details={t.rich("HomeSolutions.Tab1.details", {
                    ul: (chunks) => <ul>{chunks}</ul>,
                    li: (chunks) => <li>{chunks}</li>,
                    b: (chunks) => <b>{chunks}</b>,
                  })}
                />
              )}
              {activeTab == "tab2" && (
                <SolutionTab2
                  title={t("HomeSolutions.Tab2.title")}
                  buttonText={t("HomeSolutions.tabButton")}
                  details={t.rich("HomeSolutions.Tab2.details", {
                    ul: (chunks) => <ul>{chunks}</ul>,
                    li: (chunks) => <li>{chunks}</li>,
                    b: (chunks) => <b>{chunks}</b>,
                  })}
                />
              )}
              {activeTab == "tab3" && (
                <SolutionTab3
                  title={t("HomeSolutions.Tab3.title")}
                  buttonText={t("HomeSolutions.tabButton")}
                  details={t.rich("HomeSolutions.Tab3.details", {
                    ul: (chunks) => <ul>{chunks}</ul>,
                    li: (chunks) => <li>{chunks}</li>,
                    b: (chunks) => <b>{chunks}</b>,
                  })}
                />
              )}
              {activeTab == "tab4" && (
                <SolutionTab4
                  title={t("HomeSolutions.Tab4.title")}
                  buttonText={t("HomeSolutions.tabButton")}
                  details={t.rich("HomeSolutions.Tab4.details", {
                    ul: (chunks) => <ul>{chunks}</ul>,
                    li: (chunks) => <li>{chunks}</li>,
                    b: (chunks) => <b>{chunks}</b>,
                  })}
                />
              )}
              {activeTab == "tab5" && (
                <SolutionTab5
                  title={t("HomeSolutions.Tab5.title")}
                  buttonText={t("HomeSolutions.tabButton")}
                  details={t.rich("HomeSolutions.Tab5.details", {
                    ul: (chunks) => <ul>{chunks}</ul>,
                    li: (chunks) => <li>{chunks}</li>,
                    b: (chunks) => <b>{chunks}</b>,
                  })}
                />
              )}
              {activeTab == "tab6" && (
                <SolutionTab6
                  title={t("HomeSolutions.Tab6.title")}
                  buttonText={t("HomeSolutions.tabButton")}
                  details={t.rich("HomeSolutions.Tab6.details", {
                    ul: (chunks) => <ul>{chunks}</ul>,
                    li: (chunks) => <li>{chunks}</li>,
                    b: (chunks) => <b>{chunks}</b>,
                  })}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
