import React from 'react'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'
import LettersPullUp from '../Animations/LettersPullUp'

const FAQData = [
  {
    id: 1,
    Question: 'How long does a typical project take?',
    Answer: 'Kitchen or bedroom projects typically take 4-8 weeks. Full home designs may take 8-12 weeks depending on scope and customization.',
  },
  {
    id: 2,
    Question: 'Do you provide a warranty?',
    Answer: 'Yes! We provide a comprehensive 10-year warranty on all modular woodwork and German hardware fittings.',
  },
  {
    id: 3,
    Question: 'What is your consultation fee?',
    Answer: 'Initial consultation is completely free. We discuss your vision, space requirements, and provide a transparent itemized quotation.',
  },
  {
    id: 4,
    Question: 'Do you work within a specific budget?',
    Answer: 'Absolutely. We offer tailored packages starting from ₹3.2 Lakhs for 1 BHK to luxury duplex transformations with zero hidden fees.',
  },
  {
    id: 5,
    Question: 'Are you available for post-handover support?',
    Answer: 'Yes. Our 10-year warranty includes dedicated post-handover support for any hardware adjustments or routine maintenance.',
  },
  {
    id: 6,
    Question: 'How do I get started with Venetus?',
    Answer: 'Connect with us via WhatsApp, phone, or by submitting the quote form above. We will arrange a free site consultation at your convenience.',
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const FAQ = () => {
  return (
    <section className="w-full bg-[#0A0A0B] py-16 sm:py-20 md:py-24 border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-3 text-center text-balance">
            <LettersPullUp
              text="Frequently Asked Questions"
              highlightWord="Questions"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.1}
              charDelay={0.035}
              align="center"
            />
          </h2>
          <FadeUp delay={0.35} duration={0.6}>
            <p className="font-body text-[15px] sm:text-[16px] text-[#D4D4D8] leading-[1.7] max-w-xl mx-auto px-2 text-pretty">
              Everything you need to know about our design process, pricing transparency, and warranty assurances.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {FAQData.map((data) => (
            <motion.div
              key={data.id}
              variants={cardVariants}
              className="rounded-[22px] bg-[#151518] border border-white/[0.08] hover:border-[#E9C27A]/35 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all p-6 sm:p-7 flex flex-col justify-start w-full group"
            >
              <h3 className="font-heading font-medium text-xl text-white mb-2.5 leading-snug group-hover:text-[#E9C27A] transition-colors duration-200">
                {data.Question}
              </h3>
              {/* font-body font-sans lining-nums ensures digits like 4-8, 8-12, 10, ₹3.2 sit on the exact same baseline as words */}
              <p className="font-body font-sans lining-nums text-[#D4D4D8] text-[14.5px] leading-relaxed">
                {data.Answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
