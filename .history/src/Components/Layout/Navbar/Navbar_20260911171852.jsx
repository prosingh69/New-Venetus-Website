import React, { useState, useEffect } from 'react';
import { X, Info, Briefcase, LayoutGrid, Route } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/Contact';

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 10);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setIsSidebarOpen(false); }, [location]);

  const toggleSidebar = () => setIsSidebarOpen(p => !p);

  const navLinkClasses = ({ isActive }) =>
    'relative group text-[15px] lg:text-[16px] font-semibold tracking-wide transition-colors duration-300 pb-0.5 ' +
    'relative group inline-flex items-center font-semibold tracking-wide transition-all duration-500 ' +
    (isScrolled ? 'text-[14px] lg:text-[15px]' : 'text-[15px] lg:text-[16px]') + ' ' +
    (isActive ? 'text-[#B74B21]' : 'text-gray-700 hover:text-[#B74B21]');

  const sidebarLinkClasses = ({ isActive }) =>
    'flex items-center gap-4 transition-colors duration-200 hover:text-[#B74B21] font-semibold text-[17px] ' +
    (isActive ? 'text-[#B74B21]' : 'text-gray-700');

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className={'fixed top-0 left-0 right-0 z-50 bg-[#F8F6F4] transition-all duration-500 ease-in-out ' + (isScrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.09)] border-b border-[#EDE0D8]' : 'border-b border-transparent')}>
        <div className={'max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex items-center transition-all duration-500 ease-in-out ' + (isScrolled ? 'h-[60px] md:h-[70px]' : 'h-[100px] md:h-[120px]')}>

          {/* Mobile Hamburger */}
          <button onClick={toggleSidebar} className='md:hidden relative w-10 h-10 flex justify-center items-center rounded-full hover:bg-black/5 transition-colors focus:outline-none mr-2' aria-label='Toggle Menu'>
            <div className='relative w-5 h-4'>
              <span className={'absolute left-0 w-5 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ' + (isSidebarOpen ? 'rotate-45 top-2' : 'top-0')} />
              <span className={'absolute left-0 w-5 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ' + (isSidebarOpen ? 'opacity-0 top-2' : 'top-2')} />
              <span className={'absolute left-0 w-5 h-0.5 bg-[#B74B21] rounded-full transition-all duration-300 ' + (isSidebarOpen ? '-rotate-45 top-2' : 'top-4')} />
            </div>
          </button>

          {/* Logo — big at top, shrinks on scroll */}
          <NavLink to='/' className='flex items-center flex-shrink-0'>
            <img src='/logo_1.png' className={'w-auto object-contain hover:scale-105 transition-all duration-500 ease-in-out ' + (isScrolled ? 'h-[44px] md:h-[52px]' : 'h-[86px] md:h-[108px]')} alt='Venetus Interior logo' />
            <img src='/logo_1.png' className={'w-auto object-contain hover:scale-105 transition-all duration-500 ease-in-out ' + (isScrolled ? 'h-[56px] md:h-[64px]' : 'h-[86px] md:h-[108px]')} alt='Venetus Interior logo' />
          </NavLink>

          {/* Desktop Nav Links - left of logo */}
          <div className='hidden md:flex items-center gap-7 lg:gap-10 ml-5 lg:ml-8'>
            {['About', 'Services', 'Portfolio', 'Process'].map(page => (
              <NavLink key={page} to={'/' + page} className={navLinkClasses}>
                {page}
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#B74B21] rounded-full transition-all duration-300 group-hover:w-full' />
                <span className='absolute bottom-[-3px] left-0 w-0 h-[2px] bg-[#B74B21] rounded-full transition-all duration-300 group-hover:w-full' />
              </NavLink>
            ))}
          </div>

          {/* Spacer */}
          <div className='flex-1' />

          {/* Desktop CTA */}
          <div className='hidden md:flex items-center'>
            {isContactPage ? (
              <span className='text-[#B74B21] font-semibold text-[15px] border border-[#B74B21] px-4 py-2 rounded-lg'>Contact Us</span>
            ) : (
              <NavLink to='/Contact' className='inline-flex items-center bg-[#B74B21] hover:bg-[#9c3e1b] text-white font-semibold text-[15px] py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95'>
                Get Started
              </NavLink>
            )}
          </div>

          {/* Mobile WhatsApp */}
          <a href='https://wa.me/917830015110' target='_blank' rel='noopener noreferrer' className='flex md:hidden items-center justify-center p-2 rounded-full hover:bg-green-100 transition-colors ml-auto' aria-label='Chat on WhatsApp'>
            <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' className='text-[#25D366] fill-current'><path d={WA_PATH} /></svg>
          </a>

        </div>
      </nav>

      {/* Spacer — same height as navbar, synced transition, eliminates white gap */}
      <div className={'bg-[#F8F6F4] transition-all duration-500 ease-in-out shrink-0 ' + (isScrolled ? 'h-[60px] md:h-[70px]' : 'h-[100px] md:h-[120px]')} />

      {/* Sidebar Overlay */}
      <div className={'fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300 ' + (isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={toggleSidebar} />

      {/* Mobile Sidebar */}
      <div className={'fixed top-0 left-0 h-full w-72 bg-[#F8F6F4] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ' + (isSidebarOpen ? 'translate-x-0' : '-translate-x-full')}>
        <div className='flex justify-between items-center px-5 py-4 border-b border-[#EDE0D8]'>
          <NavLink to='/' className='flex items-center'>
            <img src='/logo_1.png' className='h-14 w-auto object-contain' alt='Venetus Interior logo' />
          </NavLink>
          <button onClick={toggleSidebar} className='p-2 bg-white rounded-full text-gray-700 hover:text-[#B74B21] hover:bg-[#F3E5DE] transition-colors shadow-sm'><X size={20} /></button>
        </div>
        <div className='flex flex-col p-6 gap-5 overflow-y-auto mt-2'>
          <NavLink to='/About' className={sidebarLinkClasses}><Info size={20} className='text-[#B74B21]' />About</NavLink>
          <NavLink to='/Services' className={sidebarLinkClasses}><Briefcase size={20} className='text-[#B74B21]' />Services</NavLink>
          <NavLink to='/Portfolio' className={sidebarLinkClasses}><LayoutGrid size={20} className='text-[#B74B21]' />Portfolio</NavLink>
          <NavLink to='/Process' className={sidebarLinkClasses}><Route size={20} className='text-[#B74B21]' />Process</NavLink>
          <div className='mt-4 pt-5 border-t border-[#EDE0D8] flex flex-col gap-3'>
            <NavLink to='/Contact' className='block w-full text-center bg-[#B74B21] py-3 px-6 rounded-xl text-white font-bold hover:bg-[#9c3e1b] transition-all duration-300 shadow-md active:scale-95'>Get Started</NavLink>
            <a href='https://wa.me/917830015110' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] py-2.5 px-6 rounded-xl font-semibold hover:bg-green-50 transition-all'>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' className='fill-current'><path d={WA_PATH} /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
