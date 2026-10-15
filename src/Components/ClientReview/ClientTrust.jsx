import React from 'react'
import { ShieldCheck } from 'lucide-react'

const ClientTrust = ({ Title, Para }) => {
  return (
    <div className='relative group bg-[#151518] border border-white/[0.08] hover:border-[#E9C27A]/40 rounded-[22px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.35)] h-full flex flex-col justify-between'>
      <div>
        <div className='flex items-center gap-3 mb-3.5'>
          <div className='w-9 h-9 rounded-xl bg-[#E9C27A]/10 border border-[#E9C27A]/30 flex items-center justify-center text-[#E9C27A] flex-shrink-0 group-hover:bg-[#E9C27A]/20 transition-colors'>
            <ShieldCheck className='w-4 h-4' />
          </div>
          <h3 className='font-heading text-lg sm:text-xl font-medium text-white tracking-wide'>
            {Title}
          </h3>
        </div>
        <p className='font-body text-xs sm:text-sm text-[#CCCCCC] leading-relaxed'>
          {Para}
        </p>
      </div>
    </div>
  )
}

export default ClientTrust