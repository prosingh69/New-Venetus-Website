import React, { useState } from 'react';
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

const residentialProjects = [
  {
    id: 1,
    name: 'ASPEN GREENS',
    title: '4BHK Luxury Villa at Aspen Greens',
    youtubeId: 'ij3T_R46FG0'
  },
  {
    id: 2,
    name: 'ADARSH TRANQVILLE',
    title: '4BHK Villa At Adarsh Tranqville',
    youtubeId: 'ikGrJEq2omw'
  },
  {
    id: 3,
    name: 'BALAJI URBAN RETREAT',
    title: 'Minimal. Majestic. Masterpiece',
    youtubeId: 'Cz4X7Zhvfqw'
  },
  {
    id: 4,
    name: 'PRESTIGE CITY',
    title: '4BHK Villa at Prestige City',
    youtubeId: 'gbLmGh0QG0U'
  },
  {
    id: 5,
    name: 'CHAITHANYA SAMARTH',
    title: 'The Art of Luxury Interiors',
    youtubeId: 'AwcKqXS4FKs'
  },
  {
    id: 6,
    name: 'SECRET SOIL',
    title: 'The Secret Soil Luxury Living',
    youtubeId: 'wp1rltQx8Yw'
  },
  {
    id: 7,
    name: 'EPITOME ELAN',
    title: 'A Symphony of Space',
    youtubeId: 'QnI0C1D0N5I'
  },
  {
    id: 8,
    name: 'EMBASSY LAKE TERRACES',
    title: 'Signature Spaces. Iconic Luxury',
    youtubeId: 'C0J1rOtvFnA'
  }
];

const ResidentialProjects = () => {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="w-full bg-[#545454] pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-14 md:pb-16 border-t border-b border-white/10 overflow-hidden font-sans text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14">

        {/* Section Header (Exact CompanyIntro font & design style) */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-3 sm:mb-4 text-center">
            <LettersPullUp
              text="Our Residential Interior Design Projects"
              highlightWord="Projects"
              highlightClass="text-primary italic font-sans"
              startDelay={0.1}
              charDelay={0.032}
              align="center"
            />
          </h2>

          <FadeUp delay={0.25} duration={0.6}>
            <p className="text-sm sm:text-base md:text-[16px] text-white/85 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              Explore video walkthroughs of our completed luxury home interior projects in Bangalore — showcasing bespoke craftsmanship across modern apartments and premium villas.
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
                <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-black border border-gray-100">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={project.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setPlayingId(project.id)}
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
                      {/* Video Poster Image from YouTube HQ */}
                      <img
                        src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
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

                {/* Project Name Label below card (Matching exact screenshot label) */}
                <h3 className="font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase text-white text-center mt-2.5 sm:mt-3">
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
