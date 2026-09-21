import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WordReveal = ({ text, className = '', startDelay = 0, wordDelay = 0.08, align = 'center' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const words = text.split(' ');
  const justifyClass = align === 'left' ? 'justify-start text-left' : align === 'right' ? 'justify-end text-right' : 'justify-center text-center';

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap ${justifyClass} items-center gap-[0.28em] w-full ${className}`}
      style={{ justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.45,
            delay: startDelay + i * wordDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block whitespace-nowrap shrink-0"
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default WordReveal;
