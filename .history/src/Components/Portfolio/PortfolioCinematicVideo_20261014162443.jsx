import React, { useRef, useEffect, useState } from 'react'

const POSTER_URL = 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791974682/frame_001_vapac0.jpg'
const VIDEO_URL = 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791974603/hailuo-03_A_continuous_seamless_cinematic_camera_pan_inside_the_same_luxury_room_rotating_-0_dgucx5.mp4'

const PortfolioCinematicVideo = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const videoEl = videoRef.current
    const containerEl = containerRef.current
    if (!videoEl || !containerEl) return

    // Autoplay when user reaches this section in window view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoEl.play()
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Autoplay policy handled silently
              })
            }
          } else {
            // Pause when user scrolls out of view to save system performance & bandwidth
            videoEl.pause()
          }
        })
      },
      {
        threshold: 0.2, // Play as soon as 20% of section enters viewport
        rootMargin: '100px 0px 100px 0px', // Pre-trigger slightly before full view for zero perceived delay
      }
    )

    observer.observe(containerEl)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* High-Performance Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER_URL}
        onPlaying={() => setIsVideoPlaying(true)}
        className="absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-105 pointer-events-none"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Instant high-res poster image overlay — fades out smoothly once playback starts */}
      <img
        src={POSTER_URL}
        alt="Venetus Interior Luxury Room Pan"
        loading="eager"
        fetchPriority="high"
        className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-105 pointer-events-none transition-opacity duration-700 ease-out ${
          isVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Subtle Cinematic Overlays for Seamless Dark Mode Blending */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
    </section>
  )
}

export default PortfolioCinematicVideo

