import React from 'react'
import {ArrowRight} from "lucide-react"
import { NavLink } from 'react-router-dom'
const Hero = () => {
    return (
        <section className='bg-[#F8F6F4] py-10 md:py-36 px-7 md:px-10 grid-cols-1 grid md:flex md:justify-between border-b border-[#F3E5DE]'>
            <div>
                <div className='flex justify-center md:justify-start'>
                <span className='bg-[#F7ECE2] text-[#E88B30] py-2 px-4 rounded-full font-semibold'>✓ Trusted by 500+ Families</span>
                </div>
                <h1 className=' text-[45px] md:text-[66px]  font-bold flex flex-col text-center md:text-start mt-5 mb-5 leading-15 md:leading-18'>Transform Your <span>Bangalore Home</span> </h1>
                <p className='text-wrap text-center md:text-start text-[#6E4C40] text-[20px] mb-7 leading-9'>Premium interior design with transparent pricing, guaranteed timelines, and material quality you can trust. We specialize in Bangalore apartments.</p>
                <div className = " grid grid-cols-1 md:flex gap-4">
                    <NavLink className='flex justify-center gap-2 items-center bg-[#9c3e1b] hover:bg-[#B74B21] py-2 px-4 rounded-md text-white cursor-pointer'>
                        Schedule Free Consultation
                        <ArrowRight />
                    </NavLink>
                    <NavLink to={"/Portfolio"} className=" text-center active:scale-97 border border-[#F3E5dE] py-2 px-4 hover:bg-[#9c3e1b] rounded-md hover:text-white cursor-pointer">View Portfolio</NavLink>
                </div>
            </div>
            <div className="px-4 mt-15">
                <img src="/design.jpg" alt="Design Interior Picture" className='w-300 h-100 rounded-2xl object-cover' />
            </div>
        </section>
    )
}
export default Hero