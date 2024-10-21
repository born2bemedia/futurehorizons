"use client";
import React from "react";
import OrderButton from "@/components/OrderButton";


const SolutionTab3 = ({title, details, buttonText}) => {
  return (
    <div className="solution tab3">
      <div>
        <h3>{title}</h3>
        {details}
      </div>
      <OrderButton
        className={"orange-button"}
        text={buttonText}
        service={title}
      />
    </div>
  );
};

export default SolutionTab3;
