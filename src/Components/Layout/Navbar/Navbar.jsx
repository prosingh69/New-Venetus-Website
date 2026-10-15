import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Sparkles } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useConsultationModal } from '../../../context/ConsultationModalContext';

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z';

// All 8 website pages with lining numbers and descriptions
const navItems = [
  { label: 'Home',         to: '/',            count: '01', desc: 'Luxury Living Reimagined' },
  { label: 'About',        to: '/About',       count: '02', desc: 'Craftsmanship & Philosophy' },
  { label: 'Services',     to: '/Services',    count: '03', desc: 'Turnkey Residential Design' },
  { label: 'Portfolio',    to: '/Portfolio',   count: '04', desc: 'Featured Bangalore Homes' },
  { label: 'Process',      to: '/Process',     count: '05', desc: '4-Step Seamless Execution' },
  { label: 'Videos',       to: '/Videos',      count: '06', desc: 'Real Video Walkthroughs' },
  { label: 'Testimonials', to: '/Testimonial', count: '07', desc: 'Stories from Homeowners' },
  { label: 'Contact',      to: '/Contact',     count: '08', desc: 'Start Your Transformation' },
];

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
  const isPortfolioPage = location.pathname === '/portfolio' || location.pathname === '/Portfolio';
  const isVideosPage = location.pathname.toLowerCase().includes('video');
  const isContactPage = location.pathname === '/contact' || location.pathname === '/Contact';
  const isTestimonialPage =
    location.pathname.toLowerCase().includes('testimonial') ||
    location.pathname.toLowerCase().includes('testinomial');

  const isHeroTransparent =
    isHomePage ||
    isLocationPage ||
    isAboutPage ||
    isServicesPage ||
    isPortfolioPage ||
    isVideosPage ||
    isContactPage ||
    isTestimonialPage;

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
        setIsMenuOpen(false);
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  // Clean body scroll lock without DOM filter blur (prevents white flashes/layout repaints)
  useEffect(() => {
    if (isMenuOpen || isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isSidebarOpen]);

  // Mobile drawer handlers
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Tablet & Desktop McButton menu handlers
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Scrolled navbar is solid black, so text is always light on black background
  const isLightText = isHeroTransparent || isScrolled;

  const navBgClass = isScrolled
    ? 'bg-black shadow-lg border-b border-white/10'
    : isHeroTransparent
    ? 'bg-transparent border-b-0 shadow-none'
    : 'bg-black border-b border-white/10';

  return (
    <>
      {/* ======================================================== */}
      {/* MAIN TOP NAVBAR BAR                                      */}
      {/* ======================================================== */}
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out border-b-0 ${
          isMenuOpen ? 'bg-[#0A0A0B] border-b border-white/[0.08]' : navBgClass
        }`}
      >
        <div
          className={
            'max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex items-center justify-between transition-all duration-300 ease-in-out ' +
            (isScrolled ? 'h-[60px] md:h-[70px]' : 'h-[100px] md:h-[120px]')
          }
        >
          {/* MOBILE ONLY: Hamburger button on the left (scales slightly down when scrolled) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleSidebar}
              className={`relative flex justify-center items-center rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none cursor-pointer ${
                isScrolled ? 'w-9 h-9 scale-90' : 'w-10 h-10 scale-100'
              }`}
              aria-label="Toggle Menu"
            >
              <div
                className={`relative transition-all duration-300 ${
                  isScrolled ? 'w-4 h-3.5 scale-90' : 'w-5 h-4 scale-100'
                }`}
              >
                <span
                  className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                    isLightText ? 'bg-white' : 'bg-primary'
                  } ${isSidebarOpen ? 'rotate-45 top-2' : 'top-0'}`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                    isLightText ? 'bg-white' : 'bg-primary'
                  } ${isSidebarOpen ? 'opacity-0 top-2' : 'top-2'}`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                    isLightText ? 'bg-white' : 'bg-primary'
                  } ${isSidebarOpen ? '-rotate-45 top-2' : 'top-4'}`}
                />
              </div>
            </button>
          </div>

          {/* LOGO: Right-aligned on mobile (< md), Left-aligned on tablet & desktop (md:) */}
          {/* Scales down slightly when page is scrolled, full big size when scroll is 0 */}
          <NavLink
            to="/"
            onClick={() => {
              closeSidebar();
              closeMenu();
            }}
            className="flex items-center flex-shrink-0 ml-auto md:ml-0"
          >
            <img
              src="https://res.cloudinary.com/lbei6xmb/image/upload/v1792067711/Venetus_Interior_gold-and-white_logo_gqrlmw.png"
              className={
                'w-auto object-contain hover:scale-105 transition-all duration-300 ease-in-out ' +
                (isScrolled ? 'h-[60px] md:h-[70px] scale-95' : 'h-[80px] md:h-[104px] scale-100')
              }
              alt="Venetus Interior logo"
            />
          </NavLink>

          {/* TABLET & DESKTOP ONLY: McButton Hamburger Toggle on the right (scales slightly down when scrolled) */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className={`McButton transition-all duration-300 ${
                isScrolled ? 'scale-85 origin-center' : 'scale-100'
              } ${
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

      {/* Spacer — ONLY rendered on pages WITHOUT transparent hero (Clean dark background, zero white flash) */}
      {!isHeroTransparent && (
        <div
          className={
            'bg-black transition-all duration-300 ease-in-out shrink-0 ' +
            (isScrolled ? 'h-[60px] md:h-[70px]' : 'h-[100px] md:h-[120px]')
          }
        />
      )}

      {/* ======================================================== */}
      {/* 1. MOBILE DRAWER SIDEBAR & OVERLAY (Restored for Mobile) */}
      {/* ======================================================== */}
      <div
        className={`fixed inset-0 bg-black/80 z-[110] md:hidden backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-[#0E0E11] text-white shadow-2xl z-[120] transform transition-transform duration-300 ease-out md:hidden flex flex-col border-r border-white/10 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
          <NavLink to="/" onClick={closeSidebar} className="flex items-center">
            <img src="https://res.cloudinary.com/lbei6xmb/image/upload/v1792067711/Venetus_Interior_gold-and-white_logo_gqrlmw.png" className="h-9 w-auto object-contain brightness-105" alt="Venetus Interior logo" />
          </NavLink>
          <button
            type="button"
            onClick={closeSidebar}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Mobile Navigation Links (With signature Venetus typography & lining numbers) */}
        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col justify-between custom-modal-scrollbar">
          <nav className="space-y-1" aria-label="Mobile Menu Links">
            {navItems.map(({ label, to, count }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-[#E9C27A] bg-white/[0.04] font-medium'
                      : 'text-white/80 hover:text-white hover:bg-white/[0.02]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`font-heading text-lg sm:text-xl tracking-wide ${isActive ? 'italic text-[#E9C27A]' : ''}`}>
                      {label}
                    </span>
                    <span className="font-body font-sans lining-nums text-[11px] font-semibold text-[#E9C27A]/60 tracking-wider">
                      {count}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Bottom Action Area */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5 mt-2">
            <button
              type="button"
              onClick={() => {
                closeSidebar();
                openModal({
                  title: 'Book Free Consultation',
                  subtitle: 'Connect with our senior interior architects for transparent pricing and custom 3D layouts.'
                });
              }}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-neutral-950 py-2.5 px-5 rounded-full font-body font-semibold text-xs sm:text-sm shadow-md shadow-primary/20 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles size={14} className="text-neutral-950" />
              <span>Book Free Consultation</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919916565945"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#151518] hover:bg-[#1b1b1f] border border-white/[0.08] hover:border-[#E9C27A]/30 text-white font-body text-xs font-medium transition-all active:scale-95"
              >
                <Phone size={12} className="text-primary shrink-0" />
                <span className="font-sans lining-nums">Call Studio</span>
              </a>

              <a
                href="https://wa.me/919916565945?text=Hi%20Venetus%20Interior%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#151518] hover:bg-[#1b1b1f] border border-white/[0.08] hover:border-[#E9C27A]/30 text-white font-body text-xs font-medium transition-all active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="fill-whatsapp shrink-0">
                  <path d={WA_PATH} />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. TABLET & DESKTOP SLIDE-DOWN OVERLAY MENU (Silky Smooth, Zero White Flash) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex fixed inset-0 top-0 left-0 w-screen h-screen min-h-[100dvh] bg-[#0A0A0B] z-[90] overflow-y-auto flex-col justify-between custom-modal-scrollbar pt-[100px] md:pt-[120px] pb-8 select-none"
            aria-label="Navigation Overlay"
          >
            {/* Ambient luxury lighting */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.07] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E9C27A]/[0.05] via-transparent to-transparent pointer-events-none" />

            {/* Main Content Container */}
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 my-auto relative z-10 py-3 sm:py-5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center">

                {/* LEFT: All 8 Navlinks in luxury editorial typography */}
                <div className="md:col-span-7 xl:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-body text-label-caps text-[#F2C572] font-semibold tracking-[0.22em] uppercase text-[10px] sm:text-xs">
                      Venetus Architecture & Living
                    </span>
                  </div>

                  <nav className="flex flex-col space-y-1 sm:space-y-1.5 md:space-y-2" aria-label="Main Menu Links">
                    {navItems.map(({ label, to, count, desc }, idx) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 + idx * 0.03, ease: 'easeOut' }}
                      >
                        <NavLink
                          to={to}
                          end={to === '/'}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `group flex items-center justify-between py-1.5 sm:py-2 px-3 rounded-xl transition-all duration-300 ${
                              isActive
                                ? 'bg-white/[0.04] text-[#E9C27A]'
                                : 'text-white/80 hover:text-white hover:bg-white/[0.02]'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
                              <span
                                className={`font-body font-sans lining-nums text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] transition-colors w-7 sm:w-8 ${
                                  isActive ? 'text-[#E9C27A]' : 'text-white/35 group-hover:text-[#E9C27A]/80'
                                }`}
                              >
                                {count}
                              </span>
                              <span
                                className={`font-heading text-xl sm:text-2xl md:text-3xl lg:text-[36px] tracking-wide transition-all duration-300 group-hover:translate-x-2 ${
                                  isActive
                                    ? 'text-[#E9C27A] italic font-medium drop-shadow-[0_2px_12px_rgba(233,194,122,0.3)]'
                                    : 'font-normal'
                                }`}
                              >
                                {label}
                              </span>
                              <span className="hidden lg:inline-block font-body text-xs text-white/40 group-hover:text-white/70 tracking-normal transition-colors ml-2">
                                — {desc}
                              </span>
                            </div>
                          )}
                        </NavLink>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* RIGHT: Studio Showcase Card & Direct Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="hidden md:flex md:col-span-5 xl:col-span-5 flex-col bg-[#141417] border border-white/[0.08] hover:border-[#E9C27A]/30 rounded-[22px] p-6 lg:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  <div className="relative w-full h-36 lg:h-40 rounded-xl overflow-hidden mb-4">
                    <img
                      src="/residential-thumb-4.jpg"
                      alt="Venetus Interior Luxury Architecture"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs font-body">
                      <span className="bg-primary text-neutral-950 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
                        Venetus Living
                      </span>
                      <span className="text-white/90 drop-shadow text-[11px]">Bangalore Flagship</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-heading text-xl lg:text-2xl font-medium text-white tracking-tight mb-1.5">
                      Turnkey Luxury Interiors
                    </h4>
                    <p className="font-body text-xs lg:text-[13px] text-[#CCCCCC] leading-relaxed">
                      Bespoke modular kitchens, handcrafted woodwork, and complete home transformations backed by a guaranteed 10-year warranty.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-3.5 border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => {
                        closeMenu();
                        openModal({
                          title: 'Book a Free Design Consultation',
                          subtitle: 'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.'
                        });
                      }}
                      className="w-full font-body group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-neutral-950 py-2.5 sm:py-3 px-5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
                    >
                      <Sparkles size={14} className="text-neutral-950" />
                      <span>Book Free Consultation</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:+919916565945"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#1b1b1f] hover:bg-[#232328] border border-white/[0.08] hover:border-[#E9C27A]/30 text-white font-body text-xs font-medium transition-all active:scale-95"
                      >
                        <Phone size={12} className="text-primary shrink-0" />
                        <span className="font-sans lining-nums">+91 99165 65945</span>
                      </a>

                      <a
                        href="https://wa.me/919916565945?text=Hi%20Venetus%20Interior%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#1b1b1f] hover:bg-[#232328] border border-white/[0.08] hover:border-[#E9C27A]/30 text-white font-body text-xs font-medium transition-all active:scale-95"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="fill-whatsapp shrink-0">
                          <path d={WA_PATH} />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Desktop / Tablet Bottom Information Strip */}
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 pt-4 border-t border-white/[0.08] items-center justify-between relative z-10 text-xs text-[#888888] font-body flex">
              <div className="flex items-center gap-6">
                <span className="text-white/80">Flagship Studio: Bangalore, Karnataka</span>
                <span className="text-white/25">|</span>
                <span className="text-white/60">Turnkey Luxury Interiors · 10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="tel:+919916565945" className="hover:text-[#E9C27A] transition-colors font-sans lining-nums">
                  +91 99165 65945
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
