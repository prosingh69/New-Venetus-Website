import React from 'react'

const Review = () => {
  return (
    <div className='bg-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 transition-all'>
      <p className='text-[#6E4C40] mb-3 italic text-sm sm:text-base leading-relaxed'>
        "The team was incredibly responsive and professional. They understood our vision perfectly and delivered beyond expectations!"
      </p>
      <span className='font-semibold text-xs sm:text-sm text-gray-900 block'>
        — Priya Desai, Indiranagar
      </span>
    </div>
  );
};

export default Review;
