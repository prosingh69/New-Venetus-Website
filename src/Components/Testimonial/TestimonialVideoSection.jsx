import React, { useState } from 'react'
import { motion } from 'framer-motion'

const TestimonialVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = 'PIQm4m7j16Q'
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <section className="relative w-full aspect-video md:aspect-auto md:h-screen md:min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black select-none border-t border-b border-white/[0.08]">
      {/* ── Background when NOT playing: High-Res Thumbnail with cinematic dark overlays ── */}
      {!isPlaying ? (
        <div
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center"
        >
          {/* YouTube Thumbnail Background */}
          <img
            src={thumbnailUrl}
            alt="Venetus Interior Client Video Review"
            loading="eager"
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault isn't returned
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            }}
            className="absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-100 md:scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Dark Overlays */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none" />

          {/* Subtle Ambient Golden Glow */}
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/[0.05] blur-[140px] rounded-full pointer-events-none" />

          {/* Center Content: YouTube Logo / Play Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            {/* Iconic YouTube Logo / Play Icon with Pulsing Rings */}
            <div className="relative flex items-center justify-center mb-2 sm:mb-4 md:mb-5">
              {/* Ripple Ring 1 */}
              <div className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#FF0000]/20 animate-ping pointer-events-none" />

              {/* Ripple Ring 2 */}
              <div className="absolute w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#FF0000]/30 transition-transform duration-300 group-hover:scale-115" />

              {/* YouTube Play Icon Card */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-13 h-9 sm:w-18 sm:h-13 md:w-22 md:h-16 bg-[#FF0000] rounded-[10px] sm:rounded-[16px] md:rounded-[20px] shadow-[0_10px_30px_rgba(255,0,0,0.45)] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(255,0,0,0.65)]"
              >
                {/* White Play Triangle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Label */}
            <span className="font-heading text-base sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-tight drop-shadow-lg mb-1 sm:mb-2">
              Watch Real Client Walkthrough
            </span>
            <span className="font-body text-[#E9C27A] text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.18em] sm:tracking-[0.22em] font-semibold drop-shadow-md">
              Click to Play Inside Website
            </span>
          </div>
        </div>
      ) : (
        /* ── Full Interactive YouTube Player Embedded In Website ── */
        <div className="relative w-full h-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Venetus Interior Client Review & Home Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0 object-cover"
          />
        </div>
      )}
    </section>
  )
}

export default TestimonialVideoSection

