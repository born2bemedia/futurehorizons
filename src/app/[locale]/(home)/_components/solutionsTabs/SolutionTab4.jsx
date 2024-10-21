"use client";
import React from "react";
import OrderButton from "@/components/OrderButton";

const SolutionTab4 = ({title, details, buttonText}) => {
  return (
    <div className="solution tab4">
      <div>
        <h3>Poor Search Engine Visibility</h3>
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

export default SolutionTab4;
