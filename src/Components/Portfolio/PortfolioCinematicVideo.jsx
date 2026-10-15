import React, { useRef, useEffect, useState } from 'react'

const POSTER_URL = 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791977248/frame_001_1_jpwl1m.jpg'
const VIDEO_URL = 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791976507/hailuo-03_A_slow_ultra-smooth_cinematic_dolly_push-in_shot_of_this_luxurious_modern_living-0_bgr615.mp4'

const PortfolioCinematicVideo = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const videoEl = videoRef.current
    const containerEl = containerRef.current
    if (!videoEl || !containerEl) return

    // Ensure loop property is explicitly set on DOM element for strict browser support
    videoEl.loop = true

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

  const handleVideoEnded = () => {
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
      {/* High-Performance Seamless Looping Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        poster={POSTER_URL}
        onPlaying={() => setIsVideoPlaying(true)}
        onEnded={handleVideoEnded}
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
