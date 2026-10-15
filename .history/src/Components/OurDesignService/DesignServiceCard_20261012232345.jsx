import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useConsultationModal } from '../../context/ConsultationModalContext';

const defaultCardVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 240, damping: 20 },
  },
};

const DesignServiceCard = ({ title, description, image, index = 0, motionVariants }) => {
  const { openModal } = useConsultationModal();
  const imageRef = useRef(null);
  // Fast trigger as soon as the image enters viewport
  const isInView = useInView(imageRef, { margin: "-8% 0px -8% 0px", once: false });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return (
    <motion.div
      variants={motionVariants || defaultCardVariants}
      className="group flex flex-col h-full"
    >
      {/* Image Container with Smooth Zoom on Hover */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => openModal({
          title: `${title} Consultation`,
          subtitle: `Discuss customized ${title.toLowerCase()} layouts, material finishes & quotes with our design experts.`
        })}
        ref={imageRef}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[16/10] mb-5 bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl block cursor-pointer"
        aria-label={`Consult about ${title}`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Soft gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent transition-opacity duration-200 ${
          isMobile ? (isInView ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'
        }`} />
        
        {/* Floating Quick Action Arrow on Image — Fast Snappy Pop-up on mobile */}
        <motion.div
          initial={isMobile ? { opacity: 0, scale: 0, y: 8 } : false}
          animate={
            isMobile
              ? (isInView
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0, y: 8 })
              : undefined
          }
          transition={
            isMobile
              ? (isInView
                  ? { type: "spring", stiffness: 550, damping: 22, mass: 0.5, delay: 0.04 }
                  : { duration: 0.15, ease: "easeIn", delay: 0 })
              : undefined
          }
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-gray-900 shadow-xl z-10 group/btn transition-all duration-300 cursor-pointer ${
            isMobile
              ? ''
              : 'opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 hover:!scale-115 hover:!bg-primary'
          }`}
        >
          <motion.div
            animate={
              isMobile
                ? (isInView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.5, rotate: -45 })
                : undefined
            }
            transition={
              isMobile
                ? (isInView
                    ? { type: "spring", stiffness: 600, damping: 24, delay: 0.06 }
                    : { duration: 0.1 })
                : undefined
            }
          >
            <ArrowUpRight className={`w-5 h-5 transform transition-all duration-300 ease-out group-hover/btn:rotate-45 ${
              isMobile ? 'text-primary' : 'text-primary group-hover/btn:text-white'
            }`} />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-1">
        <h3 className="font-sans text-lg sm:text-[19px] md:text-[17px] lg:text-[18px] xl:text-[21px] font-bold text-white mb-2.5 group-hover:text-primary transition-colors duration-300 tracking-tight text-center md:whitespace-nowrap">
          <button
            type="button"
            onClick={() => openModal({
              title: `${title} Consultation`,
              subtitle: `Discuss customized ${title.toLowerCase()} layouts, material finishes & quotes with our design experts.`
            })}
            className="hover:text-primary transition-colors text-inherit font-inherit cursor-pointer"
          >
            {title}
          </button>
        </h3>
        <p className="font-sans text-sm sm:text-[15px] text-white/80 leading-relaxed font-normal flex-1 text-justify px-1 sm:px-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default DesignServiceCard;

