"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/components/OrderButton";
import solutions from "@/lib/solutions";

const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState("unclearMarketingStrategy");

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
            Find Your <span>Solution</span>
          </motion.h2>

          <div className="tabs">
            <div className="tabs-nav">
              <div>
                {Object.keys(solutions).map((key, index) => (
                  <button
                    key={key}
                    onClick={() => tabChange(key)}
                    className={`${activeTab === key ? "active" : ""}`}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>{" "}
                    {solutions[key].title}
                  </button>
                ))}
              </div>
            </div>

            <div className="tabs-content">
              {Object.keys(solutions).map(
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
                          {solutions[key].title}
                        </h3>
                        <ul>
                          {solutions[key].info.map((item, idx) => (
                            <li key={idx}>
                              <b>{item.title}:</b> {item.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <OrderButton
                        className={"orange-button"}
                        text={"Order solution"}
                        service={solutions[key].title}
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
