import React, { useState, useRef } from 'react';

const PortfolioCard = ({ 
  Title, 
  Location, 
  BeforeImg, 
  AfterImg, 
  layout = 'vertical', 
  Challenge,           
  Solution,
  Result,
  imagePosition = "object-center"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const xPos = clientX - containerRect.left;
    const newPosition = Math.max(0, Math.min(100, (xPos / containerRect.width) * 100));
    setSliderPosition(newPosition);
  };

  const showBeforeLabel = sliderPosition > 10;
  const showAfterLabel = sliderPosition < 90;

  let wrapperClasses, imageSectionClasses, textSectionClasses, titleClasses, locationClasses;

  if (layout === 'horizontal') {
    wrapperClasses = 'flex flex-col md:flex-row p-5 md:p-6 gap-6 md:gap-8 bg-[#151518] border border-white/[0.08] rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:border-[#E9C27A]/40 transition-all duration-300 mb-8';
    imageSectionClasses = 'w-full md:w-1/2 h-80 md:h-[370px] rounded-[22px] overflow-hidden'; 
    textSectionClasses = 'md:w-1/2 flex flex-col justify-start py-2';
    titleClasses = 'font-heading font-medium text-white text-2xl md:text-[28px] leading-tight';
    locationClasses = 'font-body text-[#E9C27A] font-semibold text-[12px] uppercase tracking-[0.18em] mt-1 mb-4';
  } else {
    wrapperClasses = 'group flex flex-col bg-[#151518] border border-white/[0.08] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden hover:border-[#E9C27A]/40 transition-all duration-300 mb-8';
    imageSectionClasses = 'w-full h-70 sm:h-80 relative'; 
    textSectionClasses = 'p-5 flex flex-col'; 
    titleClasses = 'font-heading font-medium text-white text-xl group-hover:text-[#E9C27A] transition-colors duration-300 leading-snug';
    locationClasses = 'font-body text-[#E9C27A] text-[11px] uppercase tracking-[0.18em] font-semibold mt-1';
  }

  return (
    <div className={wrapperClasses}>
      
      <div 
        className={`relative cursor-ew-resize select-none touch-none group ${imageSectionClasses}`}
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={(e) => handleMove(e)}
      >
        <img 
          src={AfterImg} 
          alt="After" 
          loading="lazy" 
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${imagePosition}`} 
          draggable="false" 
        />
        
        <img 
          src={BeforeImg} 
          alt="Before" 
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${imagePosition}`} 
          draggable="false" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} 
        />

        <div className={`absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[#E9C27A] text-[11px] font-body font-semibold tracking-wider z-20 transition-opacity duration-300 ${showBeforeLabel ? 'opacity-100' : 'opacity-0'}`}>
          {layout === 'horizontal'? "Before Renovation" : "BEFORE"}
        </div>
        <div className={`absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-white text-[11px] font-body font-semibold tracking-wider z-20 transition-opacity duration-300 ${showAfterLabel ? 'opacity-100' : 'opacity-0'}`}>
          {layout === 'horizontal'? "After Renovation" : "AFTER"}
        </div>

        <div className="absolute top-0 bottom-0 w-[2px] bg-[#E9C27A] pointer-events-none z-30" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#E9C27A] rounded-full shadow-lg shadow-black/50 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L4.5 12l3.75-3m7.5 6L19.5 12l-3.75-3" />
            </svg>
          </div>
        </div>
      </div>

      <div className={textSectionClasses}>
        <h3 className={titleClasses}>
          {Title}
        </h3>
        <p className={locationClasses}>
          {Location}
        </p>

        {layout === 'horizontal' && (
          <div className="flex flex-col gap-4 mt-2 border-t border-white/10 pt-4">
            {Challenge && (
              <div>
                <h4 className="font-heading font-medium text-[#E9C27A] text-[17px] tracking-wide">Challenge</h4>
                <p className="font-body text-[#D4D4D8] text-[14.5px] mt-1 leading-relaxed">{Challenge}</p>
              </div>
            )}
            {Solution && (
              <div>
                <h4 className="font-heading font-medium text-[#E9C27A] text-[17px] tracking-wide">Our Solution</h4>
                <p className="font-body text-[#D4D4D8] text-[14.5px] mt-1 leading-relaxed">{Solution}</p>
              </div>
            )}
            {Result && (
              <div>
                <h4 className="font-heading font-medium text-[#E9C27A] text-[17px] tracking-wide">Result</h4>
                <p className="font-body text-[#D4D4D8] text-[14.5px] mt-1 leading-relaxed">{Result}</p>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default PortfolioCard;
