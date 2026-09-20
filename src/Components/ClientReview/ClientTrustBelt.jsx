import React from 'react';
import AnimatedCounter from "../TrustBelt/AnimatedCounter"

const ClientTrustBelt = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 md:px-12 lg:px-24 bg-[#F9F8F8] border-b border-[#F3E5DE]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-3 sm:gap-x-6">
        
        <div className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Happy Families</span>
        </div>

        <div className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={4.9} suffix='/5' duration={2000} decimals={1} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Average Rating</span>
        </div>

        <div className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={100} suffix="%" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Satisfaction Rate</span>
        </div>

        <div className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Years Trusted</span>
        </div>

      </div>
    </div>
  );
};

export default ClientTrustBelt;
