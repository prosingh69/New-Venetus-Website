import React, { useState } from 'react';
import { X, Info, Briefcase, LayoutGrid, Route } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/Contact";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinkClasses = ({ isActive }) => {
    return `transition-colors text-[16px] lg:text-[19px] hover:text-[#B74B21] font-semibold ${isActive ? 'text-[#B74B21] font-bold' : 'text-gray-800'}`;
  };

  const sidebarLinkClasses = ({ isActive }) => {
    return `flex items-center gap-4 transition-colors hover:text-[#B74B21] font-semibold text-lg ${isActive ? 'text-[#B74B21] font-bold' : 'text-gray-800'}`;
  };

  return (
    <>
      <nav className='sticky top-0 z-40 flex justify-between items-center px-4 py-2 md:px-8 md:py-3 bg-[#F9F5F3] border-b border-[#F3E5DE] shadow-sm'>
        {/* Hamburger Menu */}
        <div className="flex flex-1 md:hidden justify-start">
          <button
            onClick={toggleSidebar}
            className='relative w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200/50 transition-colors duration-200 focus:outline-none z-50'
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? 'opacity-0 top-2' : 'top-2'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ease-in-out ${isSidebarOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center md:justify-start">
          <NavLink to={"/"} className="flex items-center z-50">
            <img
              src="/logo_1.png"
              className='h-12 sm:h-14 md:h-16 w-auto object-contain scale-110'
              alt="Venetus Interiors logo"
            />
          </NavLink>
        </div>

        {/* Right Side Items */}
        <div className="flex flex-1 md:flex-none justify-end items-center gap-2 lg:gap-4">
          <div className='hidden md:flex gap-6 lg:gap-10 items-center'>
            <NavLink to="/About" className={navLinkClasses}>About</NavLink>
            <NavLink to="/Services" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/Portfolio" className={navLinkClasses}>Portfolio</NavLink>
            <NavLink to="/Process" className={navLinkClasses}>Process</NavLink>

            {isContactPage ? (
              <span className='text-[#B74B21] font-semibold text-[18px] flex items-center gap-2'>
                Contact
              </span>
            ) : (
              <NavLink to="/Contact" className='bg-[#B74B21] py-2 lg:py-2.5 px-5 lg:px-6 rounded-lg text-amber-50 font-bold cursor-pointer hover:bg-[#9c3e1b] transition-all shadow-md'>
                Get Started
              </NavLink>
            )}
          </div>

          {/* WhatsApp Icon Link - Mobile Only (Added md:hidden) */}
          <a
            href="https://wa.me/917830015110"
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:hidden items-center justify-center p-2 rounded-full hover:bg-green-100 transition-colors ml-2"
            aria-label="Chat on WhatsApp"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              className="text-[#25D366] fill-current"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#F9F5F3] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-5 border-b border-[#F3E5DE]">
          <span className="text-[#B74B21] font-bold text-xl">Menu</span>
          <button
            onClick={toggleSidebar}
            className="p-2 bg-white rounded-full text-gray-800 hover:text-[#B74B21] hover:bg-[#F3E5DE] transition-colors shadow-sm"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 overflow-y-auto mt-2">
          <NavLink to="/About" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <Info size={22} className="text-[#B74B21]" />
            About
          </NavLink>
          <NavLink to="/Services" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <Briefcase size={22} className="text-[#B74B21]" />
            Services
          </NavLink>
          <NavLink to="/Portfolio" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <LayoutGrid size={22} className="text-[#B74B21]" />
            Portfolio
          </NavLink>
          <NavLink to="/Process" className={sidebarLinkClasses} onClick={toggleSidebar}>
            <Route size={22} className="text-[#B74B21]" />
            Process
          </NavLink>

          <div className="mt-6 pt-6 border-t border-[#F3E5DE]">
            <NavLink
              to="/Contact"
              className='block w-full text-center bg-[#B74B21] py-3 px-6 rounded-[10px] text-amber-50 font-bold hover:bg-[#9c3e1b] transition-all shadow-md'
              onClick={toggleSidebar}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;