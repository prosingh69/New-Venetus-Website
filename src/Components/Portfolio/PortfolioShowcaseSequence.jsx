import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Data for the 6 alternating sections (3 Text Sections + 3 Video Sections)
export const showcaseSectionsData = [
  {
    type: 'text',
    id: 'text-1',
    line1: 'Art of Luxury Living',
    line2: 'Bespoke Contemporary Spaces',
    subtitle: 'Seamless open-plan transitions, bespoke architectural paneling, and warm ambient illumination designed for modern Bangalore living.',
  },
  {
    type: 'video',
    id: 'video-1',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791976507/hailuo-03_A_slow_ultra-smooth_cinematic_dolly_push-in_shot_of_this_luxurious_modern_living-0_bgr615.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791977248/frame_001_1_jpwl1m.jpg',
  },
  {
    type: 'text',
    id: 'text-2',
    line1: 'Imaginative Kids Bedrooms',
    line2: 'Designed to Inspire & Grow',
    subtitle: 'Playful bespoke aesthetics, ergonomic study suites, and versatile modular storage engineered for curious minds.',
  },
  {
    type: 'video',
    id: 'video-2',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791974603/hailuo-03_A_continuous_seamless_cinematic_camera_pan_inside_the_same_luxury_room_rotating_-0_dgucx5.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791974682/frame_001_vapac0.jpg',
  },
  {
    type: 'text',
    id: 'text-3',
    line1: 'Master Bedroom Sanctuary',
    line2: 'The Essence of Restful Luxury',
    subtitle: 'Integrated floor-to-ceiling sliding wardrobes, custom upholstered headboards, and soothing ambient lighting.',
  },
  {
    type: 'video',
    id: 'video-3',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791978576/hailuo-03_Slow_cinematic_camera_slider_shot_moving_smoothly_from_left_to_right_across_this-0_zqckhz.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791978594/frame_001_2_nmpzvt.jpg',
  },
  {
    type: 'text',
    id: 'text-4',
    line1: 'Gourmet Modular Kitchens',
    line2: 'Precision German Engineering',
    subtitle: 'Sleek ergonomics, high-precision German hardware, and seamless architectural flow crafted for culinary luxury.',
  },
  {
    type: 'video',
    id: 'video-4',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791979872/hailuo-03_A_slow_continuous_cinematic_camera_motion_in_a_modern_U-shaped_kitchen_utilizing-0_twpmdw.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791979869/frame_001_3_cddhlb.jpg',
  },
  {
    type: 'text',
    id: 'text-5',
    line1: 'Classic Parisian Suites',
    line2: 'Timeless Architectural Charm',
    subtitle: 'Bespoke wall molding, warm brass sconces, and plush headboard craftsmanship designed for peaceful rest.',
  },
  {
    type: 'video',
    id: 'video-5',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791992046/lv_0_20261014203440_suyppo.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto,so_0/v1791992046/lv_0_20261014203440_suyppo.jpg',
  },
  {
    type: 'text',
    id: 'text-6',
    line1: 'Sacred Pooja Sanctums',
    line2: 'Crafted for Spiritual Harmony',
    subtitle: 'Sacred wooden accents, serene ambient lighting, and bespoke sanctum craftsmanship for spiritual harmony.',
  },
  {
    type: 'video',
    id: 'video-6',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791992045/lv_0_20261014204516_yyrosz.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto,so_0/v1791992045/lv_0_20261014204516_yyrosz.jpg',
  },
  {
    type: 'text',
    id: 'text-7',
    line1: 'Modern Media Lounges',
    line2: 'Acoustic Curves & Floating Consoles',
    subtitle: 'Curved geometric wall paneling, acoustic fluting, and floating vanities crafted for sleek modern elegance.',
  },
  {
    type: 'video',
    id: 'video-7',
    videoUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791992044/lv_0_20261014204738_ysezaz.mp4',
    posterUrl: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto,so_0/v1791992044/lv_0_20261014204738_ysezaz.jpg',
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
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center">
        {/* Main Title — Strictly 2 lines across all device screen sizes */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="font-heading text-[clamp(24px,5.8vw,52px)] font-medium text-white tracking-[-0.01em] leading-[1.18] sm:leading-[1.22] text-center w-full max-w-4xl drop-shadow-md flex flex-col items-center justify-center"
        >
          <span className="block whitespace-nowrap">{line1}</span>
          <span className="block mt-1 sm:mt-2 text-[#E9C27A] italic whitespace-nowrap">{line2}</span>
        </motion.h2>

        {/* Subtitle Paragraph — generous breathing room without line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.45 }}
          className="font-body text-[#D4D4D8] text-sm sm:text-base md:text-[17px] max-w-2xl leading-[1.75] mt-5 sm:mt-7 px-2 drop-shadow-sm text-pretty"
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

