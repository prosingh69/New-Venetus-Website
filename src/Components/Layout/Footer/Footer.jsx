import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#111111] text-white px-6 py-12 md:py-16 md:px-12 lg:px-24'>
      
      <div className='border-b border-[#333333] pb-12 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20'>

        <div className='flex flex-col items-start max-w-sm'>
          <h2 className='text-3xl md:text-4xl text-[#B74B21] font-bold mb-4'>Venetus Interior</h2>
          <p className='text-[16px] md:text-[17px] text-gray-400 leading-relaxed'>
            Premium interior design for Bangalore homes. We build trust through transparency, quality, and precision.
          </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full lg:w-auto'>
        
          <div className='flex flex-col items-start gap-3'>
            <h3 className='font-semibold text-[18px] mb-2 text-white'>Quick Links</h3>
            <NavLink to="/About" className="text-gray-400 hover:text-[#B74B21] transition-colors">About Us</NavLink>
            <NavLink to="/Services" className="text-gray-400 hover:text-[#B74B21] transition-colors">Services</NavLink>
            <NavLink to="/Portfolio" className="text-gray-400 hover:text-[#B74B21] transition-colors">Portfolio</NavLink>
          </div>
          
          <div className='flex flex-col items-start gap-3'>
            <h3 className='font-semibold text-[18px] mb-2 text-white'>Services</h3>
            <NavLink to="/Services" className="text-gray-400 hover:text-[#B74B21] transition-colors">Kitchen Design</NavLink>
            <NavLink to="/Services" className="text-gray-400 hover:text-[#B74B21] transition-colors">Bedroom Design</NavLink>
            <NavLink to="/Services" className="text-gray-400 hover:text-[#B74B21] transition-colors">Full Home Design</NavLink>
          </div>
          
          <div className='flex flex-col items-start gap-3'>
            <h3 className='font-semibold text-[18px] mb-2 text-white'>Contact</h3>
            <span className="text-gray-400">Bangalore, India</span>
            <span className="text-gray-400">+91 XXXXX XXXXX</span>
            <a href="mailto:info@venetusinterior.com" className="text-gray-400 hover:text-[#B74B21] transition-colors">
              info@venetusinterior.com
            </a>
          </div>
          
        </div>
      </div>

      <div className='pt-8 flex justify-center text-center'>
        <p className='text-gray-500 text-[14px] md:text-base'>
          &copy; {currentYear} Venetus Interior Bangalore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;