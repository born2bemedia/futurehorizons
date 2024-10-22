"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/components/OrderButton";
import solutions from "@/lib/solutions"; // English solutions
import solutionsDe from "@/lib/solutions-de"; // German solutions
import solutionsIt from "@/lib/solutions-it"; // Italian solutions
import solutionsBg from "@/lib/solutions-bg";
import { useTranslations, useLocale } from "next-intl";

const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState("unclearMarketingStrategy");
  const locale = useLocale(); // Get current locale
  const t = useTranslations("solutions"); // Use translations for any static text

  // Select the correct solutions object based on the locale
  const localeSolutions = () => {
    switch (locale) {
      case "de":
        return solutionsDe;
      case "it":
        return solutionsIt;
      case "bg":
        return solutionsBg;
      default:
        return solutions; // Default to English if no specific locale is found
    }
  };

  const solutionsData = localeSolutions();

  const tabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <section className="solutions-tabs">
      <div className="_container">
        <div className="solutions-tabs__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t.rich("SolutionsTabs.title", {
              span: (chunks) => <span>{chunks}</span>,
            })}
          </motion.h2>

          <div className="tabs">
            <div className="tabs-nav">
              <div>
                {Object.keys(solutionsData).map((key, index) => (
                  <button
                    key={key}
                    onClick={() => tabChange(key)}
                    className={`${activeTab === key ? "active" : ""}`}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>{" "}
                    {solutionsData[key].title}
                  </button>
                ))}
              </div>
            </div>

            <div className="tabs-content">
              {Object.keys(solutionsData).map(
                (key, index) =>
                  activeTab === key && (
                    <div
                      key={key}
                      className={`solution ${key}`}
                      style={{
                        backgroundImage: `url(/images/solutions/${key}.png)`,
                      }}
                    >
                      <div>
                        <h3>
                          <span>{String(index + 1).padStart(2, "0")}</span>{" "}
                          {solutionsData[key].title}
                        </h3>
                        <ul>
                          {solutionsData[key].info.map((item, idx) => (
                            <li key={idx}>
                              <b>{item.title}:</b> {item.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <OrderButton
                        className={"orange-button"}
                        text={t("SolutionsTabs.button")} // Translate button text
                        service={solutionsData[key].title}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsTabs;
