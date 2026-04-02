import React from 'react'
import {ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'
const LastCTA = () => {
  return (
    <section className='flex flex-col items-center justify-center px-2 bg-[#B74B21] py-30'>
        <h2 className='text-4xl font-bold text-white mb-3 text-center '>Ready to Transform Your Home?</h2>
        <p className='text-[18px] text-white mb-5 text-center'>Get a free consultation with our design experts. No obligation, just honest advice.</p>
        <NavLink to="/Contact" className='border-2 text-[#B74B21] border-[#B74B21] flex justify-center items-center gap-2 bg-white font-semibold px-3 py-2 cursor-pointer active:scale-97 rounded-[7px]'>Schedule Your Free Consultation <ArrowRight /></NavLink>
    </section>
  )
}

export default LastCTA