import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';
import { useConsultationModal } from '../../context/ConsultationModalContext';
import { ArrowRight } from 'lucide-react';

const stepsData = [
  {
    id: 1,
    title: "Understanding requirements",
    description: "We deeply understand your lifestyle, preferences & dreams to create a personalized home that truly feels like you.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/v1792122429/gpt-image-2.5-flare_Photorealistic_DSLR_photo_16_9_a_young_professional_Indian_interior_designer_wea-0_cehbgr.jpg",
    imagePosition: "85% center"
  },
  {
    id: 2,
    title: "3D Space Planning & Design",
    description: "Laser-accurate measurements & photorealistic 3D renders so you can preview every detail before we build.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/v1792122430/gpt-image-2.5-flare_Photorealistic_DSLR_photo_16_9_same_young_Indian_interior_designer_in_Black_T-Sh-0_luirzm.jpg",
    imagePosition: "85% center"
  },
  {
    id: 3,
    title: "Material Selection & Clear Quote",
    description: "Hand-pick authentic BWR plywood, acrylics & German fittings with 100% itemized pricing. Zero hidden fees.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/v1792122431/gpt-image-2.5-flare_Photorealistic_DSLR_photo_16_9_same_Indian_designer_in_Black_T-Shirt_with_Gold_V-0_yliqk3.jpg",
    imagePosition: "85% center"
  },
  {
    id: 4,
    title: "Precision Execution & Handover",
    description: "Factory fabrication, clean on-site assembly, 100+ point quality check & prompt handover with up to 10-year warranty.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/v1792122430/gpt-image-2.5-flare_Photorealistic_DSLR_photo_16_9_same_Indian_designer_in_Black_T-Shirt_with_Gold_V-0_1_exa2lt.jpg",
    imagePosition: "85% center"
  }
];

const SimpleProcess = ({ locationName = 'Bangalore' }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const { openModal } = useConsultationModal();
  const currentStep = stepsData.find((s) => s.id === activeStep) || stepsData[0];
  const timerRef = useRef(null);

  // Auto play with auto-resume after manual click
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev % stepsData.length) + 1);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [isPaused, activeStep]);

  const handleStepClick = (id) => {
    setActiveStep(id);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000); // 6 sec baad wapas auto start
  };

  return (
    <section 
      className="w-full bg-[#0A0A0B] pt-16 sm:pt-20 pb-16 sm:pb-20 border-y border-white/[0.06] text-white relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glow - subtle, AI jaisa over-glow nahi */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E9C27A]/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1220px] mx-auto px-5 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-h2 font-medium tracking-[-0.02em] leading-[1.15] text-white mb-4 text-balance">
            <LettersPullUp
              text={`Our Interior Design Process in ${locationName}`}
              highlightWord={locationName}
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.15}
              charDelay={0.03}
              align="center"
            />
          </h2>
          <FadeUp delay={0.4}>
            <p className="font-body text-[15.5px] md:text-[16.5px] font-[400] leading-[1.7] text-[#D4D4D8] md:text-[#D1D1D1] max-w-[680px] mx-auto text-pretty mt-4">
              Our structured process is designed to make your home interior journey seamless, transparent, and stress-free.
            </p>
          </FadeUp>
        </div>

        {/* Content Grid - SPACE FIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT - gap khatam */}
          <div className="lg:col-span-6 lg:pr-2 order-2 lg:order-1 pt-2">
            
            {/* Stepper with Progress Line */}
            <div className="relative flex items-center justify-between max-w-[440px] mb-8">
              <div className="absolute left-[22px] right-[22px] top-1/2 -translate-y-1/2 h-[1px] bg-white/10 z-0" />
              <motion.div 
                className="absolute left-[22px] top-1/2 -translate-y-1/2 h-[1px] bg-[#E9C27A] z-0"
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep - 1) / (stepsData.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ maxWidth: 'calc(100% - 44px)' }}
              />

              {stepsData.map((step) => {
                const isActive = activeStep === step.id;
                const isCompleted = activeStep > step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 border cursor-pointer select-none
                      ${isActive 
                        ? 'bg-[#E9C27A] text-black border-[#E9C27A] shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 scale-105' 
                        : isCompleted
                        ? 'bg-[#E9C27A]/20 text-[#E9C27A] border-[#E9C27A]/40'
                        : 'bg-[#1A1A1E] text-white/70 border-white/15 hover:border-[#E9C27A]/40 hover:text-white'}`}
                  >
                    {isCompleted ? '✓' : step.id}
                  </button>
                );
              })}
            </div>

            {/* Step Label */}
            <p className="font-body text-[11px] tracking-[0.15em] text-[#E9C27A] uppercase mb-3">
              Step 0{currentStep.id} / 0{stepsData.length}
            </p>

            {/* Text - Fixed height so layout jump nahi hoga */}
            <div className="relative h-[135px] sm:h-[125px] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <h3 className="font-heading text-[24px] sm:text-[28px] font-medium leading-tight text-white mb-3">
                    {currentStep.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.6] text-white/75 max-w-[480px]">
                    {currentStep.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar for auto play */}
            <div className="w-full max-w-[480px] h-[1px] bg-white/10 mb-8 overflow-hidden">
              <motion.div
                key={activeStep + '-' + isPaused}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{ duration: isPaused ? 0 : 4.5, ease: "linear" }}
                className="h-full bg-[#E9C27A]"
              />
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => openModal({ title: `Step ${currentStep.id} · ${currentStep.title}`, subtitle: currentStep.description })}
                className="group inline-flex items-center justify-center gap-3 bg-[#E9C27A] hover:bg-[#DFB86A] text-black font-body text-[14px] font-semibold px-7 py-[14px] rounded-full transition-all duration-200 active:scale-[0.98] shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 cursor-pointer"
              >
                <span className="leading-none">Book A Free Consultation</span>
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT - BORDER HATA DIYA */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full aspect-[1.25/1] sm:aspect-[16/11] rounded-[24px] overflow-hidden bg-[#1A1A1E] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStep.id}
                  src={currentStep.image}
                  alt={currentStep.title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: currentStep.imagePosition || '85% center' }}
                />
              </AnimatePresence>
              {/* bottom se halka gradient depth ke liye, border nahi */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              
              {/* no 04 watermark, clean pill badge */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white/90 text-xs px-3 py-1.5 rounded-full border border-white/10 font-body">
                0{currentStep.id} — {currentStep.title}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;
