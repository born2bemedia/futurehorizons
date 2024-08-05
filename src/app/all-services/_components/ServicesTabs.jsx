"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/components/OrderButton";
import services from "@/lib/services";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(
    "leadConversionAndCustomerAcquisition"
  );

  const tabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <section className="services-tabs">
      <div className="_container">
        <div className="services-tabs__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            See how our expertise can <br />
            drive your success
          </motion.h2>

          <div className="tabs">
            <div className="tabs-nav">
              <div>
                {Object.keys(services).map((key, index) => (
                  <button
                    key={key}
                    onClick={() => tabChange(key)}
                    className={`${activeTab === key ? "active" : ""}`}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>{" "}
                    {services[key].title}
                  </button>
                ))}
              </div>
            </div>

            <div className="tabs-content">
              {Object.keys(services).map(
                (key, index) =>
                  activeTab === key && (
                    <div key={key} className={`solution ${key}`}>
                      <div>
                        <h3>
                          <span>{String(index + 1).padStart(2, "0")}</span>{" "}
                          {services[key].title}
                        </h3>
                        <div className="row">
                          {services[key].subServices.map((item, idx) => (
                            <div key={idx}>
                              <div>
                                <h4>{item.title}:</h4>
                                <p>{item.text}</p>
                              </div>
                              <OrderButton
                                className={"orange-button"}
                                text={"Order now"}
                                service={`${services[key].title}: ${item.title}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
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

export default ServicesTabs;
