import React from 'react'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const AboutStory = () => {
  return (
    <section className='flex flex-col md:flex-row md:items-stretch py-10 md:py-20 px-5 md:px-10 gap-8 lg:gap-12 bg-[#F9F8F8]'>

      <div className='w-full md:w-1/2 pl-0 lg:pl-4 flex flex-col justify-center'>
        <FadeUp delay={0.05} duration={0.65}>
          <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6'>
            Our Story
          </h2>
        </FadeUp>
        <FadeUp delay={0.2} duration={0.6}>
          <p className='text-[#6E4C40] text-base md:text-[18px] lg:text-[19px] mb-4 leading-relaxed text-pretty'>
            Founded in 2009, our journey began with a simple mission: to bring affordable luxury interior design to Bangalore homes without compromising on quality or transparency.
          </p>
        </FadeUp>
        <FadeUp delay={0.32} duration={0.6}>
          <p className='text-[#6E4C40] text-base md:text-[18px] lg:text-[19px] mb-4 leading-relaxed text-pretty'>
            Over 15 years, we've completed 500+ projects, earning the trust of families across Bangalore. We believe that great design is not just about aesthetics—it's about creating spaces where families feel at home.
          </p>
        </FadeUp>
        <FadeUp delay={0.44} duration={0.6}>
          <p className='text-[#6E4C40] text-base md:text-[18px] lg:text-[19px] leading-relaxed text-pretty'>
            Today, our team of expert designers continues to innovate while staying true to our core values: transparency, quality, and customer satisfaction.
          </p>
        </FadeUp>
      </div>

      <motion.div
        className='w-full md:w-1/2 relative'
        initial={{ opacity: 0, scale: 0.96, x: 40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src="/design.jpg"
          alt="Venetus Interior Design Project"
          className='w-full h-62.5 md:h-full md:absolute md:inset-0 object-cover rounded-2xl shadow-sm md:shadow-md'
        />
      </motion.div>
    </section>
  )
}

export default AboutStory
