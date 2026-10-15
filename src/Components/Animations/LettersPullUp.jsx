import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * LettersPullUp - animates each letter upward with stagger.
 */
const LettersPullUp = ({ 
  text, 
  className = '', 
  startDelay = 0, 
  charDelay = 0.045, 
  align = 'center',
  nowrap = false,
  highlightWord = '',
  highlightClass = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const justifyClass = align === 'left' 
    ? 'justify-start text-left' 
    : align === 'responsive-lg'
      ? 'justify-center lg:justify-start text-center lg:text-left'
      : align === 'responsive-hero' 
        ? 'justify-center md:justify-start text-center md:text-left' 
        : 'justify-center text-center';

  const words = text.split(' ');
  let globalCharIndex = 0;

  return (
    <span 
      ref={ref} 
      className={`inline-flex ${nowrap ? 'flex-nowrap whitespace-nowrap' : 'flex-wrap'} ${justifyClass} items-baseline gap-x-[0.25em] w-full`}
    >
      {words.map((word, wIdx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const highlightList = highlightWord 
          ? highlightWord.toLowerCase().split(/\s+/).filter(Boolean)
          : [];
        const isHighlight = highlightList.includes(cleanWord.toLowerCase());
        const letters = word.split('');
        return (
          <span
            key={wIdx}
            className={`inline-flex items-baseline whitespace-nowrap shrink-0 ${isHighlight ? highlightClass : ''}`}
            style={{ whiteSpace: 'nowrap' }}
          >
            {letters.map((char) => {
              const i = globalCharIndex++;
              return (
                <motion.span
                  key={i}
                  initial={{ y: 14, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    delay: startDelay + i * charDelay,
                    duration: 0.38,
                    ease: 'easeOut',
                  }}
                  className={`${className} ${isHighlight ? highlightClass : ''}`}
                  style={{ display: 'inline-block', verticalAlign: 'baseline' }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export { LettersPullUp };
export default LettersPullUp;
