import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-[#111111] text-white py-12 md:py-16'>
      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14'>
        <div className='border-b border-[#2A2A2A] pb-10 sm:pb-12 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16'>

        {/* Brand Column */}
        <div className='flex flex-col items-start max-w-sm'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl text-[#B74B21] font-bold mb-3 tracking-tight'>
            Venetus Interior
          </h2>
          <p className='text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed text-pretty'>
            Premium interior design for Bangalore homes. We build trust through transparency, quality, and precision.
          </p>
        </div>
        
        {/* Links Grid: 2 columns on mobile, 3 columns on tablet/desktop */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 sm:gap-10 w-full lg:w-auto'>
        
          {/* Col 1: Quick Links */}
          <div className='flex flex-col items-start gap-2 sm:gap-2.5'>
            <h3 className='font-semibold tracking-wider uppercase text-xs sm:text-sm text-[#E88B30] mb-1'>
              Quick Links
            </h3>
            <NavLink to="/About" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">About Us</NavLink>
            <NavLink to="/Services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Services</NavLink>
            <NavLink to="/Portfolio" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Portfolio</NavLink>
            <NavLink to="/Process" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Process</NavLink>
            <NavLink to="/Contact" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Contact</NavLink>
          </div>
          
          {/* Col 2: Services */}
          <div className='flex flex-col items-start gap-2 sm:gap-2.5'>
            <h3 className='font-semibold tracking-wider uppercase text-xs sm:text-sm text-[#E88B30] mb-1'>
              Services
            </h3>
            <NavLink to="/Services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Kitchen Design</NavLink>
            <NavLink to="/Services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Bedroom Design</NavLink>
            <NavLink to="/Services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Living Room</NavLink>
            <NavLink to="/Services" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors py-0.5">Full Home Design</NavLink>
          </div>
          
          {/* Col 3: Contact (spans 2 columns on mobile with border-t) */}
          <div className='col-span-2 md:col-span-1 flex flex-col items-start gap-2.5 sm:gap-3 pt-5 md:pt-0 border-t border-[#222222] md:border-t-0'>
            <h3 className='font-semibold tracking-wider uppercase text-xs sm:text-sm text-[#E88B30] mb-1'>
              Contact
            </h3>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
              <MapPin size={15} className="text-[#B74B21] shrink-0" />
              <span>Bangalore, Karnataka, India</span>
            </div>
            <a href="tel:+917830015110" className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
            <a href="tel:+919916565945" className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              <Phone size={15} className="text-[#B74B21] shrink-0" />
              <span>+91 78300 15110</span>
              <span>+91 99165 65945</span>
            </a>
            <a href="mailto:info@venetusinterior.com" className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
            <a href="mailto:support@venetusinterior.in" className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              <Mail size={15} className="text-[#B74B21] shrink-0" />
              <span>info@venetusinterior.com</span>
              <span>support@venetusinterior.in</span>
            </a>
          </div>
          
        </div>
      </div>

      {/* Copyright */}
      <div className='pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center gap-3'>
        <p className='text-gray-500 text-xs sm:text-sm'>
          &copy; {currentYear} Venetus Interior Bangalore. All rights reserved.
        </p>
        <p className='text-gray-600 text-xs'>
          Designed with quality & craftsmanship
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
