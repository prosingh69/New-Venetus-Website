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
    question: "Can I customize my kitchen bathroom design?",
    answer: "Absolutely! Every project is 100% personalized to match your specific taste, storage requirements, and lifestyle needs, complete with 3D design previews before execution begins."
  },
  {
    id: 3,
    question: "What materials do you use?",
    answer: "We only use premium, certified, and moisture-resistant materials including BWR/BWP grade marine ply, German hardware (Hettich, Hafele, Blum), and high-grade finishes ensuring lasting elegance."
  },
  {
    id: 4,
    question: "Do you handle permits & project management?",
    answer: "Yes! Our end-to-end turnkey service includes full project management—from layout permissions and site supervision to quality checks and timely handover."
  },
  {
    id: 5,
    question: "Is there a warranty on your work?",
    answer: "Yes! We offer up to a 10-year comprehensive warranty on all woodwork and modular installations, along with dedicated lifetime post-installation service support."
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
    <section className="w-full bg-[#383838] py-12 sm:py-16 md:py-20 border-t border-white/10 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Grid with items-stretch so left images match the exact height of right title + all questions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Stretched vertically to match top of title down to bottom of last question */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start h-full">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none h-[460px] sm:h-[520px] lg:h-full min-h-[460px] lg:min-h-full pr-3 sm:pr-6 lg:pr-8">
              
              {/* Top Main Image (Level with top of Title) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-[86%] h-[56%] rounded-3xl overflow-hidden shadow-lg border border-white/10"
              >
                <img
                  src="/kitchen1.jpeg"
                  alt={`Venetus Interior Modular Kitchen in ${locationName}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

              {/* Bottom Overlapping Image (Level with bottom of last question) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 right-0 w-[78%] h-[54%] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-neutral-800"
              >
                <img
                  src="/design.jpg"
                  alt={`Venetus Interior Living Room Design in ${locationName}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

            </div>
          </div>

          {/* Right Column: Title + FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Strictly 2-Line Animated Headline */}
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-white tracking-tight leading-[1.18]">
                <span className="block">
                  <LettersPullUp
                    text="Frequently Asked Questions"
                    startDelay={0.08}
                    charDelay={0.03}
                    align="responsive-lg"
                  />
                </span>
                <span className="block mt-1 sm:mt-1.5">
                  <LettersPullUp
                    text={`in ${locationName}`}
                    highlightWord={locationName}
                    highlightClass="text-primary italic"
                    startDelay={0.5}
                    charDelay={0.035}
                    align="responsive-lg"
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
                      <span className="font-semibold text-white text-sm sm:text-base pr-4">
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
                          <div className="px-5 sm:px-6 pb-5 pt-0 text-white/80 text-xs sm:text-sm md:text-[15px] leading-relaxed border-t border-white/10 mt-1">
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
