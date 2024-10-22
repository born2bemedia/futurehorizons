"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/components/OrderButton";
import servicesEn from "@/lib/services"; // English services
import servicesDe from "@/lib/services-de"; // German services
import servicesIt from "@/lib/services-it"; // Italian services
import servicesBg from "@/lib/services-bg";
import { useTranslations, useLocale } from "next-intl";

const ServicesTabs = () => {
  const t = useTranslations("services");
  const locale = useLocale(); // Detect the current locale
  const [activeTab, setActiveTab] = useState(
    "leadConversionAndCustomerAcquisition"
  );

  // Function to return the appropriate services object based on the locale
  const getServicesByLocale = () => {
    switch (locale) {
      case "de":
        return servicesDe; // Load German services
      case "it":
        return servicesIt; // Load Italian services
      case "bg":
        return servicesBg;
      default:
        return servicesEn; // Default to English services
    }
  };

  const services = getServicesByLocale(); // Get the services for the current locale

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
            dangerouslySetInnerHTML={{ __html: t("ServicesTabs.title") }} // Use translation for the title
          />

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
                                text={t("ServicesTabs.button")} // Use translation for button text
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
