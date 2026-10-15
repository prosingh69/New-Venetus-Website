import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Data for the 6 alternating sections (3 Text Sections + 3 Video Sections)
export const showcaseSectionsData = [
  {
    type: 'text',
    id: 'text-1',
    line1: 'POOJA ROOMS FOR A',
    line2: 'CONTEMPORARY HOME',
    subtitle: 'Modern or classic, design a pooja room that inspires peace and reflects your personal style.',
  },
  {
    type: 'video',
    id: 'video-1',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791974603/hailuo-03_A_continuous_seamless_cinematic_camera_pan_inside_the_same_luxury_room_rotating_-0_dgucx5.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791974682/frame_001_vapac0.jpg',
  },
  {
    type: 'text',
    id: 'text-2',
    line1: 'LIVING SPACES TAILORED FOR',
    line2: 'EFFORTLESS LUXURY',
    subtitle: 'Thoughtfully balanced textures, bespoke lighting, and custom layouts designed around how you unwind.',
  },
  {
    type: 'video',
    id: 'video-2',
    videoUrl: '/herosection1.mp4',
    posterUrl: '/premium.jpg',
  },
  {
    type: 'text',
    id: 'text-3',
    line1: 'MODULAR KITCHENS ENGINEERED FOR',
    line2: 'TIMELESS PERFECTION',
    subtitle: 'Sleek ergonomics, high-precision hardware, and seamless architectural flow crafted for Bangalore homes.',
  },
  {
    type: 'video',
    id: 'video-3',
    videoUrl: '/herosection2.mp4',
    posterUrl: '/bedroom3.jpeg',
  },
]

/* ─── Full-Screen Black Texture Text Section ─── */
const TextSection = ({ line1, line2, subtitle }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Texture Image from public folder */}
      <img
        src="/blacktexture.jpg"
        alt="Venetus Interior Luxury Black Texture"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transform-gpu scale-105"
        loading="eager"
      />

      {/* Cinematic Dark Overlays for depth and luxury ambiance */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center">
        {/* Main Title — Exactly as in reference image */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-medium text-white tracking-[0.16em] sm:tracking-[0.22em] uppercase leading-[1.28] sm:leading-[1.3] text-center max-w-3xl drop-shadow-md"
        >
          <span className="block">{line1}</span>
          <span className="block mt-1 sm:mt-2">{line2}</span>
        </motion.h2>

        {/* Small White Center Divider Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="w-12 sm:w-16 h-[1.5px] bg-white/80 my-4 sm:my-6 md:my-7 origin-center"
        />

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.55 }}
          className="font-sans text-white/85 text-sm sm:text-base md:text-lg lg:text-[19px] font-light tracking-wide max-w-2xl leading-relaxed sm:leading-loose px-2 drop-shadow-sm"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}

/* ─── Full-Screen Seamless Looping Video Section with Autoplay ─── */
const VideoSection = ({ videoUrl, posterUrl }) => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const videoEl = videoRef.current
    const containerEl = containerRef.current
    if (!videoEl || !containerEl) return

    videoEl.loop = true

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoEl.play()
            if (playPromise !== undefined) {
              playPromise.catch(() => {})
            }
          } else {
            videoEl.pause()
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '100px 0px 100px 0px',
      }
    )

    observer.observe(containerEl)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        poster={posterUrl}
        onPlaying={() => setIsPlaying(true)}
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-105 pointer-events-none"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* High-res poster image overlay fading out smoothly on play */}
      <img
        src={posterUrl}
        alt="Venetus Interior Showcase"
        loading="eager"
        fetchPriority="high"
        className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-105 pointer-events-none transition-opacity duration-700 ease-out ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Cinematic dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
    </section>
  )
}

/* ─── Combined 6 Alternating Sections Component ─── */
const PortfolioShowcaseSequence = () => {
  return (
    <div className="w-full flex flex-col">
      {showcaseSectionsData.map((item) => {
        if (item.type === 'text') {
          return (
            <TextSection
              key={item.id}
              line1={item.line1}
              line2={item.line2}
              subtitle={item.subtitle}
            />
          )
        }
        return (
          <VideoSection
            key={item.id}
            videoUrl={item.videoUrl}
            posterUrl={item.posterUrl}
          />
        )
      })}
    </div>
  )
}

export default PortfolioShowcaseSequence

