import React from "react";
import discount from "../assets/Discount.svg";
import robot from "../assets/robot.png";
import GetStarted from "./GetStarted";

const Hero = () => (
  <div className="flex md:flex-row flex-col justify-center items-center py-[20px] ">
    <div className="flex-1 flex justify-start flex-col px-6 mb-10 md:mb-0">
      <div className="inline-flex items-center bg-discount-gradient rounded-[10px] px-3 py-1">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month </span> account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-semibold text-[3rem] text-start sm:leading-[90px] leading-[75px]">
          The Next <br className="hidden sm:block" />{" "}
          <span className="text-gradient">Generation</span>{" "}
          <br className="hidden sm:block" /> Payment Method
        </h1>
        <div className="hidden md:block">
          {" "}
          <GetStarted />
        </div>
      </div>
      <p className="text-start max-w-[470px] font-normal text-base leading-[30px] tracking-wide">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
      <img
        src={robot}
        alt="robot"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[40%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] top-0 bottom-[40] white__gradient rounded-full" />
      <div className="absolute z-[0] w-[40%] h-[40%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className="block md:hidden">
      <GetStarted />
    </div>
  </div>
);

export default Hero;
