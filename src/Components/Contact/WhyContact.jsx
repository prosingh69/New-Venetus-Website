import React from 'react'
import { Check } from 'lucide-react'

const WhyContact = () => {
  const points = [
    'Free consultation — zero obligation',
    'Expert advice tailored to your space',
    'Transparent pricing and guaranteed handover',
    'Quick response within 24 hours',
    '10-year warranty with factory fabrication',
  ]

  return (
    <div className="bg-[#151518] p-6 sm:p-8 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/[0.08] transition-all">
      <h3 className="font-heading text-2xl font-medium text-white mb-4">Why Choose Venetus?</h3>
      <ul className="space-y-3">
        {points.map((data, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm sm:text-[14.5px] text-[#D4D4D8] font-body font-sans lining-nums leading-relaxed"
          >
            <div className="w-5 h-5 rounded-full bg-[#E9C27A]/15 border border-[#E9C27A]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#E9C27A]">
              <Check className="w-3 h-3" strokeWidth={2.5} />
            </div>
            <span>{data}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WhyContact
