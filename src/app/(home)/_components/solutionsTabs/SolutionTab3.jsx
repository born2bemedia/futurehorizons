"use client";
import React from "react";
import OrderButton from "@/components/OrderButton";

const SolutionTab3 = () => {
  return (
    <div className="solution tab3">
      <div>
        <h3>Insufficient Website Traffic</h3>
        <ul>
          <li>
            <b>Search Engine Optimization:</b> to improve organic search
            rankings and drive more traffic.
          </li>
          <li>
            <b>Content Creation:</b> high-quality, relevant content to attract
            and retain website visitors.
          </li>
          <li>
            <b>Pay-Per-Click Advertising:</b> complex PPC campaigns to generate
            immediate traffic through targeted ads.
          </li>
          <li>
            <b>Social Media Advertising:</b> Leverage social media platforms to
            drive traffic through paid and organic posts.
          </li>
        </ul>
      </div>
      <OrderButton
        className={"orange-button"}
        text={"Order solution"}
        service={"Insufficient Website Traffic"}
      />
    </div>
  );
};

export default SolutionTab3;
