import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'
import { useConsultationModal } from '../../context/ConsultationModalContext'

const packagesData = [
  {
    id: '1bhk',
    title: 'Urban Starter — 1 BHK',
    scope: 'Compact modular kitchen, 2 custom wardrobes, TV entertainment unit & shoe console.',
    priceRange: 'Starts at ₹3.2 Lakhs*',
    image: '/design.jpg',
    objectPosition: 'object-center',
  },
  {
    id: '2bhk',
    title: 'Smart Living — 2 BHK',
    scope: 'Ergonomic modular kitchen, 3 wardrobes, 2 TV units, crockery cabinet & pooja unit.',
    priceRange: '₹5.2 – ₹8.5 Lakhs*',
    image: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg',
    objectPosition: 'object-[center_25%]',
  },
  {
    id: '3bhk',
    title: 'Family Signature — 3 BHK',
    scope: 'Large modular kitchen, 4 wardrobes, curated living, dining & 3 full bedrooms.',
    priceRange: '₹7.8 – ₹13.5 Lakhs*',
    image: '/bedroom3.jpeg',
    objectPosition: 'object-center',
  },
  {
    id: '4bhk',
    title: 'Grand Villa — 4 BHK / Duplex',
    scope: 'Turnkey interiors with walk-in wardrobe, custom bar unit, study & designer ceilings.',
    priceRange: '₹14 – ₹22 Lakhs*',
    image: '/kitchen1.jpeg',
    objectPosition: 'object-center',
  },
  {
    id: 'rental',
    title: 'Quick Refresh — Rental Setup',
    scope: 'Durable HDHMR modular kitchen, essential wardrobes & TV unit with 25-day handover.',
    priceRange: '₹1.8 – ₹3.8 Lakhs*',
    image: 'https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    id: 'luxe',
    title: 'Venetus LUXE — Ultra Premium',
    scope: 'Acrylic, PU & veneer finishes with German fittings, profile lights & bespoke craftsmanship.',
    priceRange: 'Starts at ₹18 Lakhs*',
    image: '/package-kitchen.jpg',
    objectPosition: 'object-[center_35%]',
  },
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const ServicePackages = () => {
  const { openModal } = useConsultationModal()

  return (
    <section className="w-full bg-[#121214] py-14 sm:py-18 md:py-24 border-t border-b border-white/10 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* ── Section Header (Exact Homepage Theme & Style) ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 px-4">
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-4 text-center text-balance">
            <LettersPullUp
              text="Interior Design Packages"
              highlightWord="Packages"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.1}
              charDelay={0.035}
              align="center"
            />
          </h2>

          <FadeUp delay={0.35} duration={0.6}>
            <p className="font-body text-[15.5px] md:text-[16.5px] text-[#D4D4D8] leading-[1.7] max-w-2xl mx-auto px-2 text-pretty">
              Explore our transparent interior design packages for Bangalore apartments and luxury villas, crafted with premium materials and guaranteed timelines.
            </p>
          </FadeUp>
        </div>

        {/* ── 3 Packages Cards (Ultra-Modern Vertical Portrait Containers) ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
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
                  title: `Enquiry: ${pkg.title}`,
                  subtitle: `Plan your dream ${pkg.title} (${pkg.priceRange}) with transparent Bangalore pricing and custom 3D layouts.`,
                })
              }
              className="group cursor-pointer flex flex-col rounded-[24px] overflow-hidden bg-[#161619] border border-white/10 hover:border-[#E9C27A]/40 transition-all duration-500 shadow-xl hover:shadow-[0_24px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Edge-to-Edge Vertical Portrait Image Container */}
              <div className="relative w-full aspect-[4/4.8] sm:aspect-[4/4.6] overflow-hidden bg-[#0A0A0B]">
                {/* Ambient Blurred Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center blur-2xl scale-125 opacity-30 pointer-events-none"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />

                {/* Primary Crisp Portrait Image */}
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className={`relative w-full h-full object-cover ${pkg.objectPosition || 'object-center'} group-hover:scale-106 transition-transform duration-700 ease-out`}
                  loading="lazy"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161619] via-transparent to-black/40 pointer-events-none" />

                {/* Circle with Arrow: Rotates from -45° to 0° on Card Hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#E9C27A] group-hover:text-black group-hover:border-[#E9C27A] shadow-xl z-10 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out" />
                </div>

                {/* Price Range Badge: Floats in at Bottom Center on Hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transform sm:translate-y-2 sm:group-hover:translate-y-0 w-max max-w-[90%]">
                  <div className="bg-black/85 backdrop-blur-md border border-[#E9C27A]/40 px-4 py-1.5 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.8)]">
                    <span className="font-body text-[#E9C27A] text-xs sm:text-[13px] font-semibold tracking-wide">
                      {pkg.priceRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Minimal Card Content Area (Free Consultation Footer Removed) */}
              <div className="p-5 sm:p-5.5 flex flex-col justify-between flex-1 text-center bg-[#161619]">
                <div>
                  <h3 className="font-heading text-2xl sm:text-[24px] font-medium text-white group-hover:text-[#E9C27A] transition-colors duration-300 tracking-tight leading-snug text-center">
                    {pkg.title}
                  </h3>
                  <p className="font-body text-[#D4D4D8]/85 text-[13px] sm:text-[14px] leading-relaxed mt-2 text-justify [text-justify:inter-word] [text-align:justify] px-1 sm:px-2">
                    {pkg.scope}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Price Awareness / Transparency Note ── */}
        <FadeUp delay={0.3} duration={0.6}>
          <p className="text-center text-xs sm:text-sm text-white/50 mt-8 sm:mt-10 max-w-2xl mx-auto px-4 leading-relaxed font-body">
            *Final cost is customized based on actual carpet area, selected material brands (Greenply, Hafele, Blum), finishes (Acrylic, PU, Laminate), and specialized architectural requirements.
          </p>
        </FadeUp>

        {/* ── Two Action Buttons ── */}
        <FadeUp delay={0.4} duration={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() =>
                openModal({
                  title: 'Get Customized Package Estimate',
                  subtitle: 'Share your floor plan or requirements to get an itemized budget quote and free 3D design consultation.',
                })
              }
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E9C27A] hover:bg-[#DFB86A] text-black py-3 sm:py-3.5 px-7 sm:px-8 rounded-full font-semibold font-body text-xs sm:text-sm md:text-base transition-all duration-300 shadow-md shadow-black/20 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Get Customized Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/919916565945?text=Hi%20Venetus%20Interior%2C%20I%20would%20like%20to%20know%20more%20about%20your%20interior%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/20 bg-white/[0.06] hover:bg-white/12 text-white py-3 sm:py-3.5 px-7 sm:px-8 rounded-full font-semibold font-body text-xs sm:text-sm md:text-base transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-white transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

export default ServicePackages
