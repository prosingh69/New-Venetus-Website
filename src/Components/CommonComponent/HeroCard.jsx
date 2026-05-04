import React from 'react'

const HeroCard = ({Title , Para}) => {
  return (
    <section className='bg-[#F9F5F3] py-12 md:py-20 px-5 md:px-10 flex flex-col items-center md:items-start'>
        
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center md:text-left leading-tight'>
            {Title}
        </h1>
        
        <p className='text-base md:text-xl text-[#6E4C40] w-full max-w-2xl lg:max-w-3xl text-center md:text-left leading-relaxed'>
            {Para}
        </p>
    </section>
  )
}

export default HeroCard