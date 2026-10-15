import React from 'react'

const ClientReviewCard = ({ Para, Name, Location, Type }) => {
  return (
    <div className="bg-[#151518] rounded-[24px] border border-white/[0.08] hover:border-[#E9C27A]/40 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group h-full">
      <div>
        {/* 5 Gold Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#E9C27A] fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Quote text */}
        <p className="font-heading text-white/90 italic text-[16px] sm:text-[17px] leading-relaxed mb-6">
          "{Para}"
        </p>
      </div>

      <div className="border-t border-white/[0.08] pt-4 mt-auto">
        <span className="block font-heading font-medium text-white text-lg leading-snug">
          {Name}
        </span>
        <span className="block font-body text-white/50 text-xs mt-0.5">
          {Location}
        </span>
        <span className="block font-body text-[#E9C27A] font-semibold text-[11px] uppercase tracking-[0.18em] mt-1.5">
          {Type}
        </span>
      </div>
    </div>
  )
}

export default ClientReviewCard