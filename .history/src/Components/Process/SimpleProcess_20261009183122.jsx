import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Compass, Layers, Hammer, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';

const stepsData = [
  {
    id: 1,
    stepNumber: "01",
    icon: MessageSquare,
    title: "In-Home Consultation",
    description: "We start with a free consultation to understand your needs, preferences, space, and budget."
  },
  {
    id: 2,
    stepNumber: "02",
    icon: Compass,
    title: "Measure & 3D Design",
    description: "We take precise measurements and create customized 3D design plans tailored to your lifestyle."
  },
  {
    id: 3,
    stepNumber: "03",
    icon: Layers,
    title: "Planning & Material Selection",
    description: "We finalize the design, timeline, & materials, ensuring everything aligns with your expectations."
  },
  {
    id: 4,
    stepNumber: "04",
    icon: Hammer,
    title: "Professional Installation",
    description: "Our skilled craftsmen bring the design to life with precision, care, and attention to detail."
  },
  {
    id: 5,
    stepNumber: "05",
    icon: CheckCircle2,
    title: "Final Walkthrough & Support",
    description: "We review every detail with you to ensure complete satisfaction even after completion."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const SimpleProcess = () => {
  // Step 2 is active by default as shown in reference design
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="w-full bg-surface-soft py-14 sm:py-20 md:py-24 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column — Title & Description */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-primary/25 text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm"
            >
              <span>How We Work</span>
              <ChevronRight className="w-3.5 h-3.5 text-primary/70" />
            </motion.div>

            {/* Main Headline with Reveal Animation */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-bold text-gray-900 tracking-tight leading-[1.15] mb-4 sm:mb-6">
              <LettersPullUp
                text="Our Simple Remodeling Process"
                highlightWord="Process"
                highlightClass="text-primary italic"
                startDelay={0.1}
                charDelay={0.035}
                align="responsive-lg"
              />
            </h2>

            {/* Description Paragraph */}
            <FadeUp delay={0.4} duration={0.6}>
              <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8 text-center lg:text-left mx-auto lg:mx-0">
                Our process is designed to make your remodeling journey simple, smooth, and stress-free. From the initial consultation and design planning to material selection and final installation.
              </p>
            </FadeUp>

            {/* Call to Action Link */}
            <FadeUp delay={0.6} duration={0.6}>
              <div className="flex justify-center lg:justify-start">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 text-primary font-semibold text-sm sm:text-base hover:text-primary-hover transition-colors"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
              </div>
            </FadeUp>
          </div>

          {/* Right Column — 5 Interactive Process Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 w-full"
          >
            {stepsData.map((step) => {
              const IconComponent = step.icon;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer border flex items-center gap-4 sm:gap-5 ${
                    isActive
                      ? 'bg-primary text-white border-primary shadow-xl shadow-primary/25 scale-[1.01] sm:scale-[1.02]'
                      : 'bg-white text-gray-900 border-gray-100 hover:border-primary/40 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md'
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                        : 'bg-surface-soft text-primary border border-gray-100 group-hover:bg-brand-light'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-bold text-sm sm:text-base md:text-[17px] tracking-tight ${
                          isActive ? 'text-white' : 'text-gray-900 group-hover:text-primary transition-colors'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                    </div>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mt-1 text-pretty ${
                        isActive ? 'text-white/90' : 'text-secondary'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;

