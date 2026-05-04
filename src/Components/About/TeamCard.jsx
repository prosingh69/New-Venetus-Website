import React from 'react'

const TeamCard = ({ data }) => {
  return (
    <div className='flex flex-col justify-center items-center p-6 md:p-8 bg-white rounded-2xl shadow-[0px_20px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300 border border-gray-50'>
      <img
        src={data.Profile}
        alt={data.Name}
        className='w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 object-cover border-4 border-[#F9F8F8]'
      />

      <h3 className='text-xl md:text-2xl font-bold mb-1 text-gray-800'>{data.Name}</h3>

      <span className='text-[#E78B30] text-sm md:text-base font-semibold mb-3 tracking-wide uppercase'>
        {data.Profession}
      </span>

      <p className='text-center text-[#6E4C40] text-sm md:text-base leading-relaxed'>
        {data.Detail}
      </p>
    </div>
  )
}

export default TeamCard