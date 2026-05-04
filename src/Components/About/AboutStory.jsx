import React from 'react'

const AboutStory = () => {
  return (
    <section className='flex justify-center items-center lg:items-start flex-col md:flex-row py-10 md:py-20 px-5 md:px-10 gap-8 md:gap-6 bg-[#F9F8F8]'>
        <div className='w-full md:w-1/2 pl-0 md:pl-4 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mt-6'>
                Our Story
            </h2>
            <p className='text-[#6E4C40] text-base md:text-[19px] leading-relaxed mb-4'>
                Founded in 2009, our journey began with a simple mission: to bring affordable luxury interior design to Bangalore homes without compromising on quality or transparency.
            </p>
            <p className='text-[#6E4C40] text-base md:text-[19px] leading-relaxed mb-4'>
                Over 15 years, we've completed 500+ projects, earning the trust of families across Bangalore. We believe that great design is not just about aesthetics—it's about creating spaces where families feel at home.
            </p>
            <p className='text-[#6E4C40] text-base md:text-[19px] leading-relaxed'>
                Today, our team of expert designers continues to innovate while staying true to our core values: transparency, quality, and customer satisfaction.
            </p>
        </div>

        <div className='w-full md:w-1/2 flex justify-center lg:justify-end mt-4 md:mt-0'>
            <img 
                src="/design.jpg" 
                alt="Venetus Interior Design Project" 
                className='w-full md:w-87.5 lg:w-112.5 h-62.5 md:h-auto max-h-100 object-cover rounded-2xl shadow-md'
            />
        </div>
    </section>
  )
}

export default AboutStory