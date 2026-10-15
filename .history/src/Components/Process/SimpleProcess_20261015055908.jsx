import React, { useState, useEffect, useRef } from \'react\';
import { motion, AnimatePresence } from \'framer-motion\';
import LettersPullUp from \'../Animations/LettersPullUp\';
import FadeUp from \'../Animations/FadeUp\';
import { useConsultationModal } from \'../../context/ConsultationModalContext\';

const stepsData = [
  {
    id: 1,
    title: "Understanding requirements",
    description: "We deeply understand your lifestyle, preferences & dreams to create a personalized home that truly feels like you.",
    image: "/gallery-2.jpg"
  },
  {
    id: 2,
    title: "3D Space Planning & Design",
    description: "Laser-accurate measurements & photorealistic 3D renders so you can preview every detail before we build.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg"
  },
  {
    id: 3,
    title: "Material Selection & Clear Quote",
    description: "Hand-pick authentic BWR plywood, acrylics & German fittings with 100% itemized pricing. Zero hidden fees.",
    image: "/premium.jpg"
  },
  {
    id: 4,
    title: "Precision Execution & Handover",
    description: "Factory fabrication, clean on-site assembly, 100+ point quality check & prompt handover with up to 10-year warranty.",
    image: "/bedroom4.jpeg"
  }
];

const SimpleProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const { openModal } = useConsultationModal();
  const currentStep = stepsData.find((s) => s.id === activeStep);
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
          <FadeUp delay={0.1}>
            <p className="font-body text-[11px] tracking-[0.2em] text-[#E9C27A] uppercase mb-4">
              How We Work — 4 Step Story
            </p>
          </FadeUp>
          <h2 className="font-heading text-[28px] sm:text-[36px] leading-[1.15] tracking-[-0.02em] text-white mb-4 text-balance">
            <LettersPullUp
              text="Our Interior Design Process in Bangalore"
              highlightWord="Bangalore"
              highlightClass="text-[#E9C27A] italic font-normal"
              startDelay={0.15}
              charDelay={0.03}
              align="center"
            />
          </h2>
          <FadeUp delay={0.4}>
            <p className="font-body text-[15px] leading-[1.7] text-white/60 max-w-[600px] mx-auto text-pretty">
              Our structured process is designed to make your home interior journey seamless, transparent, and stress-free.
            </p>
          </FadeUp>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">

          {/* LEFT */}
          <div className="order-2 lg:order-1 pt-2">
            
            {/* Stepper with Progress Line */}
            <div className="relative flex items-center justify-between max-w-[440px] mb-8">
              <div className="absolute left-[22px] right-[22px] top-1/2 -translate-y-1/2 h-[1px] bg-white/10 z-0" />
              <motion.div 
                className="absolute left-[22px] top-1/2 -translate-y-1/2 h-[1px] bg-[#E9C27A] z-0"
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep - 1) / (stepsData.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ maxWidth: \'calc(100% - 44px)\' }}
              />

              {stepsData.map((step) => {
                const isActive = activeStep === step.id;
                const isCompleted = activeStep > step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 border
                      ${isActive 
                        ? \'bg-[#E9C27A] text-black border-[#E9C27A] shadow-[0_0_20px_rgba(233,194,122,0.4)] scale-105\' 
                        : isCompleted
                        ? \'bg-[#E9C27A]/20 text-[#E9C27A] border-[#E9C27A]/40\'
                        : \'bg-[#1A1A1E] text-white/70 border-white/15 hover:border-[#E9C27A]/40 hover:text-white\'}`}
                  >
                    {isCompleted ? \'✓\' : step.id}
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
                  <p className="font-body text-[15px] leading-[1.6] text-white/60 max-w-[480px]">
                    {currentStep.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar for auto play */}
            <div className="w-full max-w-[480px] h-[1px] bg-white/10 mb-8 overflow-hidden">
              <motion.div
                key={activeStep + \'-\' + isPaused}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{ duration: isPaused ? 0 : 4.5, ease: "linear" }}
                className="h-full bg-[#E9C27A]"
              />
            </div>

            <button
              onClick={() => openModal({ title: `Step ${currentStep.id} · ${currentStep.title}`, subtitle: currentStep.description })}
              className="group inline-flex items-center gap-3 bg-[#E9C27A] hover:bg-[#DFB86A] text-black font-body text-[14px] font-semibold px-7 py-[14px] rounded-full transition-all duration-200 active:scale-[0.98]"
            >
              Book A Free Consultation
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          {/* RIGHT - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[1.25/1] sm:aspect-[4/3] lg:aspect-[1.15/1] rounded-[20px] overflow-hidden bg-[#1A1A1E] border border-white/10 p-1.5">
              <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStep.id}
                    src={currentStep.image}
                    alt={currentStep.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                {/* Top gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Number watermark */}
                <div className="absolute bottom-3 right-4 font-heading text-[42px] font-light text-white/10 leading-none select-none">
                  0{currentStep.id}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;