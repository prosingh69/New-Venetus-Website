import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * LettersPullUp - animates each letter upward with stagger, preserving word integrity.
 */
const LettersPullUp = ({ text, className = '', startDelay = 0, charDelay = 0.045, align = 'center' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const justifyClass = align === 'left' 
    ? 'justify-start text-left' 
    : align === 'responsive-hero' 
      ? 'justify-center md:justify-start text-center md:text-left' 
      : 'justify-center text-center';

  const words = text.split(' ');
  let globalCharIndex = 0;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${justifyClass} items-center gap-[0.25em] w-full`}>
      {words.map((word, wIdx) => {
        const letters = word.split('');
        return (
          <span key={wIdx} className="inline-flex whitespace-nowrap">
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
                  className={className}
                  style={{ display: 'inline-block' }}
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
