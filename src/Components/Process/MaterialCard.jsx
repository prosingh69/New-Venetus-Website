import React from 'react'

const MaterialCard = ({Name,Brands,Grades}) => {
  return (
    <div className='rounded-2xl p-5 shadow-lg'>
        <h1 className='text-xl font-bold mb-1'>{Name}</h1>
        <h2 className='text-[#6E4C40] mb-2'>Trusted Brands: <span className='flex flex-row gap-1.5'>{Brands.map((data)=>(<span className=' text-[#BD4B21] rounded-4xl px-2 py-1 mt-1 bg-[#F7EDE8]'>{data}</span>))}</span></h2>
        <p className='text-[#F0A930] font-medium '>Grade: {Grades}</p>
    </div>
  )
}

export default MaterialCard