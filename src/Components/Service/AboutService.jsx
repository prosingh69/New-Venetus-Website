import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { useConsultationModal } from '../../context/ConsultationModalContext'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'

const serviceCards = [
  {
    index: '01',
    title: 'Residential Interior Design',
    image: '/bedroom4.jpeg',
    description: 'Tailored design services for private homes, including room makeovers and complete home transformations.'
  },
  {
    index: '02',
    title: 'Commercial Interior Design',
    image: '/premium.jpg',
    description: 'Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.'
  },
  {
    index: '03',
    title: 'Interior Design Consultation',
    image: '/design.jpg',
    description: 'Providing professional advice on concepts, spatial layouts, curated color schemes, and premium material selection.'
  },
  {
    index: '04',
    title: 'Outdoor & Landscape Design',
    image: '/kitchen1.jpeg',
    description: 'Extending design services to outdoor spaces such as gardens, patios, and decks with weather-resistant finishes.'
  },
  {
    index: '05',
    title: 'Custom Interior Design',
    image: '/bedroom3.jpeg',
    description: 'Overhauling existing spaces to modernize and improve functionality, custom wardrobes, and tailored aesthetics.'
  },
  {
    index: '06',
    title: 'Interior 2D/3D Layouts',
    image: '/package-kitchen.jpg',
    description: 'Realistic 3D visualizations to help you envision your space, textures, and lighting before it’s built in real life.'
  }
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 24 },
  },
}

const AboutService = () => {
  const { openModal } = useConsultationModal()

  return (
    <section id="services-grid" className="w-full bg-[#0A0A0B] pt-14 sm:pt-18 md:pt-22 pb-16 sm:pb-20 md:pb-24 border-b border-white/10 scroll-mt-20 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 relative z-10">

        {/* Section Header matching Homepage & About theme */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-3 sm:mb-4 text-center text-balance">
            <LettersPullUp
              text="Explore Our Comprehensive Interior Design Services"
              highlightWord="Comprehensive Interior Design"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.08}
              charDelay={0.025}
              align="center"
            />
          </h2>

          <FadeUp delay={0.35} duration={0.6}>
            <p className="hidden sm:block font-body text-[15.5px] md:text-[16.5px] text-[#D4D4D8] leading-[1.7] max-w-2xl mx-auto mt-2">
              From bespoke residential styling to turnkey modular execution, discover how we craft spaces tailored to your lifestyle.
            </p>
          </FadeUp>
        </div>

        {/* ── Full Image Cards Grid with Smooth Hover Reveal ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {serviceCards.map((card) => (
            <motion.div
              key={card.index}
              variants={cardVariants}
              onClick={() => openModal({
                title: `Consultation: ${card.title}`,
                subtitle: `Talk with our senior design architects to plan your layout, 3D designs, and exact budget for ${card.title}.`
              })}
              className="group relative h-[420px] sm:h-[460px] lg:h-[490px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#18181b] border border-white/10 hover:border-[#E9C27A]/50 transition-all duration-500 shadow-xl hover:shadow-[0_24px_50px_rgba(0,0,0,0.85)] cursor-pointer flex flex-col justify-between"
            >
              {/* Edge-to-Edge Full Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Ambient Dark Gradient Vignette for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 transition-opacity duration-500 group-hover:from-black/98 group-hover:via-black/75 pointer-events-none" />

              {/* Top Row: Index Number & Floating Quick Action Arrow */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between w-full pointer-events-none">
                <span className="font-heading font-semibold text-2xl sm:text-3xl text-[#E9C27A] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {card.index}
                </span>

                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#E9C27A] group-hover:text-black group-hover:border-[#E9C27A] transition-all duration-300 shadow-xl">
                  <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Content Area: Title Always Visible + Description Revealed on Hover */}
              <div className="relative z-10 p-5 sm:p-6.5 flex flex-col justify-end text-center">
                {/* Always-visible Title over image */}
                <h3 className="font-heading text-2xl sm:text-[25px] font-medium text-white group-hover:text-[#E9C27A] transition-colors duration-300 tracking-tight leading-snug text-center">
                  {card.title}
                </h3>

                {/* Smooth Reveal Accordion: Description and Action unfold on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="font-body text-[13px] sm:text-[14px] text-[#D4D4D8]/90 leading-relaxed pt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-justify [text-justify:inter-word] [text-align:justify] px-1 sm:px-2">
                      {card.description}
                    </p>
                    <div className="pt-3.5 flex items-center justify-center gap-1.5 text-xs sm:text-[13px] font-body text-[#E9C27A] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      <span>Book Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default AboutService
