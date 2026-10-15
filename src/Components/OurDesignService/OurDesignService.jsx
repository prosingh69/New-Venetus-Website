import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import DesignServiceCard from './DesignServiceCard';
import { useConsultationModal } from '../../context/ConsultationModalContext';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';

const servicesData = [
  {
    id: 1,
    title: "Living Room Interiors",
    description: "We design luxury living room interiors in Bangalore with bespoke furniture, premium materials, ambient lighting and planned layouts, creating welcoming spaces.",
    image: "/design.jpg"
  },
  {
    id: 2,
    title: "Bedroom Interiors",
    description: "We design sophisticated bedrooms tailored to your lifestyle, bespoke wardrobes, furnishings and premium finishes for an elegant and organised space for Bangalore's residences.",
    image: "/bedroom.jpeg"
  },
  {
    id: 3,
    title: "Bathroom Interiors",
    description: "We create bathroom interiors for a spa experience with custom vanities, exquisite tiles, concealed fittings, and warm ambient illumination that combines luxury and utility.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786848197/image21_crpxr1.png"
  },
  {
    id: 4,
    title: "Modular Kitchen Design",
    description: "Smart, ergonomic modular kitchens crafted with high-grade boiling waterproof materials, Blum German hardware, quartz countertops, and seamless workflows.",
    image: "/kitchen1.jpeg"
  },
  {
    id: 5,
    title: "Dining Room Interiors",
    description: "Exquisite dining spaces designed for intimate family dinners and grand hosting, featuring custom dining tables, statement lighting, crockery units, and bar counters.",
    image: "/premium.jpg"
  },
  {
    id: 6,
    title: "Foyer & Entrance Design",
    description: "Bespoke entryway designs that make a grand first impression, complete with ambient warm lighting, custom shoe consoles, partition jaalis, and statement mirrors.",
    image: "/yellow.jpg"
  },
  {
    id: 7,
    title: "Home Office & Study Interiors",
    description: "Ergonomic, distraction-free study rooms and home offices with integrated cable management, ambient task lighting, custom desks, and overhead display shelving.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg"
  },
  {
    id: 8,
    title: "Wardrobes & Custom Storage",
    description: "Floor-to-ceiling modular wardrobes, walk-in closets, and smart concealed storage solutions with soft-close mechanisms tailored to your daily wardrobe needs.",
    image: "/bedroom3.jpeg"
  },
  {
    id: 9,
    title: "Complete Home Transformation",
    description: "End-to-end turnkey interior design and execution for apartments, villas, and penthouses across Bangalore with 100% in-house manufacturing and guaranteed timelines.",
    image: "/bedroom2.jpeg"
  }
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 240, damping: 20 },
  },
};

const OurDesignService = ({ locationName = 'Bangalore' }) => {
  const { openModal } = useConsultationModal();
  const [selectedService, setSelectedService] = useState(null);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  return (
    <section className="w-full bg-[#121214] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-18 border-b border-white/10 relative overflow-hidden">
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 px-4">
          <h2 className="font-heading text-[24px] xs:text-[27px] sm:text-h2 font-medium text-white tracking-[-0.02em] leading-[1.2] sm:leading-[1.15] mb-4 text-center">
            <span className="block sm:inline">
              <LettersPullUp
                text="Our Interior Design Services"
                startDelay={0.1}
                charDelay={0.035}
                align="center"
              />
            </span>{' '}
            <span className="block sm:inline">
              <LettersPullUp
                text={`in ${locationName}`}
                highlightWord={locationName}
                highlightClass="text-[#E9C27A] italic font-heading font-medium"
                startDelay={0.1 + 28 * 0.035}
                charDelay={0.035}
                align="center"
              />
            </span>
          </h2>

          <FadeUp delay={0.4} duration={0.6}>
            <p className="font-body text-[15.5px] md:text-[16.5px] font-[400] leading-[1.7] tracking-[-0.01em] text-[#D4D4D8] md:text-[#D1D1D1] max-w-[680px] mx-auto text-center text-pretty mt-4 md:mt-5 opacity-90 px-2">
              Our interior design services in {locationName} range from modular kitchens, living rooms to complete home transformations. Explore our range of services:
            </p>
          </FadeUp>
        </div>

        {/* 9 Cards Grid — Staggered Reveal Animation */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-7 xl:gap-8"
        >
          {servicesData.map((service, index) => (
            <DesignServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
              motionVariants={cardVariants}
              onImageClick={() => setSelectedService(service)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-11 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => openModal({
              title: 'Schedule Free Design Consultation',
              subtitle: 'Discuss living rooms, modular kitchens, bedrooms & full-home transformations with our experts.'
            })}
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-neutral-950 font-bold text-sm sm:text-[15px] py-3.5 sm:py-4 px-8 sm:px-9 rounded-xl shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <span>Schedule Free Design Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-neutral-950" />
          </button>

          <NavLink
            to="/portfolio"
            className="inline-flex items-center justify-center text-center bg-neutral-800/85 hover:bg-neutral-800 text-white border border-white/20 font-semibold text-sm sm:text-[15px] py-3.5 sm:py-4 px-8 sm:px-9 rounded-xl transition-all duration-300 active:scale-95 shadow-sm"
          >
            <span>View Recent Transformations</span>
          </NavLink>
        </motion.div>

      </div>

      {/* ── Full Window-View Image Lightbox Modal with Surrounding Gap ── */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-7 md:p-10 lg:p-14 bg-black/85 backdrop-blur-md cursor-pointer select-none"
            aria-modal="true"
            role="dialog"
          >
            {/* Top-Right Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close full image view"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#E9C27A] text-white hover:text-black border border-white/20 hover:border-[#E9C27A] backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer shadow-2xl active:scale-90 group"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-90 duration-300" />
            </button>

            {/* Inner Image Container (Click inside will NOT close, only clicking surrounding gap or close button closes) */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] sm:max-h-[88vh] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#161619] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col cursor-default"
            >
              {/* Full Image Frame */}
              <div className="relative w-full flex-1 max-h-[64vh] sm:max-h-[70vh] bg-black/70 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-contain max-h-[64vh] sm:max-h-[70vh] select-none"
                />
              </div>

              {/* Bottom Info Bar with Title & Consultation Action */}
              <div className="p-4 sm:p-5 md:p-6 bg-[#161619] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                    {selectedService.title}
                  </h3>
                  <p className="font-body text-xs sm:text-[13.5px] text-[#D4D4D8]/80 max-w-2xl mt-1 leading-relaxed line-clamp-2">
                    {selectedService.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const current = selectedService;
                    setSelectedService(null);
                    openModal({
                      title: `${current.title} Consultation`,
                      subtitle: `Discuss customized ${current.title.toLowerCase()} layouts, material finishes & quotes with our design experts.`
                    });
                  }}
                  className="shrink-0 inline-flex items-center gap-2 bg-[#E9C27A] hover:bg-[#DFB86A] text-black px-5 py-2.5 rounded-full font-body font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurDesignService;

