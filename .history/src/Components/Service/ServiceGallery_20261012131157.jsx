import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Luxury Living Room',
    subtitle: 'Bespoke Furnishings & Lighting',
    image: '/premium.jpg',
  },
  {
    id: 2,
    title: 'Modern Modular Kitchen',
    subtitle: 'German Hardware & Quartz Finish',
    image: '/kitchen1.jpeg',
  },
  {
    id: 3,
    title: 'Master Bedroom Suite',
    subtitle: 'Warm Textures & Fluted Paneling',
    image: '/bedroom.jpeg',
  },
  {
    id: 4,
    title: 'Creative Study & Bedroom',
    subtitle: 'Space-Saving Custom Woodwork',
    image: '/bedroom3.jpeg',
  },
  {
    id: 5,
    title: 'Turnkey Architectural Interior',
    subtitle: 'Seamless Form & Function',
    image: '/design.jpg',
  },
  {
    id: 6,
    title: 'Contemporary Bedroom Suite',
    subtitle: 'Ambient Lighting & Storage',
    image: '/bedroom4.jpeg',
  },
]

const ServiceGallery = () => {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth > 768 ? 380 : 300
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden select-none"
    >
      {/* ── Background Image with Cinematic Dark Layers ── */}
      <img
        src="/premium.jpg"
        alt="Venetus Interior Atmosphere"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 pointer-events-none opacity-25 filter blur-[2px]"
        loading="lazy"
      />
      {/* Dark vignette & side-gradients */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />

      {/* Subtle gold top and bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

      {/* ── Architectural SVG watermark ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <svg
          className="w-full max-w-[1400px] h-auto"
          viewBox="0 0 1339 604"
          fill="none"
          stroke="#D4A53A"
          strokeWidth="1.2"
        >
          <path d="M50 550 L450 80 L850 80 L1250 550 Z" />
          <path d="M450 80 L450 550" />
          <path d="M850 80 L850 550" />
          <rect x="500" y="130" width="300" height="150" />
          <rect x="500" y="340" width="300" height="150" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-10 lg:pl-12 lg:pr-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12 xl:gap-16 w-full">

          {/* ════ LEFT COLUMN: Title, Para & Slider Controls ════ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-[380px] xl:w-[420px] shrink-0 flex flex-col justify-between"
          >
            <div>
              {/* Main Heading — "Interior Design" with 2 clean lines */}
              <h2 className="font-sans text-[clamp(42px,6vw,72px)] xl:text-[76px] font-bold text-white tracking-tight leading-[1.04] mb-5 sm:mb-6">
                <span className="block">Interior</span>
                <span className="block text-white">Design</span>
              </h2>

              {/* Subtitle / Paragraph */}
              <p className="font-sans text-white/75 text-sm sm:text-base md:text-[17px] leading-[1.7] max-w-[420px] mb-8 sm:mb-10">
                Transform your living space with timeless design and refined elegance.{' '}
                <span className="text-primary font-semibold">Venetus Interior</span>{' '}
                delivers modern interiors with flawless craftsmanship.
              </p>
            </div>

            {/* Slider Navigation Arrows (Left / Right circular buttons) */}
            <div className="flex items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Previous Project"
                className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.05] hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-sm group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Next Project"
                className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.05] hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-sm group"
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>

          {/* ════ RIGHT COLUMN: Smooth Horizontal Carousel Cards ════ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:flex-1 min-w-0"
          >
            <div
              ref={sliderRef}
              className="flex items-center gap-5 sm:gap-6 md:gap-7 overflow-x-auto scroll-smooth pb-4 pt-2 no-scrollbar pr-5 sm:pr-8 lg:pr-12"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[360px] h-[390px] sm:h-[450px] md:h-[490px] lg:h-[510px] shrink-0 rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-2xl border border-white/12 bg-neutral-900 relative group transition-all duration-500"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle luxury vignette on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Bottom title details */}
                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <p className="font-sans text-white font-bold text-lg sm:text-xl tracking-tight leading-tight mb-1">
                      {item.title}
                    </p>
                    <p className="font-sans text-primary text-xs sm:text-sm font-medium tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ServiceGallery

