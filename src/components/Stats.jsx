import React from "react";

const Stats = () => {
  const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "3000+",
    },
    {
      id: "stats-2",
      title: "Trusted by Company",
      value: "50+",
    },
    {
      id: "stats-3",
      title: "Transaction",
      value: "$500k+",
    },
  ];
// flex justify-center items-center flex-row mb-6 sm:mb-10
  return (
    <section className="flex justify-center items-center flex-row mb-6 sm:mb-10 flex-wrap">
      {stats.map((stat) => (
        <div key={stat.id} className='flex-2 flex justify-start items-center flex-row m-3'>
          <h4 className="font-semibold text-xl text-[35px] sm:text-[50px] sm:leading-[70px] leading-[40px] text-white mr-3">{stat.value}</h4>
              <p className="font-normal text-base text-[16px] sm:text-[18px] sm:leading-[25px] leading-[20px] text-gradient mr-3">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
