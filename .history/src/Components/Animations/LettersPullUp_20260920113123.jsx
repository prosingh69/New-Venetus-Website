import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * LettersPullUp - animates each letter of 'text' upward with a stagger.
 * @param {string} text        - Text to animate letter by letter
 * @param {string} className   - Class applied to each letter span (e.g. color)
 * @param {number} startDelay  - Seconds before first letter starts animating
 * @param {number} charDelay   - Seconds between each letter (default 0.045)
 */
const LettersPullUp = ({ text, className = '', startDelay = 0, charDelay = 0.045 }) => {
  const letters = text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variant = {
    initial: { y: 14, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: startDelay + i * charDelay,
        duration: 0.38,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <span ref={ref} className="flex flex-wrap justify-center md:justify-start">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={variant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={className}
        >
          {char === ' ' ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </span>
  );
};

// Named export (backward compat with Hero.jsx)
export { LettersPullUp };
// Default export for LastCTA + WhyChoose
export default LettersPullUp;
