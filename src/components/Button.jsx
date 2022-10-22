import React from "react";

const Button = ({ style }) => {
  return (
    <div>
      <button type="button" className={`px-6 py-4 bg-blue-gradient ${style} font-normal text-[18px] outline-none text-black rounded-md`}>Get Stated</button>
    </div>
  );
};

export default Button;
