import React from 'react'
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({Icon, Title, Para, Points}) => {
    const AnimatedIcon = Icon; 
  return (
    <div className='flex flex-col bg-white p-8 rounded-[25px] shadow-2xl transition-transform hover:-translate-y-2 duration-300'>
       <AnimatedIcon size={58} color="#B74B21" strokeWidth={2.25} />
       <h2 className='mb-3 mt-4 text-2xl font-semibold'>{Title}</h2>
       <p className='text-[#8A684C] mb-5 leading-relaxed'>{Para}</p>
  
       <ul className='mb-6 space-y-2'>
           {Points.map((Feature, index) => (
             <li className='flex items-center gap-2 text-[17px] text-gray-700' key={index}>
                <span className='text-[#B74B21] text-2xl'>•</span> {Feature}
             </li>
           ))}
       </ul>
       
       <NavLink to="/Contact" className='mt-auto flex justify-center items-center gap-2 border border-[#8A684C]/30 py-3 rounded-[7px] hover:bg-[#B74B21] hover:text-white transition-colors cursor-pointer font-medium text-[#B74B21]'>
          Learn More <ArrowRight className='mt-0.75' size={18}/>
       </NavLink>
    </div>
  )
}

export default ServiceCard;