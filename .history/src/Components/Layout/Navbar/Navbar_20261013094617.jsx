import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Briefcase, LayoutGrid, Home, Play, Phone, Sparkles } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useConsultationModal } from '../../../context/ConsultationModalContext';

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useConsultationModal();
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '';
  const isLocationPage = location.pathname.toLowerCase().includes('interior-designers');
  const isAboutPage = location.pathname === '/about' || location.pathname === '/About';
  const isServicesPage = location.pathname === '/services' || location.pathname === '/Services';
  const isHeroTransparent = isHomePage || isLocationPage || isAboutPage || isServicesPage;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isMenuOpen) setIsMenuOpen(false);
        if (isSidebarOpen) setIsSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, isSidebarOpen]);

  // Screen resize handler to prevent state leaks between mobile & desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
      if (window.innerWidth < 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen, isMenuOpen]);

  // Handle background blur and body scroll lock
  useEffect(() => {
    const mainEl = document.querySelector('main');
    const footerEl = document.querySelector('footer');

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (mainEl) {
        mainEl.style.transition = 'filter 0.3s ease';
        mainEl.style.filter = 'blur(6px)';
      }
      if (footerEl) {
        footerEl.style.transition = 'filter 0.3s ease';
        footerEl.style.filter = 'blur(6px)';
      }
    } else if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      if (mainEl) mainEl.style.filter = 'none';
      if (footerEl) footerEl.style.filter = 'none';
    } else {
      document.body.style.overflow = 'unset';
      if (mainEl) mainEl.style.filter = 'none';
      if (footerEl) footerEl.style.filter = 'none';
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (mainEl) mainEl.style.filter = 'none';
      if (footerEl) footerEl.style.filter = 'none';
    };
  }, [isMenuOpen, isSidebarOpen]);

  // Mobile drawer handlers
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Tablet & Desktop McButton menu handlers
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Mobile drawer navigation items
  const mobileNavItems = [
    { label: 'Home',      to: '/',          icon: Home },
    { label: 'About',     to: '/About',     icon: Info },
    { label: 'Services',  to: '/Services',  icon: Briefcase },
    { label: 'Portfolio', to: '/Portfolio', icon: LayoutGrid },
    { label: 'Video',     to: '/Video',     icon: Play },
    { label: 'Contact',   to: '/Contact',   icon: Phone },
  ];

  // Desktop / Tablet overlay items
  const desktopNavItems = [
    { label: 'Home',      to: '/',          count: '01' },
    { label: 'About',     to: '/About',     count: '02' },
    { label: 'Services',  to: '/Services',  count: '03' },
    { label: 'Portfolio', to: '/Portfolio', count: '04' },
    { label: 'Video',     to: '/Video',     count: '05' },
    { label: 'Contact',   to: '/Contact',   count: '06' },
  ];

  // Scrolled navbar is solid black, so text is always light on black background
  const isLightText = isHeroTransparent || isScrolled;

  const navBgClass = isScrolled
    ? 'bg-black shadow-lg border-b border-white/10'
    : isHeroTransparent
    ? 'bg-transparent border-b-0 shadow-none'
    : 'bg-surface-soft border-b border-transparent';

  return (
    <>
      {/* MAIN TOP NAVBAR BAR */}
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b-0 ${
          isMenuOpen ? 'bg-transparent border-b-0 shadow-none' : navBgClass
        }`}
      >
        <div
          className={
            'max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex items-center justify-between transition-all duration-500 ease-in-out ' +
            (isScrolled ? 'h-[60px] md:h-[70px]' : 'h-[100px] md:h-[120px]')
          }
        >
          {/* MOBILE ONLY: Hamburger button on the left */}
          <div className="flex md:hidden flex-1">
            <button
              type="button"
              onClick={toggleSidebar}
              className="relative w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isLightText ? 'bg-white' : 'bg-primary'
                  } ${isSidebarOpen ? 'rotate-45 top-2' : 'top-0'}`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isLightText ? 'bg-white' : 'bg-primary'
                  } ${isSidebarOpen ? 'opacity-0 top-2' : 'top-2'}`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 rounded-full transition-all duration-300 ${
                    isLightText ? 'bg-white' : 'bg-primary'
                  } ${isSidebarOpen ? '-rotate-45 top-2' : 'top-4'}`}
                />
              </div>
            </button>
          </div>

          {/* LOGO: Centered on mobile (< md), Left-aligned on tablet & desktop (md:) */}
          <NavLink
            to="/"
            onClick={() => {
              closeSidebar();
              closeMenu();
            }}
            className="flex items-center flex-shrink-0"
          >
            <img
              src="/logo_1.png"
              className={
                'w-auto object-contain hover:scale-105 transition-all duration-500 ease-in-out ' +
                (isScrolled ? 'h-[56px] md:h-[64px]' : 'h-[80px] md:h-[104px]')
              }
              alt="Venetus Interior logo"
            />
          </NavLink>

          {/* MOBILE ONLY: WhatsApp Button on the right */}
          <a
            href="https://wa.me/919916565945"
            target="_blank"
            rel="noopener noreferrer"
            className={
              'flex md:hidden flex-1 justify-end items-center p-2 rounded-full hover:bg-white/10 transition-all duration-300 ' +
              (isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100')
            }
            aria-label="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="text-whatsapp fill-current"
            >
              <path d={WA_PATH} />
            </svg>
          </a>

          {/* TABLET & DESKTOP ONLY: McButton Hamburger Toggle on the right */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className={`McButton transition-colors ${
                isMenuOpen
                  ? 'active text-white hover:text-primary'
                  : isLightText
                  ? 'text-white hover:text-primary'
                  : 'text-neutral-900 hover:text-primary'
              }`}
              data="hamburger-menu"
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMenuOpen}
            >
              <b></b>
              <b></b>
              <b></b>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer — ONLY rendered on pages WITHOUT transparent hero */}
      {!isHeroTransparent && (
        <div
          className={
            'bg-surface-soft transition-all duration-500 ease-in-out shrink-0 ' +
            (isScrolled ? 'h-[60px] md:h-[70px]' : 'h-[100px] md:h-[120px]')
          }
        />
      )}

      {/* ======================================================== */}
      {/* 1. MOBILE DRAWER SIDEBAR & OVERLAY (Visible only on < md) */}
      {/* ======================================================== */}
      <div
        className={`fixed inset-0 bg-black/75 z-50 md:hidden backdrop-blur-md transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-neutral-950 text-white shadow-2xl z-[60] transform transition-transform duration-300 ease-out md:hidden flex flex-col border-r border-white/10 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center px-6 py-4.5 border-b border-white/10">
          <NavLink to="/" onClick={closeSidebar} className="flex items-center">
            <img src="/logo_1.png" className="h-11 w-auto object-contain brightness-105" alt="Venetus Interior logo" />
          </NavLink>
          <button
            type="button"
            onClick={closeSidebar}
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
          <nav className="space-y-1" aria-label="Mobile Menu Links">
            {mobileNavItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3.5 px-3 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={18} className={`shrink-0 transition-colors ${isActive ? 'text-primary' : 'text-white/40'}`} />
                    <span className="text-[16px] tracking-wide">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Bottom Action Area */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                closeSidebar();
                openModal({
                  title: 'Book Free Consultation',
                  subtitle: 'Connect with our senior interior architects for transparent pricing and custom 3D layouts.'
                });
              }}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 px-5 rounded-full font-semibold text-sm shadow-md shadow-primary/20 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles size={15} />
              <span>Book Free Consultation</span>
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+919916565945"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 text-xs font-semibold transition-all active:scale-95"
              >
                <Phone size={13} className="text-primary shrink-0" />
                <span>Call Studio</span>
              </a>

              <a
                href="https://wa.me/919916565945?text=Hi%20Venetus%20Interior%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 text-xs font-semibold transition-all active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" className="fill-whatsapp shrink-0">
                  <path d={WA_PATH} />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* =============================================================== */}
      {/* 2. TABLET & DESKTOP SLIDE-DOWN OVERLAY MENU (Visible only md:)   */}
      {/* =============================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-neutral-950/98 backdrop-blur-2xl z-40 overflow-y-auto flex-col justify-start custom-modal-scrollbar pt-[115px] sm:pt-[130px] md:pt-[150px] pb-10"
            aria-label="Navigation Overlay"
          >
            <div className="w-full max-w-xl mx-auto px-6 my-auto flex flex-col items-center justify-center">
              {/* Vertical Navigation Links Centered Below Logo & Close Button */}
              <nav className="w-full flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 text-center" aria-label="Vertical Links">
                {desktopNavItems.map(({ label, to, count }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12 + idx * 0.05, ease: 'easeOut' }}
                    className="w-full flex justify-center"
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `group relative inline-flex items-center justify-center py-1 sm:py-1.5 transition-all duration-300 ${
                          isActive ? 'text-primary' : 'text-white/85 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <div className="flex items-baseline justify-center gap-3 sm:gap-4 md:gap-5">
                          <span
                            className={`text-xs sm:text-sm font-mono tracking-widest transition-colors ${
                              isActive ? 'text-primary font-bold' : 'text-white/40 group-hover:text-primary'
                            }`}
                          >
                            {count}
                          </span>
                          <span
                            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light tracking-wider uppercase transition-all duration-300 group-hover:scale-105 group-hover:text-primary ${
                              isActive ? 'text-primary font-medium tracking-widest' : ''
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
