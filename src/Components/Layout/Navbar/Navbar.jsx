import React, { useState } from 'react';
import { X, Info, Briefcase, LayoutGrid, Route } from 'lucide-react'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinkClasses = ({ isActive }) => {
    return `transition-colors hover:text-[#B74B21] font-semibold ${
      isActive ? 'text-[#B74B21] font-bold' : 'text-gray-800'
    }`;
  };

  const sidebarLinkClasses = ({ isActive }) => {
    return `flex items-center gap-4 transition-colors hover:text-[#B74B21] font-semibold text-lg ${
      isActive ? 'text-[#B74B21] font-bold' : 'text-gray-800'
    }`;
  };

  return (
    <>
      <nav className='sticky top-0 z-40 flex flex-row-reverse md:flex-row justify-between items-center p-4 bg-[#F9F5F3] border-b border-[#F3E5DE]'>
        
        <a href='/' className='text-[#B74B21] font-bold text-2xl'>Venetus Interior</a>
       
        <div className='hidden md:flex gap-8 items-center'>
            <NavLink to="/About" className={navLinkClasses}>About</NavLink>
            <NavLink to="/Services" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/Portfolio" className={navLinkClasses}>Portfolio</NavLink>
            <NavLink to="/Process" className={navLinkClasses}>Process</NavLink>
            
            <NavLink to="/Contact" className='ml-6 bg-[#B74B21] py-3 px-6 rounded-[10px] text-amber-50 font-bold cursor-pointer hover:bg-[#9c3e1b] transition-all'>
                Get Started
            </NavLink>
        </div>   

        <button 
          onClick={toggleSidebar} 
          className='md:hidden relative w-12 h-12 flex justify-center items-center rounded-full hover:scale-110 transition-transform duration-200 focus:outline-none z-50'
          aria-label="Toggle Menu"
        >
          <span className={`absolute w-8 h-0.75 bg-[#B74B21] rounded-full transition-all duration-400 ease-[cubic-bezier(0.84,0.06,0.52,1.8)] ${
            isSidebarOpen ? 'rotate-40' : '-translate-y-2'
          }`}></span>
          
          <span className={`absolute w-8 h-0.75 bg-[#B74B21] rounded-full transition-all duration-400 ease-[cubic-bezier(0.84,0.06,0.52,1.8)] ${
            isSidebarOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          
          <span className={`absolute w-8 h-0.75 bg-[#B74B21] rounded-full transition-all duration-400 ease-[cubic-bezier(0.84,0.06,0.52,1.8)] ${
            isSidebarOpen ? '-rotate-40' : 'translate-y-2'
          }`}></span>
        </button>     
      </nav>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 md:hidden transition-opacity"
          onClick={toggleSidebar}
        ></div>
      )}

      <div 
        className={`fixed top-0 left-0 h-full w-70 bg-[#F9F5F3] shadow-2xl z-50 transform transition-transform duration-600 ease-[cubic-bezier(0.62,0.04,0.3,1.56)] md:hidden flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
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
              className='block w-full text-center bg-[#B74B21] py-3 px-6 rounded-[10px] text-amber-50 font-bold hover:bg-[#9c3e1b] transition-all'
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