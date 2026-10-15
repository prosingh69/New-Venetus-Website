import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';
import { useConsultationModal } from '../../context/ConsultationModalContext';

const propertyItems = [
  {
    id: 'apartments',
    title: 'Apartments',
    tag: 'Bespoke Residences',
    number: '01',
    image: '/property-apartment.png',
    description:
      'We design customised apartment interiors that make the most of your space, combining smart layouts, elegant finishes and personalised details for comfortable everyday living.'
  },
  {
    id: 'villas',
    title: 'Villas',
    tag: 'Expansive Living',
    number: '02',
    image: '/property-villa.png',
    description:
      'We create bespoke villa interiors that complement expansive spaces, bringing together refined materials, thoughtful layouts and unique design elements tailored to your lifestyle.'
  },
  {
    id: 'penthouses',
    title: 'Penthouses',
    tag: 'Skyline Luxury',
    number: '03',
    image: '/property-penthouse.png',
    description:
      'We design sophisticated penthouse interiors that maximise space, light and views while combining bespoke furnishings, premium finishes and personalised designs.'
  }
];

const InteriorsByProperty = ({ locationName = 'Bangalore' }) => {
  const { openModal } = useConsultationModal();

  return (
    <section className="w-full bg-[#18181b] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-18 border-t border-b border-white/10 overflow-hidden text-white relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 relative z-10">

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-2 sm:px-4">
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] text-balance mb-4 text-center">
            <LettersPullUp
              text="Interiors by Property"
              highlightWord="Property"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.1}
              charDelay={0.032}
              align="center"
            />
          </h2>

          <FadeUp delay={0.25} duration={0.6}>
            <p className="font-body text-[15.5px] md:text-[16.5px] font-[400] leading-[1.7] tracking-[-0.01em] text-[#D4D4D8] md:text-[#D1D1D1] max-w-[680px] mx-auto text-center text-pretty mt-4 md:mt-5 opacity-90 px-2">
              {locationName && locationName !== 'Bangalore'
                ? `We craft bespoke interiors in ${locationName} for different property types — from elegant apartments to expansive villas and penthouses, tailored to your lifestyle.`
                : 'We serve interiors for different property types from elegant apartments to expansive villas and penthouses, our designs reflect your lifestyle through personalised details and aesthetics.'}
            </p>
          </FadeUp>
        </div>

        {/* 3-Column Modern Architectural Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-14">
          {propertyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              onClick={() => openModal({
                title: `${item.title} Interior Design`,
                subtitle: item.description
              })}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-[#141417] border border-white/10 hover:border-primary/50 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 cursor-pointer"
            >
              {/* Full-Bleed Edge-to-Edge Image Header (Zero Inner Padding) */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={`${item.title} Interiors`}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Ambient dark gradient that melts naturally into the card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-black/20 to-black/30 pointer-events-none" />

                {/* Floating Modern Pill Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/15 text-white/95 text-[10px] sm:text-[11px] font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item.tag}
                  </span>
                </div>

                {/* Floating Action Arrow — Rotates in-place from diagonal (-45deg) to 0deg (horizontal right) on card hover */}
                <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-neutral-950 transition-colors duration-300 shadow-lg">
                  <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out" />
                </div>
              </div>

              {/* Lower Content Deck — Exact matching typography from upper DesignService section */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-start text-center">
                <h3 className="font-heading text-xl sm:text-[22px] font-medium text-white mb-2.5 group-hover:text-primary transition-colors duration-300 tracking-tight text-center">
                  <button
                    type="button"
                    onClick={() => openModal({
                      title: `${item.title} Interior Design`,
                      subtitle: item.description
                    })}
                    className="hover:text-primary transition-colors text-inherit font-inherit cursor-pointer text-center inline-block"
                  >
                    {item.title}
                  </button>
                </h3>

                <p className="font-body text-sm sm:text-[15px] text-[#CCCCCC] leading-[1.65] flex-1 text-justify [text-justify:inter-word] [text-align:justify] px-1 sm:px-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <FadeUp delay={0.3} duration={0.6}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-2 sm:pt-4">
            <p className="font-body text-[15.5px] md:text-[16.5px] text-[#D4D4D8] md:text-[#D1D1D1] font-[400] leading-[1.7] text-center mb-5 sm:mb-6">
              <span className="block">Take the first step towards creating a home tailored to your lifestyle.</span>
              <span className="block">Reach out today to discuss your vision!</span>
            </p>

            {/* Solid Gold/Primary CTA Button */}
            <button
              type="button"
              onClick={() => openModal({
                title: 'Book a Free Design Consultation',
                subtitle: 'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.'
              })}
              className="font-body btn-text font-semibold text-neutral-950 bg-primary hover:bg-primary-hover px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Book A Free Consultation
            </button>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};

export default InteriorsByProperty;
