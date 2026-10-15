import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Home, Building2, Crown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';
import { useConsultationModal } from '../../context/ConsultationModalContext';

const propertyTypes = [
  {
    id: 'apartments',
    title: 'Apartments',
    tagline: 'Smart Layouts & Modern Living',
    icon: Building2,
    description: 'We design customised apartment interiors that make the most of your space, combining smart layouts, elegant finishes and personalised details for comfortable everyday living.',
    image: '/property-apartment.png',
    link: '/portfolio',
    consultTitle: 'Apartment Interior Design'
  },
  {
    id: 'villas',
    title: 'Villas',
    tagline: 'Expansive Grandeur & Bespoke Design',
    icon: Home,
    description: 'We create bespoke villa interiors that complement expansive spaces, bringing together refined materials, thoughtful layouts and unique design elements tailored to your lifestyle.',
    image: '/property-villa.png',
    link: '/portfolio',
    consultTitle: 'Luxury Villa Interior Design'
  },
  {
    id: 'penthouses',
    title: 'Penthouses',
    tagline: 'Panoramic Views & Signature Aesthetics',
    icon: Crown,
    description: 'We design sophisticated penthouse interiors that maximise space, light and views while combining bespoke furniture, premium materials, ambient lighting and planned layouts, creating welcoming spaces.',
    image: '/property-penthouse.png',
    link: '/portfolio',
    consultTitle: 'Penthouse Interior Design'
  }
];

const InteriorsByProperty = () => {
  const { openModal } = useConsultationModal();

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">

        {/* Section Header (Centered on Top with Description) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2 sm:px-4">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2.5 block">
            Tailored Living Spaces
          </span>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-gray-900 tracking-tight leading-[1.18] mb-4 text-center">
            <LettersPullUp
              text="Interiors By Property"
              highlightWord="Property"
              highlightClass="text-primary italic font-serif"
              startDelay={0.1}
              charDelay={0.03}
              align="center"
            />
          </h2>

          <FadeUp delay={0.25} duration={0.6}>
            <div className="space-y-2 text-secondary text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto">
              <p>
                We serve interiors for different property types from elegant apartments to expansive villas and penthouses, our designs reflect your lifestyle through personalised details and aesthetics.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                As luxury interior designers in Bangalore, we focus on creating spaces that feel distinctive and truly yours.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* 3-Column Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-8">
          {propertyTypes.map((property, index) => {
            const Icon = property.icon;

            return (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.09)] hover:border-primary/30 transition-all duration-300"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-gray-100">
                  <img
                    src={property.image}
                    alt={`${property.title} Interior Design`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span>{property.title}</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-2.5 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <p className="font-sans text-secondary text-sm sm:text-[15px] leading-relaxed mb-6">
                      {property.description}
                    </p>
                  </div>

                  {/* Action Link / Button */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openModal({
                        title: property.consultTitle,
                        subtitle: property.description
                      })}
                      className="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover font-semibold text-xs sm:text-sm tracking-wide uppercase transition-colors group/btn cursor-pointer"
                    >
                      <span>Get Free Estimate</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <NavLink
                      to="/portfolio"
                      className="text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors"
                    >
                      View Projects →
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InteriorsByProperty;

