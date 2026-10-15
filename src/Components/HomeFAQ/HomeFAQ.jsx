import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import LettersPullUp from '../Animations/LettersPullUp';

const faqItems = [
  {
    id: 1,
    question: "Do you offer free consultations and estimates?",
    answer: "Yes! We provide free in-home consultations and detailed, transparent estimates so you can plan your project confidently without any obligation."
  },
  {
    id: 2,
    question: "Can I customize my kitchen and bathroom design?",
    answer: "Absolutely! Every project is 100% personalized to match your specific taste, storage requirements, and lifestyle needs, complete with 3D design previews before execution begins."
  },
  {
    id: 3,
    question: "What materials do you use for interiors?",
    answer: "We only use premium, certified, and moisture-resistant materials including BWR/BWP grade marine ply, German hardware (Hettich, Hafele, Blum), and high-grade finishes ensuring lasting elegance."
  },
  {
    id: 4,
    question: "How long does a typical interior project take?",
    answer: "Most 2BHK and 3BHK interior projects are completed and handed over within 40 to 45 working days following design approval, backed by prompt timeline commitments."
  },
  {
    id: 5,
    question: "Do you handle permits & project management?",
    answer: "Yes! Our end-to-end turnkey service includes full project management—from layout permissions and site supervision to quality checks and timely handover."
  },
  {
    id: 6,
    question: "Is there a warranty on your work?",
    answer: "Yes! We offer up to a 10-year comprehensive warranty on all woodwork and modular installations, along with dedicated lifetime post-installation service support."
  },
  {
    id: 7,
    question: "Are there any hidden costs after project confirmation?",
    answer: "Never. We believe in 100% transparent itemized pricing. What you see and approve in your final scope of work is exactly what you pay."
  }
];

const HomeFAQ = ({ locationName = 'Bangalore' }) => {
  // Always keep at least 1 question open on page load and on interaction
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    // Switching keeps the selected question open
    setOpenId(id);
  };

  return (
    <section className="w-full bg-[#18181b] py-14 sm:py-18 md:py-22 border-t border-white/10 overflow-hidden text-white relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Grid with items-stretch so left images match the exact height of right title + all questions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* FAQ Left Stack */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start h-full">
            {/* Mobile & Tablet View: Clean 2-Image Collage (< lg) */}
            <div className="lg:hidden relative w-full max-w-[420px] sm:max-w-[460px] h-[380px] sm:h-[460px]">
              {/* Top Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-[86%] h-[56%] rounded-3xl overflow-hidden shadow-lg border border-white/10 z-10"
              >
                <img
                  src="/kitchen1.jpeg"
                  alt={`Venetus Interior Modular Kitchen in ${locationName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Bottom Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 right-0 w-[78%] h-[54%] rounded-3xl overflow-hidden shadow-2xl z-20"
                style={{
                  boxShadow: '0 0 0 8px #18181b'
                }}
              >
                <img
                  src="/design.jpg"
                  alt={`Venetus Interior Living Room Design in ${locationName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Desktop View: 3-Image Stack with Curved Cutout (lg:) */}
            <div className="hidden lg:block relative w-full h-full min-h-[520px]">
              {/* Image 1: Top */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-[82%] h-[42%] rounded-[28px] overflow-hidden shadow-lg z-10"
              >
                <img
                  src="/kitchen1.jpeg"
                  alt={`Venetus Interior Modular Kitchen in ${locationName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Image 2: Middle Cutout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="absolute top-[32%] right-0 w-[58%] h-[34%] rounded-[28px] overflow-hidden shadow-2xl z-20"
                style={{ 
                  boxShadow: '0 0 0 12px #18181b' 
                }}
              >
                <img
                  src="/bedroom2.jpeg"
                  alt={`Venetus Interior Luxury Bedroom in ${locationName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Image 3: Bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute bottom-0 left-0 w-[78%] h-[40%] rounded-[28px] overflow-hidden shadow-2xl z-10"
              >
                <img
                  src="/design.jpg"
                  alt={`Venetus Interior Living Room Design in ${locationName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Title + FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Strictly 2-Line Animated Headline */}
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.65rem] xl:text-[3rem] 2xl:text-[3.25rem] font-medium text-white tracking-[-0.025em] leading-[1.12]">
                <span className="block whitespace-nowrap">
                  <LettersPullUp
                    text="Frequently Asked Questions"
                    startDelay={0.08}
                    charDelay={0.022}
                    align="responsive-lg"
                    nowrap={true}
                  />
                </span>
                <span className="block mt-1.5 sm:mt-2 whitespace-nowrap">
                  <LettersPullUp
                    text={`in ${locationName}`}
                    highlightWord={locationName}
                    highlightClass="text-[#E9C27A] italic font-heading font-medium"
                    startDelay={0.5}
                    charDelay={0.035}
                    align="responsive-lg"
                    nowrap={true}
                  />
                </span>
              </h2>
            </div>

            {/* Accordion Cards */}
            <div className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col justify-between">
              {faqItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-[#2c2c2c] rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:border-primary/40 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-4.5 cursor-pointer select-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-medium text-white text-base sm:text-[17px] pr-4 tracking-tight">
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary text-neutral-950 font-bold shadow-sm'
                            : 'bg-neutral-800 text-white/70 hover:bg-neutral-700 hover:text-white'
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-0 font-body text-body-normal text-[#CCCCCC] leading-[1.6] border-t border-white/10 mt-1 text-pretty">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
