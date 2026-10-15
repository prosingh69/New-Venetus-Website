import React, { useState, useRef } from 'react';

const PortfolioCard = ({ 
  Title, 
  Location, 
  BeforeImg, 
  AfterImg, 
  layout = 'vertical', 
  Challenge,           
  Solution,
  Result 
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
    wrapperClasses = 'flex flex-col md:flex-row p-5 md:p-6 gap-6 md:gap-8 bg-white rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] font-sans mb-8';
    imageSectionClasses = 'w-full md:w-1/2 h-80 md:h-[370px] rounded-3xl overflow-hidden'; 
    textSectionClasses = 'md:w-1/2 flex flex-col justify-start py-2';
    titleClasses = 'font-bold text-[#0A1A2F] text-xl md:text-[23px]';
    locationClasses = 'text-orange-600 font-semibold text-[15px] mt-2 mb-5';
  } else {
    wrapperClasses = 'flex flex-col bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden font-sans mb-8';
    imageSectionClasses = 'w-full h-70 sm:h-80 relative'; 
    textSectionClasses = 'p-5 flex flex-col'; 
    titleClasses = 'font-bold text-gray-900 text-base';
    locationClasses = 'text-gray-500 text-sm mt-1';
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
        <img src={AfterImg} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" />
        <img 
          src={BeforeImg} alt="Before" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          draggable="false" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} 
        />

        <div className={`absolute top-4 left-4 bg-gray-500/80 px-3 py-1 rounded-md text-white text-[11px] font-bold tracking-wider z-20 transition-opacity duration-300 ${showBeforeLabel ? 'opacity-100' : 'opacity-0'}`}>
          {layout === 'horizontal'? "Before Renovation" : "BEFORE"}
        </div>
        <div className={`absolute top-4 right-4 bg-gray-500/80 px-3 py-1 rounded-md text-white text-[11px] font-bold tracking-wider z-20 transition-opacity duration-300 ${showAfterLabel ? 'opacity-100' : 'opacity-0'}`}>
          {layout === 'horizontal'? "After Renovation" : "AFTER"}
        </div>

        <div className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-30" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-700">
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
          <div className="flex flex-col gap-5 mt-1">
            {Challenge && (
              <div>
                <h4 className="font-semibold text-[#1F2937] text-[16px]">Challenge</h4>
                <p className="text-gray-600 text-[15px] mt-1 leading-relaxed">{Challenge}</p>
              </div>
            )}
            {Solution && (
              <div>
                <h4 className="font-semibold text-[#1F2937] text-[16px]">Our Solution</h4>
                <p className="text-gray-600 text-[15px] mt-1 leading-relaxed">{Solution}</p>
              </div>
            )}
            {Result && (
              <div>
                <h4 className="font-semibold text-[#1F2937] text-[16px]">Result</h4>
                <p className="text-gray-600 text-[15px] mt-1 leading-relaxed">{Result}</p>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default PortfolioCard;