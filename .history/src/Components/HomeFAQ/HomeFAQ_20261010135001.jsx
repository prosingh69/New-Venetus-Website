import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronRight } from 'lucide-react';

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

const HomeFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F0F5F8] py-14 sm:py-18 md:py-22">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src="/faq-kitchen-collage-hires.png"
                  alt="Venetus Interior Kitchen & Living Design"
                  className="w-full h-auto object-contain drop-shadow-sm select-none"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-200/80 text-gray-700 tracking-wide mb-3">
              <span>FAQ</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-sans font-bold text-gray-900 tracking-tight leading-[1.15] mb-6 sm:mb-8 text-balance">
              Have Questions? We’ve <br className="hidden sm:inline" />
              Got Answers
            </h2>

            {/* Accordion List */}
            <div className="space-y-3 sm:space-y-3.5">
              {faqItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-4.5 cursor-pointer select-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800'
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
                          <div className="px-5 sm:px-6 pb-5 pt-0 text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed border-t border-gray-50/60 mt-1">
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

