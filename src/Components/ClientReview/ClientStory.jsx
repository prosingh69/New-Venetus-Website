import React from 'react'
import ClientReviewCard from './ClientReviewCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'
import LettersPullUp from '../Animations/LettersPullUp'

const reviewData = [
  {
    id: 1,
    Para: 'Absolutely transformed our kitchen! The team was professional, transparent about costs, and delivered exactly on time. Highly recommended!',
    Name: 'Priya Desai',
    Location: 'Indiranagar, Bangalore',
    Type: 'Kitchen Renovation',
  },
  {
    id: 2,
    Para: 'Best decision we made for our home. The designers understood our vision perfectly and the quality of materials is outstanding.',
    Name: 'Rajesh Nair',
    Location: 'Whitefield, Bangalore',
    Type: 'Full Home Design',
  },
  {
    id: 3,
    Para: 'The 10-year warranty gives us complete peace of mind. Everything is perfect and they have been responsive to any follow-up needs.',
    Name: 'Anjali Sharma',
    Location: 'Koramangala, Bangalore',
    Type: 'Bedroom & Living Room',
  },
  {
    id: 4,
    Para: 'Transparent pricing, no hidden costs, and exceptional execution. This is how interior design should be done!',
    Name: 'Vikram Kumar',
    Location: 'Indiranagar, Bangalore',
    Type: 'Kitchen Design',
  },
  {
    id: 5,
    Para: 'The team was incredibly professional. They explained every step and kept us updated throughout the 45-day turnkey project.',
    Name: 'Neha Gupta',
    Location: 'Whitefield, Bangalore',
    Type: 'Full Home Transformation',
  },
  {
    id: 6,
    Para: 'Outstanding attention to detail. Our home looks like a luxury showroom now. Worth every single penny!',
    Name: 'Arjun Verma',
    Location: 'Koramangala, Bangalore',
    Type: 'Living Room Design',
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const ClientStory = () => {
  return (
    <section className="w-full bg-[#0A0A0B] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 border-b border-white/[0.08] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-3 text-center text-balance">
            <LettersPullUp
              text="Verified Client Testimonials"
              highlightWord="Testimonials"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.1}
              charDelay={0.035}
              align="center"
            />
          </h2>
          <FadeUp delay={0.35} duration={0.6}>
            <p className="font-body font-sans lining-nums text-[#D4D4D8] text-[15px] sm:text-[16px] leading-[1.7] max-w-xl mx-auto px-2 text-pretty">
              Read how our turnkey design team has transformed homes and elevated daily living for over 500+ satisfied Bangalore families.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {reviewData.map((data) => (
            <motion.div key={data.id} variants={cardVariants} className="h-full">
              <ClientReviewCard
                Para={data.Para}
                Name={data.Name}
                Location={data.Location}
                Type={data.Type}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientStory
