import React from 'react'
import {ArrowRight} from "lucide-react"
import { NavLink } from 'react-router-dom'
const AboutLastCta = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-[#B74B21] py-30'>
        <h2 className='text-4xl font-bold text-white mb-3 text-center '>Let's Create Something Beautiful</h2>
        <p className='text-[18px] text-white mb-5'>Schedule a consultation with our team today.</p>
        <NavLink to="/Contact" className='border-2 text-[#B74B21] border-[#B74B21] flex justify-center items-center gap-2 bg-white font-semibold px-3 py-2 cursor-pointer active:scale-97 rounded-[7px]'>Get Started <ArrowRight className='mt-[0.1px]' /></NavLink>
    </section>
  )
}

export default AboutLastCta