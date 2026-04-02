import React from 'react'

const HeroCard = ({Title , Para}) => {
    return (
        <section className='bg-[#F9F5F3] py-10 md:py-20 px-7 md:px-10'>
            <h1 className='text-6xl font-bold mb-6 text-center md:text-start '>{Title}</h1>
            <p className='text-xl text-[#6E4C40] md:w-170 text-wrap text-center md:text-start'>{Para}</p>
        </section>
    )
}

export default HeroCard