import React from 'react'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (

    <section className='bg-[#F8F6F4] py-16 md:py-24 px-5 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center border-b border-[#F3E5DE] gap-12 lg:gap-16'>
        
        {/* Text Section: Width 50% on desktop */}
        <div className='w-full md:w-1/2 flex flex-col'>
            <div className='flex justify-center md:justify-start'>
                <span className='bg-[#F7ECE2] text-[#E88B30] py-2 px-4 rounded-full font-semibold text-sm md:text-base'>
                    ✓ Trusted by 500+ Families
                </span>
            </div>
            
            {/* Invalid leading-15/18 ko hata kar leading-tight/arbitrary values set ki. */}
            <h1 className='text-4xl md:text-5xl lg:text-[66px] font-bold flex flex-col text-center md:text-left mt-6 mb-5 leading-tight lg:leading-[1.1] text-gray-900'>
                Transform Your <span className="text-[#9c3e1b]">Bangalore Home</span> 
            </h1>
            
            {/* pichle solution ka text-pretty yahan use kiya taaki orphan words na banein */}
            <p className='text-center md:text-left text-[#6E4C40] text-lg md:text-[20px] mb-8 leading-relaxed text-pretty'>
                Premium interior design with transparent pricing, guaranteed timelines, and material quality you can trust. We specialize in Bangalore apartments.
            </p>
            
            {/* Buttons Layout: Mobile par ek ke neeche ek (sm:flex-row se thoda wide screens par side-by-side) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <NavLink 
                    to="/contact" 
                    className='group flex justify-center gap-2 items-center bg-[#9c3e1b] hover:bg-[#B74B21] py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg'
                >
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
                <NavLink 
                    to="/portfolio" 
                    className="text-center transition-all duration-300 active:scale-95 border-2 border-[#F3E5DE] py-3 px-6 hover:border-[#9c3e1b] hover:bg-[#9c3e1b] rounded-lg hover:text-white font-medium text-[#6E4C40]"
                >
                    View Portfolio
                </NavLink>
            </div>
        </div>

        {/* Image Section: Width 50% on desktop */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
            {/* Invalid w-300 ko w-full max-w-lg me change kiya. Height responsive kardi. */}
            <img 
                src="/design.jpg" 
                alt="Venetus Interior Design Project" 
                className='w-full max-w-md lg:max-w-lg h-[300px] md:h-[450px] rounded-2xl object-cover shadow-xl' 
            />
        </div>
    </section>
  )
}

export default Hero