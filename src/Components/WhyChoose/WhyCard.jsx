import React from 'react'
const WhyCard = ({ icon, title, description }) => {
  const IconComponent = icon;

  return (
    <div className='bg-[#ffffff] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col gap-3'>
        <div className='mb-2'>
            <IconComponent color="#C2410C" strokeWidth={2} size={40} />
        </div>
        <h3 className='font-semibold text-xl text-gray-900'>{title}</h3>
        <p className='text-[#6E4C40] leading-relaxed'>{description}</p>
    </div>
  )
}

export default WhyCard