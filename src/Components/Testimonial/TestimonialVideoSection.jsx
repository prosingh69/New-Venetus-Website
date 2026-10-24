import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Individual video card with proper 16:9 aspect ratio
const VideoCard = ({ videoId, label, sublabel, order }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: order * 0.12 }}
      className="relative w-full rounded-2xl overflow-hidden bg-black shadow-[0_24px_60px_rgba(0,0,0,0.7)] border border-white/[0.08]"
      style={{ aspectRatio: '16/9' }}
    >
      {!isPlaying ? (
        <div
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center"
        >
          {/* YouTube Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={label}
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            }}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/35 pointer-events-none" />

          {/* Ambient Glow */}
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[220px] bg-primary/[0.05] blur-[120px] rounded-full pointer-events-none" />

          {/* Play Button */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <div className="relative flex items-center justify-center mb-2 sm:mb-3">
              {/* Ripple Ring */}
              <div className="absolute w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#FF0000]/20 animate-ping pointer-events-none" />
              <div className="absolute w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#FF0000]/30 group-hover:scale-110 transition-transform duration-300" />

              {/* YouTube Play Button */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-7 sm:w-16 sm:h-11 bg-[#FF0000] rounded-[8px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(255,0,0,0.45)] flex items-center justify-center group-hover:shadow-[0_16px_40px_rgba(255,0,0,0.65)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-6 sm:h-6 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            <span className="font-heading text-sm sm:text-xl md:text-2xl text-white font-medium tracking-tight drop-shadow-lg mb-0.5 sm:mb-1">
              {label}
            </span>
            <span className="font-body text-[#E9C27A] text-[9px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold drop-shadow-md">
              {sublabel}
            </span>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      )}
    </motion.div>
  )
}

const TestimonialVideoSection = () => {
  const videos = [
    {
      id: 'SPrI_-in-Zg',
      label: 'Watch Real Client Walkthrough',
      sublabel: 'Latest Project — Click to Play',
    },
    {
      id: 'PIQm4m7j16Q',
      label: 'Watch Real Client Walkthrough',
      sublabel: 'Click to Play Inside Website',
    },
  ]

  return (
    <section className="w-full bg-[#0A0A0B] py-12 sm:py-16 md:py-20 border-t border-b border-white/[0.08]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-14">
        {/* Videos Grid — stacked, all screen sizes */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {videos.map((video, idx) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              label={video.label}
              sublabel={video.sublabel}
              order={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialVideoSection
