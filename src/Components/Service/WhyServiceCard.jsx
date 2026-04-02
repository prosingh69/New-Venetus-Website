import React from 'react'

const WhyServiceCard = ({Data}) => {
  return (
    <div className='flex flex-col'>
        <h2 className='text-xl mb-3 font-medium'>{Data.Title}</h2>
        <p>{Data.Para}</p>
    </div>
  )
}

export default WhyServiceCard