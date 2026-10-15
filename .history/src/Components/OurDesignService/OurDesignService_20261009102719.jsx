import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import DesignServiceCard from './DesignServiceCard';

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

const OurDesignService = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-primary uppercase">
              Our Capabilities
            </span>
            <span className="w-2 h-2 rounded-full bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-tight mb-4"
          >
            Our Interior Design Services in{' '}
            <span className="text-primary italic">Bangalore</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal text-balance"
          >
            Our interior design services in Bangalore range from modular kitchens and luxurious living rooms to complete home transformations. Explore our range of services:
          </motion.p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {servicesData.map((service, index) => (
            <DesignServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-14 sm:mt-18 text-center flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold text-sm sm:text-[15px] py-3.5 sm:py-4 px-8 sm:px-9 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 active:scale-95 group"
          >
            <span>Schedule Free Design Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </NavLink>

          <NavLink
            to="/portfolio"
            className="inline-flex items-center justify-center text-center bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 font-semibold text-sm sm:text-[15px] py-3.5 sm:py-4 px-8 sm:px-9 rounded-xl transition-all duration-300 active:scale-95 shadow-sm"
          >
            <span>View Recent Transformations</span>
          </NavLink>
        </motion.div>

      </div>
    </section>
  );
};

export default OurDesignService;

