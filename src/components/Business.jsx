import React from "react";
import features from "../statistic/Statistic";
import Button from "./Button";

const Business = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-10">
      <div>
        <h2 className="text-[48px] font-semibold text-start leading-[80px]">
          You do the business, <br className="hidden md:block" /> we’ll handle
          the money.
        </h2>
        <p className="max-w-[470px] text-start text-slate-300 mt-5 leading-[30px] tracking-wide">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={`mt-10 `} />
      </div>
      <div>
        {features.map((feature, index) => (
          <div
            className={`flex flex-row justify-center items-center ${
              index === features.length - 1 ? "mb-0" : "mb-10"
            } p-6 rounded-[20px] mt-10 md:mt-0 feature-card cursor-pointer`}
          >
            <div className="w-[64px] h-[60px] flex justify-center items-center bg-dimBlue mr-3 rounded-full">
              <img
                src={feature.icon}
                alt="icon"
                className="w-[50%] h-[50%] object-contain"
              />
            </div>
            <div className="">
              <h2>{feature.title}</h2>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
