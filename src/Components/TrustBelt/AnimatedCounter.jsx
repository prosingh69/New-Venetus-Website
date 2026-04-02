import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ endValue, suffix = "", duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp = null;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentValue = easeOutQuad * endValue;
        
        setCount(currentValue);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(endValue);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isVisible, endValue, duration]);

  return (
    <span ref={counterRef} className="saira-class tabular-nums inline-block">
      {Number(count).toFixed(decimals)}{suffix}
    </span>
  );
};

export default AnimatedCounter;