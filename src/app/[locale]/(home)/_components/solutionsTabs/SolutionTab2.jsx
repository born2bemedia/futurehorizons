"use client";
import React from "react";
import OrderButton from "@/components/OrderButton";


const SolutionTab2 = ({title, details, buttonText}) => {
  return (
    <div className="solution tab2">
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

export default SolutionTab2;
