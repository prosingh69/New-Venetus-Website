import React from 'react'
import PortfolioCard from './PortfolioCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const HorizontalPortfolioData = [
  { id: 1, Title: "Modern Kitchen Renovation", Location: "Indiranagar, Bangalore",  Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786154536/wmremove-transformed_hrezhf.png",  After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg",   Challenge: "Raw, unfinished kitchen space lacking proper storage, aesthetics, and structural flow.", Solution: "Installed sleek, high-gloss modular cabinets with a contrasting color palette, seamless countertops, and built-in chimney space.", Result: "A highly functional, elegant cooking area with optimized storage and a premium contemporary look.", imagePosition: "object-[center_40%]" },
  { id: 2, Title: "Elegant Bedroom Makeover",   Location: "Whitefield, Bangalore",   Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786159886/WhatsApp_Image_2026-08-08_at_9.00.10_AM_kdshal.jpg", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg", Challenge: "Bare, uninspiring walls that made the room feel cold and lacked a distinct character.", Solution: "Added classic wall molding/wainscoting, ambient wall-mounted warm lighting, and a custom upholstered headboard.", Result: "Transformed into a sophisticated, cozy sanctuary with a luxurious, hotel-like atmosphere.", imagePosition: "object-[center_20%]" },
  { id: 3, Title: "Functional Study Room",      Location: "Indiranagar, Bangalore",  Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786155339/wmremove-transformed_2_vtpsfv.png", After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg", Challenge: "An awkward, empty nook lacking a proper work surface and organizational space.", Solution: "Custom-built a sturdy desk with integrated drawers, under-cabinet profile lighting, and overhead display shelving.", Result: "A focused, well-lit workspace that perfectly maximizes the small footprint without feeling cluttered.", imagePosition: "object-[30%_60%]" },
]

const CaseStudy = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center'>
      <FadeUp delay={0.05} duration={0.65}>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center text-balance'>
          Featured Case Studies
        </h2>
      </FadeUp>
      <FadeUp delay={0.18} duration={0.6}>
        <p className='text-sm sm:text-base md:text-lg text-[#6E4C40] mb-6 sm:mb-10 text-center text-balance px-2'>
          Detailed look at our most impactful projects
        </p>
      </FadeUp>
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
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
    </section>
  )
}

export default CaseStudy
