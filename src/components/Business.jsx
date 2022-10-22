import React from "react";
import send from "../assets/Send.svg";
import shield from "../assets/shield.svg";
import star from "../assets/Star.svg";
import Button from "./Button";

const Business = () => {
  const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: "feature-3",
      icon: send,
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];

    const FeatureCard = ({icon, title, content, index}) => {
    <div className="flex flex-row justify-center items-center">
      <div className={`${index === features.length -1 ? "mb-0" : "mb-10"}`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%]object-contain"/>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
        
    </div>;
  };

  return (
    <div className="flex md:flex-row flex-col p-6 md:p-10">
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
        {features.map((feature, index) => {
          <FeatureCard key={feature.id} {...feature} index={index} />
        })}
      </div>
    </div>
  );
};

export default Business;
