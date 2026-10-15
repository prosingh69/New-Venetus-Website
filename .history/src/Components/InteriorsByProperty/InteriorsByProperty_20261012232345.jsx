import React from 'react';
import { motion } from 'framer-motion';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';
import { useConsultationModal } from '../../context/ConsultationModalContext';

const propertyItems = [
  {
    id: 'apartments',
    title: 'Apartments',
    image: '/property-apartment.png',
    description:
      'We design customised apartment interiors that make the most of your space, combining smart layouts, elegant finishes and personalised details for comfortable everyday living.'
  },
  {
    id: 'villas',
    title: 'Villas',
    image: '/property-villa.png',
    description:
      'We create bespoke villa interiors that complement expansive spaces, bringing together refined materials, thoughtful layouts and unique design elements tailored to your lifestyle.'
  },
  {
    id: 'penthouses',
    title: 'Penthouses',
    image: '/property-penthouse.png',
    description:
      'We design sophisticated penthouse interiors that maximise space, light and views while combining bespoke furnishings, premium finishes and personalised designs.'
  }
];

const InteriorsByProperty = () => {
  const { openModal } = useConsultationModal();

  return (
    <section className="w-full bg-[#545454] pt-10 sm:pt-12 md:pt-14 pb-10 sm:pb-12 md:pb-14 border-t border-b border-white/10 overflow-hidden font-sans text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14">

        {/* Section Heading & Subtitle — Matching CompanyIntro Typography */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-3 sm:mb-4 text-center">
            <LettersPullUp
              text="Interiors by Property"
              highlightWord="Property"
              highlightClass="text-primary italic font-sans"
              startDelay={0.1}
              charDelay={0.032}
              align="center"
            />
          </h2>

          <FadeUp delay={0.25} duration={0.6}>
            <div className="space-y-2 text-sm sm:text-base md:text-[16px] text-white/85 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              <p>
                We serve interiors for different property types from elegant apartments to expansive villas and penthouses, our designs reflect your lifestyle through personalised details and aesthetics.
              </p>
              <p className="text-white/70 text-xs sm:text-sm">
                As luxury interior designers in Bangalore, we focus on creating spaces that feel distinctive and truly yours.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* 3-Column Property Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 items-start mb-8 sm:mb-10">
          {propertyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col items-center text-center cursor-pointer"
              onClick={() => openModal({
                title: `${item.title} Interior Design`,
                subtitle: item.description
              })}
            >
              {/* Rounded Image with Smooth Hover Effect */}
              <div className="w-full aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 mb-4 bg-neutral-800 border border-white/10">
                <img
                  src={item.image}
                  alt={`${item.title} Interiors`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title in CompanyIntro Font Style */}
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 transition-colors group-hover:text-primary">
                {item.title}
              </h3>

              {/* Description in CompanyIntro Font Style */}
              <p className="font-sans text-xs sm:text-[13.5px] md:text-sm text-white/75 font-normal leading-relaxed max-w-xs sm:max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <FadeUp delay={0.3} duration={0.6}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-2 sm:pt-4">
            {/* Quote / Subheading in CompanyIntro Font Style */}
            <p className="font-sans font-medium text-white/90 text-sm sm:text-base md:text-[17px] tracking-tight leading-relaxed mb-4 sm:mb-5">
              Take the first step towards creating a home tailored to your lifestyle. Reach out today to discuss your vision!
            </p>

            {/* Solid Gold/Primary CTA Button */}
            <button
              type="button"
              onClick={() => openModal({
                title: 'Book a Free Design Consultation',
                subtitle: 'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.'
              })}
              className="font-sans font-bold text-sm sm:text-base text-neutral-950 bg-primary hover:bg-primary-hover px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45 transition-all duration-300 active:scale-95 cursor-pointer"
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
