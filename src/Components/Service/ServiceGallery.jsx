import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Authentic Venetus Interior completed projects & portfolio images
const galleryItems = [
  {
    id: 1,
    title: 'Creative Kids Bedroom & Study',
    image: '/bedroom3.jpeg',
  },
  {
    id: 2,
    title: 'Luxury Dining & Crockery Lounge',
    image: '/kitchen1.jpeg',
  },
  {
    id: 3,
    title: 'Functional Study & Work Nook',
    image: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg',
  },
  {
    id: 4,
    title: 'Contemporary Master Suite',
    image: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786160796/WhatsApp_Image_2026-08-08_at_9.15.27_AM_1_fx3xel.jpg',
  },
  {
    id: 5,
    title: 'Whitefield Luxury Residence',
    image: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786157116/WhatsApp_Image_2026-08-07_at_6.44.25_PM_1_unfxvp.jpg',
  },
  {
    id: 6,
    title: 'Premium Lounge & Living Architecture',
    image: '/premium.jpg',
  },
  {
    id: 7,
    title: 'Bespoke Master Bedroom',
    image: '/bedroom4.jpeg',
  },
  {
    id: 8,
    title: 'Architectural Foyer & Living Room',
    image: '/design.jpg',
  },
  {
    id: 9,
    title: 'Modern Modular Kitchen',
    image: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg',
  },
  {
    id: 10,
    title: 'Luxury Bedroom Makeover',
    image: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg',
  },
]

// 5 duplicated sets for seamless continuous infinite looping in both directions
const EXTENDED_ITEMS = [
  ...galleryItems,
  ...galleryItems,
  ...galleryItems,
  ...galleryItems,
  ...galleryItems,
]

const GAP = 20 // 20px gap between cards
const TOTAL_ITEMS = galleryItems.length
const BASE_INDEX = TOTAL_ITEMS * 2 // Start at index 20 (middle set)

const ServiceGallery = () => {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const [currentIndex, setCurrentIndex] = useState(BASE_INDEX)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [visibleCount, setVisibleCount] = useState(3)
  const [containerWidth, setContainerWidth] = useState(0)

  const lastClickTime = useRef(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Measure viewport width dynamically
  useLayoutEffect(() => {
    if (viewportRef.current) {
      setContainerWidth(viewportRef.current.clientWidth)
    }
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }

      if (viewportRef.current) {
        setContainerWidth(viewportRef.current.clientWidth)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    let ro
    if (viewportRef.current && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.width > 0) {
            setContainerWidth(entry.contentRect.width)
          }
        }
      })
      ro.observe(viewportRef.current)
    }

    return () => {
      window.removeEventListener('resize', updateDimensions)
      if (ro) ro.disconnect()
    }
  }, [])

  // Silently re-enable CSS transitions on the next frame after instant normalization
  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [isTransitioning])

  // Slide forward infinitely
  const handleNext = () => {
    const now = Date.now()
    if (now - lastClickTime.current < 160) return
    lastClickTime.current = now

    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  // Slide backward infinitely
  const handlePrev = () => {
    const now = Date.now()
    if (now - lastClickTime.current < 160) return
    lastClickTime.current = now

    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  // Infinite loop normalization when transition finishes
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return

    setCurrentIndex((current) => {
      if (current >= TOTAL_ITEMS * 3) {
        setIsTransitioning(false)
        return current - TOTAL_ITEMS
      }
      if (current < TOTAL_ITEMS) {
        setIsTransitioning(false)
        return current + TOTAL_ITEMS
      }
      return current
    })
  }

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 45) {
      handleNext()
    } else if (diff < -45) {
      handlePrev()
    }
  }

  // Exact card width: (containerWidth - (visibleCount - 1) * GAP) / visibleCount
  const cardWidth = containerWidth > 0
    ? (containerWidth - (visibleCount - 1) * GAP) / visibleCount
    : 320

  // Exact pixel shift
  const shiftPx = currentIndex * (cardWidth + GAP)

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-24 sm:pb-32 md:pb-36 lg:pb-40 overflow-hidden select-none"
    >
      {/* ── Background Image with Balanced Atmosphere ── */}
      <img
        src="/service-gallery-bg.jpg"
        alt="Venetus Interior Atmosphere"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        loading="lazy"
      />

      {/* Balanced overlay so the background interior image is clearly visible while text stays sharp */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none" />

      {/* Subtle gold accent borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1460px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-10 xl:gap-14 w-full">

          {/* ════ LEFT COLUMN: Company Title & Description ════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-[350px] xl:w-[410px] shrink-0 flex flex-col justify-start pt-1 sm:pt-2"
          >
            <div className="w-full">
              <h2 className="font-heading text-[clamp(32px,5.5vw,46px)] lg:text-[48px] xl:text-[52px] font-medium tracking-tight leading-[1.1] mb-4 sm:mb-5 text-center lg:text-left -mt-4 sm:-mt-2 lg:mt-0">
                <span className="block text-white sm:whitespace-nowrap">Venetus Interior</span>
                <span className="block font-heading italic font-medium text-[#E9C27A] sm:whitespace-nowrap">Design Studio</span>
              </h2>

              <p className="font-body text-[#D4D4D8] text-sm sm:text-base leading-[1.7] text-justify [text-align-last:left] [text-justify:inter-word]">
                Crafting exceptional living and workspace environments tailored to your lifestyle.{' '}
                <span className="text-[#E9C27A] font-semibold">Venetus Interior</span>{' '}
                combines creative vision with flawless execution to turn your dream spaces into enduring luxury. From bespoke architectural layouts and premium finishes to smart lighting, every detail is meticulously orchestrated to reflect your distinct aesthetic.
              </p>
            </div>
          </motion.div>

          {/* ════ RIGHT COLUMN: Exactly 3 Full Cards + Infinite Loop Navigation ════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:flex-1 min-w-0"
          >
            {/* Sliding Track Viewport */}
            <div
              ref={viewportRef}
              className="w-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                onTransitionEnd={handleTransitionEnd}
                className="flex will-change-transform"
                style={{
                  gap: `${GAP}px`,
                  transform: `translate3d(-${shiftPx}px, 0, 0)`,
                  transition: isTransitioning
                    ? 'transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : 'none',
                }}
              >
                {EXTENDED_ITEMS.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    style={{
                      width: `${cardWidth}px`,
                      flexShrink: 0,
                    }}
                    className="h-[300px] sm:h-[340px] lg:h-[370px] rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-2xl border border-white/12 bg-neutral-900 relative group cursor-grab active:cursor-grabbing"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Subtle vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons placed BELOW the picture cards */}
            <div className="relative z-20 flex items-center gap-3 pt-6 sm:pt-8">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-12 h-12 rounded-full border border-white/25 bg-white/[0.08] hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer backdrop-blur-sm group shadow-md"
              >
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5 pointer-events-none" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-12 h-12 rounded-full border border-white/25 bg-white/[0.08] hover:bg-primary hover:border-primary text-white flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer backdrop-blur-sm group shadow-md"
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 pointer-events-none" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ServiceGallery
