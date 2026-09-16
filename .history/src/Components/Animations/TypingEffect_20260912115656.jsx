import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * TypingEffect — each letter of `text` fades in sequentially (typing feel).
 * @param {string} text        - Text to animate
 * @param {string} className   - Class on each letter span (e.g. color)
 * @param {number} startDelay  - Seconds to wait before first letter appears
 * @param {number} charDelay   - Seconds between each letter (default 0.04)
 */
export function TypingEffect({ text, className = '', startDelay = 0, charDelay = 0.04 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="flex flex-wrap justify-center md:justify-start">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.1, delay: startDelay + index * charDelay }}
          className={className}
        >
          {letter === ' ' ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </span>
  );
}
