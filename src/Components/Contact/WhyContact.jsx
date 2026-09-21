import React from 'react'
import { Check } from "lucide-react"

const WhyContact = () => {
  const points = [
    "Free consultation - no obligation",
    "Expert advice tailored to your needs",
    "Transparent pricing and timelines",
    "Quick response within 24 hours",
    "Customized design solutions"
  ];

  return (
    <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 transition-all'>
      <h2 className='text-xl sm:text-2xl font-bold mb-4 text-gray-900'>
        Why Contact Us?
      </h2>
      <ul className='space-y-2.5'>
        {points.map((data, index) => (
          <li key={index} className='flex items-start gap-2.5 text-sm sm:text-base text-[#6E4C40]'>
            <Check color='#B74B21' className='w-5 h-5 shrink-0 mt-0.5' />
            <span>{data}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyContact;
