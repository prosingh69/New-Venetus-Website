import React from 'react'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'

const AboutLastCta = () => {
  return (
    
    <section className='flex flex-col items-center justify-center bg-[#B74B21] py-16 md:py-24 px-5'>
        
        
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 text-center leading-tight'>
            Let's Create Something Beautiful
        </h2>
        
        
        <p className='text-base md:text-[18px] text-white/90 mb-6 md:mb-8 text-center'>
            Schedule a consultation with our team today.
        </p>
        
        
        <NavLink 
            to="/contact" 
            className='group flex justify-center items-center gap-2 bg-white text-[#B74B21] border-2 border-white hover:bg-transparent hover:text-white font-semibold px-6 py-3 md:px-8 md:py-3.5 cursor-pointer transition-all duration-300 active:scale-95 rounded-lg shadow-lg hover:shadow-none'
        >
            Get Started 
            <ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
        </NavLink>
    </section>
  )
}

export default AboutLastCta