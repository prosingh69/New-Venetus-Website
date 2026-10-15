import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';
import { useConsultationModal } from '../../context/ConsultationModalContext';

const stepsData = [
  {
    id: 1,
    title: "Understanding requirements",
    description: "We deeply understand our client's preferences, desires, & dreams to create their personalized dream home.",
    image: "/gallery-2.jpg"
  },
  {
    id: 2,
    title: "3D Space Planning & Design",
    description: "Laser-accurate measurements & customized photorealistic 3D room renders so you can preview every detail before execution.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg"
  },
  {
    id: 3,
    title: "Material Selection & Clear Quote",
    description: "Hand-pick authentic BWR plywood, acrylics, and German fittings with 100% itemized pricing and zero hidden fees.",
    image: "/premium.jpg"
  },
  {
    id: 4,
    title: "Precision Execution & Handover",
    description: "Factory fabrication, clean on-site assembly, 100+ point quality inspection, and prompt handover with up to 10-year warranty.",
    image: "/bedroom4.jpeg"
  }
];

const SimpleProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const currentStep = stepsData.find((s) => s.id === activeStep) || stepsData[0];
  const { openModal } = useConsultationModal();

  // Story-wise automatic progression every 5.5s (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % stepsData.length) + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="w-full bg-[#383838] pt-12 sm:pt-14 md:pt-16 pb-12 sm:pb-16 md:pt-16 border-t border-b border-white/10 overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Section Header (Original Title & Description) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-2 sm:px-4">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-white tracking-tight leading-[1.18] mb-3 sm:mb-4 text-center">
            <LettersPullUp
              text="Our Interior Design Process in Bangalore"
              highlightWord="Bangalore"
              highlightClass="text-primary italic"
              startDelay={0.1}
              charDelay={0.032}
              align="center"
            />
          </h2>

          <FadeUp delay={0.35} duration={0.6}>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Our structured process is designed to make your home interior journey seamless, transparent, and stress-free. Explore each stage of how we craft your Bangalore home:
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Story Process Matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column — Stepper + Fixed Height Story Content + CTA */}
          <div className="w-full flex flex-col justify-center order-2 lg:order-1">

            {/* Stepper (Fixed-size circles, fixed horizontal line — zero jumping) */}
            <div className="relative flex items-center justify-between w-full max-w-[340px] sm:max-w-[360px] mb-6 sm:mb-7">
              {/* Fixed continuous connecting line */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-px bg-primary/45 z-0 pointer-events-none" />

              {/* 4 Step Circles — identical fixed dimensions */}
              {stepsData.map((step) => {
                const isActive = activeStep === step.id;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => {
                      setActiveStep(step.id);
                      setIsPaused(true);
                    }}
                    aria-label={`Step ${step.id}: ${step.title}`}
                    className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm sm:text-base transition-colors duration-200 cursor-pointer focus:outline-none select-none ${
                      isActive
                        ? 'bg-primary text-neutral-950 shadow-md shadow-primary/30 border-0'
                        : 'bg-neutral-800 border border-primary/50 text-white hover:border-primary hover:text-primary'
                    }`}
                  >
                    <span>{step.id}</span>
                  </button>
                );
              })}
            </div>

            {/* Fixed-Height Text Container (Guarantees zero layout shift or jumping on change) */}
            <div className="relative w-full h-[110px] sm:h-[115px] mb-5 sm:mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex flex-col justify-start"
                >
                  <h3 className="font-sans text-xl sm:text-2xl md:text-[25px] font-bold text-white tracking-tight mb-2">
                    {currentStep.title}
                  </h3>
                  <p className="font-sans text-white/80 text-sm sm:text-[15px] leading-relaxed max-w-md">
                    {currentStep.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Button — Position stays 100% rock solid */}
            <div>
              <button
                type="button"
                onClick={() => openModal({
                  title: `Step ${currentStep.id} · ${currentStep.title}`,
                  subtitle: currentStep.description
                })}
                className="bg-primary hover:bg-primary-hover text-neutral-950 font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-md text-sm sm:text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45 transition-all duration-200 active:scale-95 inline-flex items-center justify-center cursor-pointer uppercase"
              >
                <span>Book A Free Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Column — Compact High-Res Image (Proportional to Reference Image) */}
          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStep.id}
                  src={currentStep.image}
                  alt={currentStep.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SimpleProcess;
