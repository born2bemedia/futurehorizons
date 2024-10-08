"use client";
import React from "react";
import OrderButton from "@/components/OrderButton";

const SolutionTab5 = () => {
  return (
    <div className="solution tab5">
      <div>
        <h3>Low Lead Generation</h3>
        <ul>
          <li>
            <b>Inbound Marketing:</b> valuable content to attract and convert
            visitors into leads through blogs, whitepapers, and e-books.
          </li>
          <li>
            <b>Lead Nurturing Campaigns:</b> email marketing campaigns to
            nurture leads through the sales funnel.
          </li>
          <li>
            <b>Landing Page Optimization:</b> designing and optimising landing
            pages to increase conversion rates.
          </li>
          <li>
            <b>Lead Magnets:</b> development of incentives such as free trials,
            consultations, or downloadable resources to capture leads.
          </li>
        </ul>
      </div>
      <OrderButton
        className={"orange-button"}
        text={"Order solution"}
        service={"Low Lead Generation"}
      />
    </div>
  );
};

export default SolutionTab5;
