import React from 'react';
import AnimatedCounter from "../TrustBelt/AnimatedCounter"

const ClientTrustBelt = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-12 lg:px-32 bg-[#F9F8F8]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 lg:flex lg:justify-between gap-y-8 gap-x-2 lg:gap-x-12">
        
        
        <div className="flex flex-col items-center justify-start text-center">
          <span className="text-[26px] md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-[12px] md:text-[18px] ubuntu-medium text-gray-700 leading-tight">Happy Families</span>
        </div>

        
        <div className="flex flex-col items-center justify-start text-center">
          <span className="text-[26px] md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={4.9} suffix='/5' duration={2000} decimals={1} />
          </span>
          <span className="text-[12px] md:text-[18px] ubuntu-medium text-gray-700 leading-tight">Average Rating</span>
        </div>

     
        <div className="flex flex-col items-center justify-start text-center">
          <span className="text-[26px] md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={100} suffix="%" duration={2000} />
          </span>
          <span className="text-[12px] md:text-[18px] ubuntu-medium text-gray-700 leading-tight">Satisfaction Rate</span>
        </div>

        <div className="flex flex-col items-center justify-start text-center">
          <span className="text-[26px] md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-[12px] md:text-[18px] ubuntu-medium text-gray-700 leading-tight">Years Trusted</span>
        </div>

      </div>
    </div>
  );
};

export default ClientTrustBelt;