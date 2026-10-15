import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';

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
    <section className="w-full bg-white pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-14 md:pb-16 border-t border-b border-gray-100 overflow-hidden font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14">

        {/* Section Header (Exact CompanyIntro font & design style) */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-gray-900 tracking-tight leading-[1.18] mb-3 sm:mb-4 text-center">
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
            <div className="space-y-2 text-sm sm:text-base md:text-[15.5px] text-gray-600 font-sans font-normal leading-relaxed max-w-3xl mx-auto">
              <p>
                Over the years, we have worked on some of Bangalore's prominent residential properties. Our home interior designers in Bangalore have transformed residences from apartments at Embassy Lake Terraces to spacious villas in Aspen Greens and many more. Headquartered in HSR Layout, we serve homeowners across Bellandur, Indiranagar, Koramangala, Sarjapur, Whitefield and other localities in Bangalore.
              </p>
              <p className="text-gray-800 font-medium text-xs sm:text-sm pt-1">
                Explore the home tour of our completed interior projects in Bangalore.
              </p>
            </div>
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

                      {/* Top Header Bar Overlay */}
                      <div className="absolute top-0 left-0 right-0 p-2.5 sm:p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center gap-2 z-10">
                        <div className="w-5 h-5 rounded-full bg-primary/25 border border-primary/60 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                          VI
                        </div>
                        <span className="text-white text-xs font-medium truncate drop-shadow-sm">
                          {project.title}
                        </span>
                      </div>

                      {/* Red YouTube Style Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-13 h-9 sm:w-15 sm:h-10 bg-red-600 group-hover:bg-red-700 text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Name Label below card (Matching exact screenshot label) */}
                <h3 className="font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase text-gray-800 text-center mt-2.5 sm:mt-3">
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

