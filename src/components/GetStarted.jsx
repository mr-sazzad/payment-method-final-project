import React from "react";
import arrowUp from '../assets/arrow-up.svg';

const GetStarted = () => {
  return (
    <div className="bg-blue-gradient w-[90px] h-[90px] md:w-[140px] md:h-[140px] rounded-full p-[2px] cursor-pointer">
      <div className="w-full h-full flex flex-col justify-center items-center bg-black rounded-full">
        <div className="flex flex-row justify-start items-center">
          <p className="text-[18px] leading-[23px] text-gradient">Get</p>
          <img src={arrowUp} alt="arrow" className="w-[20px] h-[20px]" />
        </div>
        <p className="text-[18px] leading-[23px] text-gradient">Started</p>
      </div>
    </div>
  );
};

export default GetStarted;
