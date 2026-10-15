import React from 'react'
import PortfolioCard from './PortfolioCard'
import { motion } from 'framer-motion'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'

const PortfolioData = [
  { id: 1, Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786154536/wmremove-transformed_hrezhf.png",   After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg",  Title: "Modern Kitchen",  Location: "Indiranagar", imagePosition: "object-[center_40%]" },
  { id: 2, Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786159886/WhatsApp_Image_2026-08-08_at_9.00.10_AM_kdshal.jpg", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg", Title: "Luxury Bedroom",  Location: "Whitefield",  imagePosition: "object-[center_20%]" },
  { id: 3, Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786155339/wmremove-transformed_2_vtpsfv.png", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg",  Title: "Modern Kitchen",  Location: "Indiranagar", imagePosition: "object-[30%_60%]" },
  { id: 4, Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786848196/image22_ygmc9c.png",                After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786848197/image21_crpxr1.png",                               Title: "Modern Bathroom", Location: "Indiranagar", imagePosition: "object-center" },
  { id: 5, Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786160796/WhatsApp_Image_2026-08-08_at_9.15.27_AM_ntnmvq.jpg", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786160796/WhatsApp_Image_2026-08-08_at_9.15.27_AM_1_fx3xel.jpg", Title: "Luxury Bedroom",  Location: "Whitefield",  imagePosition: "object-[30%_30%]" },
  { id: 6, Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786157063/wmremove-transformed_5_xlwufw.png", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786157116/WhatsApp_Image_2026-08-07_at_6.44.25_PM_1_unfxvp.jpg", Title: "Luxury Bedroom",  Location: "Whitefield",  imagePosition: "object-center" },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const PortfolioDetail = () => {
  return (
    <section className='w-full bg-[#0A0A0B] py-16 sm:py-20 md:py-24 border-b border-white/10 text-white relative overflow-hidden'>
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 relative z-10'>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 px-4">
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-4 text-center text-balance">
            <LettersPullUp
              text="Interactive Transformation Gallery"
              highlightWord="Transformation"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.1}
              charDelay={0.035}
              align="center"
            />
          </h2>
          <FadeUp delay={0.35} duration={0.6}>
            <p className="font-body text-[15.5px] md:text-[16.5px] text-[#D4D4D8] leading-[1.7] max-w-2xl mx-auto px-2 text-pretty">
              Slide across each project to witness how our design engineering transforms bare structures into warm, bespoke luxury realities.
            </p>
          </FadeUp>
        </div>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10'
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PortfolioData.map((Data) => (
            <motion.div key={Data.id} variants={cardVariants}>
              <PortfolioCard
                BeforeImg={Data.Before}
                AfterImg={Data.After}
                Title={Data.Title}
                Location={Data.Location}
                imagePosition={Data.imagePosition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioDetail;
