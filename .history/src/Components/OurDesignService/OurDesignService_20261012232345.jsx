import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import DesignServiceCard from './DesignServiceCard';
import { useConsultationModal } from '../../context/ConsultationModalContext';

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

import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';

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

  return (
    <section className="w-full bg-[#545454] pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-12 md:pb-14 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 px-4">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-4 text-center">
            <LettersPullUp
              text={`Our Interior Design Services in ${locationName}`}
              highlightWord={locationName}
              highlightClass="text-primary italic"
              startDelay={0.1}
              charDelay={0.035}
              align="center"
            />
          </h2>

          <FadeUp delay={0.4} duration={0.6}>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-normal max-w-2xl mx-auto px-2">
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
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-neutral-950 font-bold text-sm sm:text-[15px] py-3.5 sm:py-4 px-8 sm:px-9 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45 transition-all duration-300 active:scale-95 group cursor-pointer"
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
    </section>
  );
};

export default OurDesignService;

