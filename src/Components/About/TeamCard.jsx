import React from 'react'

const TeamCard = ({data}) => {
  return (
    <div className=' flex flex-col justify-center items-center p-5 m-4 rounded-b-2xl shadow-[0px_20px_30px_-10px_rgba(0,0,0,0.2)] '>
        <img src={data.Profile} alt="Team Member Profile" className='w-25 h-25 rounded-full mb-2' />
        <h3 className='font-bold mb-2'>{data.Name}</h3>
        <span className='text-[#E78B30] font-semibold mb-1'>{data.Profession}</span>
        <p className='text-center'>{data.Detail}</p>
    </div>
  )
}

export default TeamCard