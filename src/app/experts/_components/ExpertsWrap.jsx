"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const ExpertsWrap = () => {
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
              <h2>
                Strategic <br />
                Planning <br />
                Department
              </h2>
              <OrderButton
                className={"orange-button"}
                text={"Contact strategic experts"}
                service={"Strategic Experts"}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Marketing Strategists</h3>
              <p>
                Our marketing strategists excel in crafting comprehensive,
                tailored marketing plans that align with your business
                objectives. They leverage in-depth market research and
                competitive analysis to develop strategies that ensure
                sustainable growth and a competitive edge in the market.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Brand Managers</h3>
              <p>
                Brand managers at Future Horizons are dedicated to building and
                maintaining a strong brand presence for your business. They
                focus on creating a cohesive brand message, enhancing brand
                perception, and ensuring your brand stands out in a crowded
                marketplace.
              </p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={"Contact strategic experts"}
              service={"Strategic Experts"}
            />
          </div>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                Data and <br />
                Analytics <br />
                Department
              </h2>
              <OrderButton
                className={"orange-button"}
                text={"Contact analytic experts"}
                service={"Analytic Experts"}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Data Analysts</h3>
              <p>
                Data analysts use advanced analytical tools to process and
                interpret large datasets, uncovering critical insights that
                inform every marketing decision. Their expertise ensures that
                your marketing strategies are always data-driven and optimised
                for success.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Market Researchers</h3>
              <p>
                Our market researchers gather and analyse information about your
                target audience, industry trends, and competitors. This valuable
                data helps us understand the market landscape and tailor our
                strategies to meet your specific needs and goals.
              </p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={"Contact analytic experts"}
              service={"Analytic Experts"}
            />
          </div>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                Creative <br />
                Department
              </h2>
              <OrderButton
                className={"orange-button"}
                text={"Contact creative experts"}
                service={"Creative Experts"}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Content Creators</h3>
              <p>
                Content creators produce compelling, high-quality content that
                resonates with your audience. From engaging blog posts and
                articles to eye-catching graphics and videos, our content
                creators ensure your brand message is communicated effectively
                across all channels.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Graphic Designers</h3>
              <p>
                Our graphic designers specialise in creating visually appealing
                and impactful designs for your marketing materials. They focus
                on crafting aesthetically pleasing visuals that effectively
                capture attention and convey your brand message.
              </p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={"Contact creative experts"}
              service={"Creative Experts"}
            />
          </div>
          <div className="row four-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                Digital Marketing <br />
                Department
              </h2>
              <OrderButton
                className={"orange-button"}
                text={"Contact marketing experts"}
                service={"Marketing Experts"}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>SEO Specialists</h3>
              <p>
                SEO specialists at Future Horizons enhance your online
                visibility through strategic keyword optimization, on-page and
                off-page SEO tactics, and technical SEO. Their efforts drive
                organic traffic to your website, increasing your reach and
                attracting potential customers.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Social Media Managers</h3>
              <p>
                Our social media managers build and manage your social media
                presence, creating engaging content and fostering community
                interactions. They ensure your social media channels are active,
                engaging, and aligned with your overall marketing strategy.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>PPC Specialists</h3>
              <p>
                PPC specialists manage pay-per-click advertising campaigns to
                drive targeted traffic to your website. They optimise campaigns
                for maximum ROI, ensuring your advertising spend is effectively
                used to reach and convert potential customers.
              </p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={"Contact marketing experts"}
              service={"Marketing Experts"}
            />
          </div>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                Email Marketing <br />
                and Automation <br />
                Department
              </h2>
              <OrderButton
                className={"orange-button"}
                text={"Contact automation experts"}
                service={"Automation Experts"}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Email Marketing Experts</h3>
              <p>
                Email marketing experts design and execute email campaigns that
                nurture leads and drive conversions. They focus on creating
                personalised and engaging email content that resonates with your
                audience and encourages action.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Marketing Automation Specialists</h3>
              <p>
                Marketing automation specialists implement and manage advanced
                automation tools to streamline your marketing processes. They
                create efficient workflows, lead scoring systems, and CRM
                integrations that enhance your marketing efficiency and
                effectiveness.
              </p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={"Contact automation experts"}
              service={"Automation Experts"}
            />
          </div>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>
                Web <br />
                Development <br />
                Department
              </h2>
              <OrderButton
                className={"orange-button"}
                text={"Contact development experts"}
                service={"Development Experts"}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Web Developers</h3>
              <p>
                Our web developers create and maintain responsive, user-friendly
                websites that provide a seamless online experience. They focus
                on both front-end and back-end development, ensuring that your
                website is visually appealing, highly functional, and optimised
                for conversions.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>UX/UI Designers</h3>
              <p>
                UX/UI designers at Future Horizons focus on enhancing user
                experience and interface design. They create intuitive and
                engaging website layouts that improve user satisfaction and
                drive higher conversion rates.
              </p>
            </motion.div>
            <OrderButton
              className={"orange-button"}
              text={"Contact development experts"}
              service={"Development Experts"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsWrap;
