import React from 'react'

const WhyWorkCard = ({Badge, Name,Para}) => {
    const Icons = Badge
  return (
    <div className='bg-white shadow-lg p-4 flex flex-col justify-center items-center rounded-xl'>
        <Icons size={40} color="#B74B21" strokeWidth={1.75} />
        <h1 className='text-xl font-semibold mt-2 '>{Name}</h1>
        <p className='text-center text-[#6E4C40] '>{Para}</p>
    </div>
  )
}

export default WhyWorkCard