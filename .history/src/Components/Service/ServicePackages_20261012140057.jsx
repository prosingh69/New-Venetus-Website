import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'
import { useConsultationModal } from '../../context/ConsultationModalContext'

const packagesData = [
  {
    id: '3bhk',
    title: '3 BHK Apartments',
    price: 'Starts at 35 Lakhs*',
    image: '/design.jpg',
    tag: 'Popular Choice',
    description: 'Complete turnkey interior solution crafted for contemporary 3 BHK residences across Bangalore.',
    features: [
      'Modular Kitchen with Quartz Countertops',
      'Floor-to-Ceiling Wardrobes & Storage',
      'Living & Dining Ambience with False Ceiling',
      '10-Year Comprehensive Warranty',
    ],
  },
  {
    id: '4bhk',
    title: '4 BHK Apartments',
    price: 'Starts at 45 Lakhs*',
    image: '/premium.jpg',
    tag: 'Premium Luxury',
    description: 'Expansive bespoke design tailored for spacious 4 BHK apartments and penthouses.',
    features: [
      'Bespoke Acrylic / PU Finish Modular Kitchen',
      'Walk-in Wardrobes & Master Dressing Room',
      'Architectural Wall Panelling & Smart Lighting',
      'Dedicated Work-From-Home / Study Nook',
    ],
  },
  {
    id: 'villas',
    title: 'Luxury Villas',
    price: 'Starts at 60 Lakhs*',
    image: '/bedroom4.jpeg',
    tag: 'Signature Bespoke',
    description: 'Exclusive grand styling and end-to-end execution for luxury duplexes and independent villas.',
    features: [
      'Turnkey Villa Architecture & Double-Height Living',
      'Imported Hardware & German Fittings',
      'Custom Home Theatre & Bar Console',
      'Landscape, Foyer & Balcony Styling',
    ],
  },
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 22 },
  },
}

const ServicePackages = () => {
  const { openModal } = useConsultationModal()

  return (
    <section className="w-full bg-surface-soft py-14 sm:py-18 md:py-24 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        
        {/* ── Section Header (Matching Homepage Style) ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 px-4">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-tight sm:leading-[1.2] mb-3 sm:mb-4 text-center">
            <LettersPullUp
              text="Interior Design Packages"
              highlightWord="Packages"
              highlightClass="text-primary italic"
              startDelay={0.08}
              charDelay={0.03}
              align="center"
            />
          </h2>

          <FadeUp delay={0.25} duration={0.6}>
            <p className="font-sans text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto text-balance">
              At <span className="text-gray-900 font-semibold">Venetus Interior</span>, our interior packages are tailored to create refined, functional, and personalized homes. The cost of interior design in Bangalore depends on your home’s size, design scope, materials, finishes, and level of customization.
            </p>
          </FadeUp>
        </div>

        {/* ── 3 Packages Cards Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-stretch"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {packagesData.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              onClick={() =>
                openModal({
                  title: `Package Enquiry: ${pkg.title}`,
                  subtitle: `Get a personalized detailed quote, material swatches, and 3D floorplan consultations for ${pkg.title}.`,
                })
              }
              className="group cursor-pointer bg-white rounded-3xl sm:rounded-[30px] p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-2xl border border-gray-100 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative w-full h-[230px] sm:h-[260px] md:h-[280px] rounded-2xl sm:rounded-[24px] overflow-hidden bg-neutral-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Right Pill Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-medium shadow-sm">
                      <Sparkles className="w-3 h-3 text-primary" />
                      {pkg.tag}
                    </span>
                  </div>
                </div>

                {/* Card Title & Pricing */}
                <div className="pt-5 pb-2 text-center">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 tracking-tight leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="font-sans text-primary text-base sm:text-lg font-bold tracking-tight mt-1 mb-2.5">
                    {pkg.price}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs mx-auto mb-4">
                    {pkg.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 border-t border-gray-100 pt-3.5 text-left px-2">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="pt-4 mt-3 border-t border-gray-100 flex justify-center">
                <button
                  type="button"
                  className="w-full py-2.5 px-4 rounded-full bg-surface-soft group-hover:bg-primary text-gray-800 group-hover:text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
                >
                  <span>Get Customized Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer / Note */}
        <FadeUp delay={0.4} duration={0.6}>
          <p className="text-center text-[11px] sm:text-xs text-gray-400 mt-8 sm:mt-10 max-w-xl mx-auto px-4">
            *Final cost is customized based on actual carpet area, selected material brands (Greenply, Hafele, Blum), finishes (Acrylic, PU, Laminate), and specialized architectural requirements.
          </p>
        </FadeUp>

      </div>
    </section>
  )
}

export default ServicePackages

