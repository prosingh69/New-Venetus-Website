import React, { useRef, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const projectVideos = [
  {
    id: 'luxury-living',
    src: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791976507/hailuo-03_A_slow_ultra-smooth_cinematic_dolly_push-in_shot_of_this_luxurious_modern_living-0_bgr615.mp4',
    poster: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791977248/frame_001_1_jpwl1m.jpg',
    tag: 'Living Architecture',
    title: 'Luxury Living Architecture',
    description: 'Bespoke geometric wall paneling, integrated warm cove lighting, and seamless open-plan entertainment spaces crafted for modern Bangalore living.',
  },
  {
    id: 'kids-suite',
    src: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791974603/hailuo-03_A_continuous_seamless_cinematic_camera_pan_inside_the_same_luxury_room_rotating_-0_dgucx5.mp4',
    poster: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791974682/frame_001_vapac0.jpg',
    tag: "Children's Suite",
    title: 'Kids Bedrooms & Creative Nooks',
    description: 'Playful aesthetics, ergonomic study suites, and versatile modular storage designed to nurture growing minds.',
  },
  {
    id: 'master-bedroom',
    src: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791978576/hailuo-03_Slow_cinematic_camera_slider_shot_moving_smoothly_from_left_to_right_across_this-0_zqckhz.mp4',
    poster: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791978594/frame_001_2_nmpzvt.jpg',
    tag: 'Private Sanctuary',
    title: 'Master Bedroom Sanctuary',
    description: 'Integrated floor-to-ceiling wardrobes, custom cushioned headboards, and soothing ambient illumination for restful luxury.',
  },
  {
    id: 'modular-kitchen',
    src: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791979872/hailuo-03_A_slow_continuous_cinematic_camera_motion_in_a_modern_U-shaped_kitchen_utilizing-0_twpmdw.mp4',
    poster: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1791979869/frame_001_3_cddhlb.jpg',
    tag: 'Gourmet Kitchen',
    title: 'Contemporary Modular Kitchen',
    description: 'Precision German hardware, quartz breakfast counter, and ergonomic motion mechanics engineered for culinary excellence.',
  },
  {
    id: 'classic-parisian',
    src: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791992046/lv_0_20261014203440_suyppo.mp4',
    poster: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto,so_0/v1791992046/lv_0_20261014203440_suyppo.jpg',
    tag: 'Classic Luxury',
    title: 'Classic Parisian Bedroom Suites',
    description: 'Bespoke wall wainscoting, warm brass lighting sconces, and plush architectural craftsmanship tailored for sophisticated Bangalore homes.',
  },
  {
    id: 'pooja-sanctum',
    src: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791992045/lv_0_20261014204516_yyrosz.mp4',
    poster: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto,so_0/v1791992045/lv_0_20261014204516_yyrosz.jpg',
    tag: 'Sacred Architecture',
    title: 'Pooja Rooms & Sacred Sanctums',
    description: 'Rich teak wood accents, backlit CNC jaali partitions, and tranquil ambient illumination crafted for spiritual harmony.',
  },
  {
    id: 'architectural-lounge',
    src: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto/v1791992044/lv_0_20261014204738_ysezaz.mp4',
    poster: 'https://res.cloudinary.com/lbei6xmb/video/upload/f_auto,q_auto,so_0/v1791992044/lv_0_20261014204738_ysezaz.jpg',
    tag: 'Media Architecture',
    title: 'Architectural Suites & Media Lounges',
    description: 'Curved acoustic fluting, floating consoles, and architectural lighting engineered for immersive home entertainment.',
  },
  {
    id: 'turnkey-suites',
    src: '/architectural-suites.mp4',
    tag: 'Turnkey Excellence',
    title: 'Turnkey Architectural Suites',
    description: 'Complete home execution from technical 3D blueprints to seamless carpentry, bespoke electricals, and finishing handover.',
  },
  {
    id: 'grand-living',
    src: '/herosection2.mp4',
    tag: 'Penthouse Living',
    title: 'Grand Living & Villa Transformations',
    description: 'Expansive double-height living spaces, panoramic glass accents, and premium material finishes crafted for Bangalore villas.',
  },
  {
    id: 'bespoke-craft',
    src: '/herosection1.mp4',
    tag: 'Signature Craft',
    title: 'Art of Bespoke Craftsmanship',
    description: 'Every detail engineered to perfection with 10-year warranty, in-house precision factory fabrication, and uncompromised quality.',
  },
]

const VideoItem = ({ video, index, total, isActive, onInView }) => {
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
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            onInView(index)
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
        threshold: [0.2, 0.5, 0.8],
      }
    )

    observer.observe(containerEl)

    return () => {
      observer.disconnect()
    }
  }, [index, onInView])

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] h-screen snap-start snap-always flex items-center justify-center overflow-hidden bg-black group select-none"
    >
      {/* ── Background Video with Autoplay & Loop (NO controls / NO buttons) ── */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        poster={video.poster}
        onPlaying={() => setIsPlaying(true)}
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-105 pointer-events-none"
      >
        <source src={video.src} type="video/mp4" />
      </video>

      {/* Poster image that smoothly fades out on start */}
      {video.poster && (
        <img
          src={video.poster}
          alt={video.title}
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-105 pointer-events-none transition-opacity duration-700 ease-out ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* ── Cinematic Dark Overlays ── */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

      {/* ── Hover-Revealed Title & Short Description ── */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-14 left-5 sm:left-10 md:left-16 max-w-xl z-20 pointer-events-none transition-all duration-500 ease-out transform translate-y-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-[20px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Category Tag */}
          <span className="inline-block text-[#E9C27A] text-[10px] sm:text-[11px] font-body uppercase tracking-[0.2em] font-semibold mb-2">
            {video.tag}
          </span>

          {/* Title in Cormorant Garamond */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[34px] text-white font-medium leading-[1.18] mb-2 drop-shadow-md">
            {video.title}
          </h2>

          {/* Short Description */}
          <p className="font-body text-[#D4D4D8] text-[13px] sm:text-[14.5px] leading-relaxed drop-shadow-sm max-w-lg">
            {video.description}
          </p>
        </div>
      </div>

      {/* ── Subtle Elegant Video Counter in Top Right (Editorial Aesthetic) ── */}
      <div className="absolute top-24 sm:top-28 right-5 sm:right-10 md:right-14 z-20 pointer-events-none flex items-center gap-2">
        <span className="font-heading text-lg sm:text-xl text-[#E9C27A] font-medium tracking-wider">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="w-6 h-px bg-white/20" />
        <span className="font-body text-xs text-white/50 tracking-wider">
          {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* ── Subtle Scroll Hint Indicator on First Video ── */}
      {index === 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-1.5 opacity-60 transition-opacity duration-500 group-hover:opacity-20">
          <span className="text-[10px] font-body uppercase tracking-[0.22em] text-[#E9C27A]">
            Scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-[#E9C27A] to-transparent animate-pulse" />
        </div>
      )}
    </section>
  )
}

const Videos = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Cinematic Video Showcase | Venetus Interior</title>
        <meta
          name="description"
          content="Experience our interior designs in cinematic motion. Explore luxury Bangalore homes, modular kitchens, master suites, and bespoke turnkey spaces."
        />
        <meta name="keywords" content="interior design videos, luxury home tour, Bangalore turnkey interiors video showcase" />
        <link rel="canonical" href="https://www.venetusinterior.in/video" />
      </Helmet>

      {/* Full Window Snapping Container */}
      <main className="w-full h-screen h-[100dvh] overflow-y-scroll snap-y snap-mandatory bg-black text-white scroll-smooth scrollbar-none">
        {projectVideos.map((video, index) => (
          <VideoItem
            key={video.id}
            video={video}
            index={index}
            total={projectVideos.length}
            isActive={activeIndex === index}
            onInView={(idx) => setActiveIndex(idx)}
          />
        ))}
      </main>
    </>
  )
}

export default Videos

