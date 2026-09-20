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
    wrapperClasses = 'flex flex-col lg:flex-row p-4 sm:p-5 md:p-6 gap-5 sm:gap-6 lg:gap-8 bg-white rounded-2xl sm:rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] font-sans';
    imageSectionClasses = 'w-full lg:w-1/2 h-64 sm:h-72 md:h-80 lg:h-[370px] rounded-xl sm:rounded-2xl overflow-hidden'; 
    textSectionClasses = 'w-full lg:w-1/2 flex flex-col justify-start py-2';
    titleClasses = 'font-bold text-[#0A1A2F] text-lg sm:text-xl md:text-[23px]';
    locationClasses = 'text-orange-600 font-semibold text-xs sm:text-sm md:text-[15px] mt-1 mb-4';
  } else {
    wrapperClasses = 'flex flex-col bg-white rounded-xl sm:rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden font-sans';
    imageSectionClasses = 'w-full h-60 sm:h-72 relative'; 
    textSectionClasses = 'p-4 sm:p-5 flex flex-col'; 
    titleClasses = 'font-bold text-gray-900 text-sm sm:text-base';
    locationClasses = 'text-gray-500 text-xs sm:text-sm mt-1';
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
        />

        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={BeforeImg} 
            alt="Before" 
            loading="lazy" 
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none ${imagePosition}`}
            style={{ 
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%' 
            }} 
          />
        </div>

        <div 
          className="absolute top-0 bottom-0 w-0.75 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
            </svg>
          </div>
        </div>

        <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 bg-gray-500/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-white text-[10px] sm:text-[11px] font-bold tracking-wider z-20 transition-opacity duration-300 ${showBeforeLabel ? 'opacity-100' : 'opacity-0'}`}>
          BEFORE
        </div>
        <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-500/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-white text-[10px] sm:text-[11px] font-bold tracking-wider z-20 transition-opacity duration-300 ${showAfterLabel ? 'opacity-100' : 'opacity-0'}`}>
          AFTER
        </div>
      </div>

      <div className={textSectionClasses}>
        <h3 className={titleClasses}>{Title}</h3>
        <p className={locationClasses}>{Location}</p>

        {layout === 'horizontal' && (
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="font-semibold text-[#1F2937] text-xs sm:text-sm md:text-[16px]">Challenge</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] mt-1 leading-relaxed text-pretty">{Challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1F2937] text-xs sm:text-sm md:text-[16px]">Our Solution</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] mt-1 leading-relaxed text-pretty">{Solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1F2937] text-xs sm:text-sm md:text-[16px]">Result</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] mt-1 leading-relaxed text-pretty">{Result}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default PortfolioCard;
