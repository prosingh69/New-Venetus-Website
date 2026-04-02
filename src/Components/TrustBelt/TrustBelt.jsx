import React from 'react';
import AnimatedCounter from "./AnimatedCounter";

const TrustBelt = () => {
  return (
    
    <div className="py-12 px-4 md:p-20 border-b border-[#F3E5DE]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-4">
  
        <div className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#B74B21] tracking-tight mb-2">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-gray-700">Years Of Experience</span>
        </div>

 
        <div className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#B74B21] tracking-tight mb-2">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-gray-700">Project Completed</span>
        </div>

 
        <div className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#B74B21] tracking-tight mb-2">
            <AnimatedCounter endValue={100} suffix="%" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-gray-700">On-Time Delivery</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#B74B21] tracking-tight mb-2">
            <AnimatedCounter endValue={10} suffix="Yrs" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-gray-700">Warranty Guarantee</span>
        </div>

      </div>
    </div>
  );
};

export default TrustBelt;