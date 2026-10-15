import React from 'react'

const ContactDetail = ({ Icon, Title, Method, Detail, Para }) => {
  const Symbols = Icon
  const generateLink = () => {
    if (Method === 'tel') return `tel:${Detail.replace(/\s+/g, '')}`
    if (Method === 'mailto') return `mailto:${Detail.trim()}`
    if (Method === 'map') return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(Detail)}`
    return '#'
  }

  return (
    <a
      href={generateLink()}
      className="flex flex-col justify-center items-center text-center bg-[#151518] border border-white/[0.08] hover:border-[#E9C27A]/40 py-8 px-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E9C27A] group-hover:scale-110 group-hover:border-[#E9C27A]/40 transition-all duration-300">
        <Symbols size={28} strokeWidth={1.75} />
      </div>
      <h3 className="font-heading text-2xl font-medium text-white mb-2 mt-4">{Title}</h3>
      {/* Number and text both using font-body font-sans lining-nums so digits & words align on same baseline */}
      <span className="block mb-1 text-white font-body font-sans lining-nums font-semibold text-[15px] tracking-wide">
        {Detail}
      </span>
      <span className="block text-[#D4D4D8] font-body font-sans lining-nums text-[13px] leading-relaxed">
        {Para}
      </span>
    </a>
  )
}

export default ContactDetail