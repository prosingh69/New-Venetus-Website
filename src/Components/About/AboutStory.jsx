import React from 'react'

const AboutStory = () => {
  return (
    <section className=' flex justify-center items-center lg:items-start flex-col md:flex-row py-10 md:py-20 px-7 md:px-10 gap-6 bg-[#F9F8F8]'>
        <div className='pl-4'>
            <h2 className='text-5xl font-bold mb-6 lg:mt-6'>Our Story</h2>
            <p className='text-[#6E4C40] text-[19px] mb-4 '>Founded in 2009, our journey began with a simple mission: to bring affordable luxury interior design to Bangalore homes without compromising on quality or transparency.</p>
            <p className='text-[#6E4C40] text-[19px] mb-4 '>Over 15 years, we've completed 500+ projects, earning the trust of families across Bangalore. We believe that great design is not just about aesthetics—it's about creating spaces where families feel at home.</p>
            <p className='text-[#6E4C40] text-[19px] '>Today, our team of expert designers continues to innovate while staying true to our core values: transparency, quality, and customer satisfaction.</p>
        </div>
        <div>
            <img src="/design.jpg" alt="placeholder" className='w-350 max-h-100 object-cover rounded-2xl'/>
        </div>
    </section>
  )
}

export default AboutStory