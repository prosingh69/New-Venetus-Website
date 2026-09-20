import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * TypingEffect — animates letters sequentially, grouping words so words don't split awkwardly across lines.
 */
export function TypingEffect({ text, className = '', startDelay = 0, charDelay = 0.04, align = 'responsive-hero' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const justifyClass = align === 'left'
    ? 'justify-start text-left'
    : align === 'center'
      ? 'justify-center text-center'
      : 'justify-center md:justify-start text-center md:text-left';

  const words = text.split(' ');
  let globalCharIndex = 0;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${justifyClass} items-center gap-x-[0.28em] w-full`}>
      {words.map((word, wIdx) => {
        const letters = word.split('');
        return (
          <span key={wIdx} className="inline-flex whitespace-nowrap">
            {letters.map((letter) => {
              const index = globalCharIndex++;
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.1, delay: startDelay + index * charDelay }}
                  className={className}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

export default TypingEffect;
