import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';

// Exact Authentic YouTube Play Button (Official Vector Geometry)
const YouTubePlayButton = () => (
  <svg
    viewBox="0 0 68 48"
    className="w-14 h-10 sm:w-16 sm:h-11 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-115"
  >
    <path
      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
      fill="#FF0000"
      className="transition-colors duration-200 group-hover:fill-[#CC0000]"
    />
    <polygon
      points="45,24 27,14 27,34"
      fill="#FFFFFF"
    />
  </svg>
);

const YOUTUBE_VIDEO_ID = 'JuAa0bUDrGQ';

const residentialProjects = [
  {
    id: 1,
    name: 'ASPEN GREENS',
    title: '4BHK Luxury Villa at Aspen Greens',
    thumbnail: '/residential-thumb-1.jpg',
    startTime: 2
  },
  {
    id: 2,
    name: 'ADARSH TRANQVILLE',
    title: '4BHK Villa At Adarsh Tranqville',
    thumbnail: '/residential-thumb-2.jpg',
    startTime: 14
  },
  {
    id: 3,
    name: 'BALAJI URBAN RETREAT',
    title: 'Minimal. Majestic. Masterpiece',
    thumbnail: '/residential-thumb-3.jpg',
    startTime: 28
  },
  {
    id: 4,
    name: 'PRESTIGE CITY',
    title: '4BHK Villa at Prestige City',
    thumbnail: '/residential-thumb-4.jpg',
    startTime: 42
  },
  {
    id: 5,
    name: 'CHAITHANYA SAMARTH',
    title: 'The Art of Luxury Interiors',
    thumbnail: '/residential-thumb-5.jpg',
    startTime: 56
  },
  {
    id: 6,
    name: 'SECRET SOIL',
    title: 'The Secret Soil Luxury Living',
    thumbnail: '/residential-thumb-6.jpg',
    startTime: 61
  },
  {
    id: 7,
    name: 'EPITOME ELAN',
    title: 'A Symphony of Space',
    thumbnail: '/residential-thumb-7.jpg',
    startTime: 85
  },
  {
    id: 8,
    name: 'EMBASSY LAKE TERRACES',
    title: 'Signature Spaces. Iconic Luxury',
    thumbnail: '/residential-thumb-8.jpg',
    startTime: 98
  }
];

const ResidentialProjects = ({ locationName = 'Bangalore' }) => {
  const [playingId, setPlayingId] = useState(null);
  const [iframeLoading, setIframeLoading] = useState({});

  useEffect(() => {
    // Preconnect to YouTube CDN and video streaming endpoints
    const domains = [
      'https://www.youtube-nocookie.com',
      'https://googlevideo.com',
      'https://i.ytimg.com'
    ];
    domains.forEach((d) => {
      if (!document.querySelector(`link[href="${d}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = d;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // Prefetch embed document so it is cached in browser before click
    const prefetchUrl = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`;
    if (!document.querySelector(`link[href="${prefetchUrl}"]`)) {
      const prefetch = document.createElement('link');
      prefetch.rel = 'prefetch';
      prefetch.href = prefetchUrl;
      prefetch.as = 'document';
      document.head.appendChild(prefetch);
    }
  }, []);

  const handlePlay = (id) => {
    setPlayingId(id);
    setIframeLoading((prev) => ({ ...prev, [id]: true }));
  };

  const handleIframeLoad = (id) => {
    setIframeLoading((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <section className="w-full bg-[#121214] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 border-t border-b border-white/10 overflow-hidden text-white relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-2 sm:px-4">
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-4 text-center text-balance">
            <LettersPullUp
              text="Our Residential Interior Design Projects"
              highlightWord="Projects"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.1}
              charDelay={0.032}
              align="center"
            />
          </h2>

          <FadeUp delay={0.25} duration={0.6}>
            <p className="font-body text-body-normal centered-body text-[#CCCCCC] leading-[1.6] text-pretty">
              {locationName && locationName !== 'Bangalore'
                ? `Explore video walkthroughs of our completed luxury home interior projects in ${locationName} & Bangalore — showcasing bespoke craftsmanship across modern apartments and premium villas.`
                : 'Explore video walkthroughs of our completed luxury home interior projects in Bangalore — showcasing bespoke craftsmanship across modern apartments and premium villas.'}
            </p>
          </FadeUp>
        </div>

        {/* 8-Card Responsive Video Grid (4 columns on lg, 2 on md/sm, 1 on xs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {residentialProjects.map((project, index) => {
            const isPlaying = playingId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col"
              >
                {/* Video Card Container */}
                <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_12px_36px_rgba(240,202,107,0.18)] transition-all duration-300 bg-neutral-900 border border-white/10 hover:border-primary/50">
                  {isPlaying ? (
                    <div className="relative w-full h-full bg-black">
                      {/* Loading state indicator while video buffers */}
                      {iframeLoading[project.id] !== false && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 z-10 pointer-events-none">
                          <img
                            src={project.thumbnail}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[1px]"
                          />
                          <div className="relative z-10 flex flex-col items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full border-2 border-[#E9C27A]/30 border-t-[#E9C27A] animate-spin" />
                            <span className="text-[11px] font-sans text-[#E9C27A] tracking-wider uppercase font-semibold drop-shadow">
                              Loading Video...
                            </span>
                          </div>
                        </div>
                      )}
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&start=${project.startTime}&rel=0&modestbranding=1&playsinline=1&enablejsapi=0`}
                        title={project.title}
                        className="w-full h-full border-0 relative z-20"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="eager"
                        onLoad={() => handleIframeLoad(project.id)}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => handlePlay(project.id)}
                      className="relative w-full h-full cursor-pointer group"
                      role="button"
                      tabIndex={0}
                      aria-label={`Play video for ${project.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setPlayingId(project.id);
                        }
                      }}
                    >
                      {/* Video Poster Image - Unique for each card */}
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                      {/* Top Header Bar Overlay (Like native YouTube embed) */}
                      <div className="absolute top-0 left-0 right-0 p-2.5 sm:p-3 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center gap-2.5 z-10">
                        {/* Channel Icon */}
                        <div className="w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow">
                          <img src="/logo.png" alt="Venetus" className="w-full h-full object-contain" />
                        </div>
                        {/* Title and Channel name */}
                        <div className="flex flex-col min-w-0">
                          <span className="text-white text-xs sm:text-[13px] font-semibold truncate drop-shadow-sm leading-tight">
                            {project.title}
                          </span>
                          <span className="text-white/70 text-[10px] truncate leading-tight mt-0.5">
                            Venetus Interior
                          </span>
                        </div>
                      </div>

                      {/* Official YouTube Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <YouTubePlayButton />
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Name Label below card (Matching exact card typography) */}
                <h3 className="font-heading font-medium text-lg sm:text-[19px] tracking-tight text-white text-center mt-3 sm:mt-3.5">
                  {project.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ResidentialProjects;
