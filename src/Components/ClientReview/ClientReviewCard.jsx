import React from 'react'

const ClientReviewCard = ({ Para, Name, Location, Type }) => {
  return (
    <div className='bg-white rounded-2xl shadow-2xl p-5'>
      <div className='flex'>
        {[...Array(4)].map((_, i) => (
          <svg key={i} className="w-7 h-7 text-orange-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}

      </div>
      <p className='mt-3 mb-3 border-b border-black/20 pb-10 italic text-[#984C40]'>"{Para}"</p>
      <span className='block font-semibold'>{Name}</span>
      <span className='block text-[#984C40]'>{Location}</span>
      <span className='block text-[#F0A930] font-medium text-[14px]'>{Type}</span>
    </div>
  )
}

export default ClientReviewCard