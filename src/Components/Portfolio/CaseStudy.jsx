import React from 'react'
import PortfolioCard from './PortfolioCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

import LettersPullUp from '../Animations/LettersPullUp'

const HorizontalPortfolioData = [
  { id: 1, Title: "Modern Kitchen Renovation", Location: "Indiranagar, Bangalore",  Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786154536/wmremove-transformed_hrezhf.png",  After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg",   Challenge: "Raw, unfinished kitchen space lacking proper storage, aesthetics, and structural flow.", Solution: "Installed sleek, high-gloss modular cabinets with a contrasting color palette, seamless countertops, and built-in chimney space.", Result: "A highly functional, elegant cooking area with optimized storage and a premium contemporary look.", imagePosition: "object-[center_40%]" },
  { id: 2, Title: "Elegant Bedroom Makeover",   Location: "Whitefield, Bangalore",   Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786159886/WhatsApp_Image_2026-08-08_at_9.00.10_AM_kdshal.jpg", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg", Challenge: "Bare, uninspiring walls that made the room feel cold and lacked a distinct character.", Solution: "Added classic wall molding/wainscoting, ambient wall-mounted warm lighting, and a custom upholstered headboard.", Result: "Transformed into a sophisticated, cozy sanctuary with a luxurious, hotel-like atmosphere.", imagePosition: "object-[center_20%]" },
  { id: 3, Title: "Functional Study Room",      Location: "Indiranagar, Bangalore",  Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786155339/wmremove-transformed_2_vtpsfv.png", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg", Challenge: "An awkward, empty nook lacking a proper work surface and organizational space.", Solution: "Custom-built a sturdy desk with integrated drawers, under-cabinet profile lighting, and overhead display shelving.", Result: "A focused, well-lit workspace that perfectly maximizes the small footprint without feeling cluttered.", imagePosition: "object-[30%_60%]" },
]

const CaseStudy = () => {
  return (
    <section className='w-full bg-[#121214] py-16 sm:py-20 md:py-24 flex flex-col justify-center items-center text-white border-b border-white/10 relative overflow-hidden'>
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className='w-full max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex flex-col items-center relative z-10'>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 px-4">
          <h2 className='font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-4 text-center text-balance'>
            <LettersPullUp
              text="Featured Case Studies"
              highlightWord="Studies"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.1}
              charDelay={0.035}
              align="center"
            />
          </h2>
          <FadeUp delay={0.35} duration={0.6}>
            <p className='font-body text-[15.5px] md:text-[16.5px] text-[#D4D4D8] leading-[1.7] max-w-2xl mx-auto px-2 text-pretty'>
              Detailed look at our most impactful turnkey transformations across Bangalore's premier residential communities.
            </p>
          </FadeUp>
        </div>
      <div className="w-full space-y-6 sm:space-y-8 mt-2">
        {HorizontalPortfolioData.map((Data, i) => (
          <motion.div
            key={Data.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <PortfolioCard
              layout="horizontal"
              Title={Data.Title}
              Location={Data.Location}
              BeforeImg={Data.Before}
              AfterImg={Data.After}
              Challenge={Data.Challenge}
              Solution={Data.Solution}
              Result={Data.Result}
              imagePosition={Data.imagePosition}
            />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default CaseStudy
