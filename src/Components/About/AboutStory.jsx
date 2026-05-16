import React from 'react'

const AboutStory = () => {
  return (
    // items-stretch ensures dono containers visually same height ke rahenge
    <section className='flex flex-col md:flex-row md:items-stretch py-10 md:py-20 px-5 md:px-10 gap-8 lg:gap-12 bg-[#F9F8F8]'>
        
        {/* TEXT SECTION: Ab sirf ye text decide karega ki pure section ki height kitni badi ya choti hogi */}
        <div className='w-full md:w-1/2 pl-0 lg:pl-4 flex flex-col justify-center'>
            
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6'>
                Our Story
            </h2>
            
            <p className='text-[#6E4C40] text-base md:text-[18px] lg:text-[19px] mb-4 leading-relaxed text-pretty'>
                Founded in 2009, our journey began with a simple mission: to bring affordable luxury interior design to Bangalore homes without compromising on quality or transparency.
            </p>
            <p className='text-[#6E4C40] text-base md:text-[18px] lg:text-[19px] mb-4 leading-relaxed text-pretty'>
                Over 15 years, we've completed 500+ projects, earning the trust of families across Bangalore. We believe that great design is not just about aesthetics—it's about creating spaces where families feel at home.
            </p>
            <p className='text-[#6E4C40] text-base md:text-[18px] lg:text-[19px] leading-relaxed text-pretty'>
                Today, our team of expert designers continues to innovate while staying true to our core values: transparency, quality, and customer satisfaction.
            </p>
        </div>
        
        {/* IMAGE SECTION: Isme 'relative' lagaya hai */}
        <div className='w-full md:w-1/2 relative'>
            {/* Desktop par (md:absolute md:inset-0) image ko text wali height mein perfect fit (object-cover) kar dega, bina usko bada kiye */}
            <img 
                src="/design.jpg" 
                alt="Venetus Interior Design Project" 
                className='w-full h-62.5 md:h-full md:absolute md:inset-0 object-cover rounded-2xl shadow-sm md:shadow-md'
            />
        </div>
    </section>
  )
}

export default AboutStory