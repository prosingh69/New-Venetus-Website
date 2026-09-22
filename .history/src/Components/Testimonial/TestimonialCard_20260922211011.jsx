import React from 'react';

const FALLBACK_IMAGES = [
  "/design.jpg",
  "/bedroom2.jpeg",
  "/kitchen1.jpeg",
  "/bedroom.jpeg",
];

const TestimonialCard = ({ testimonial, index = 0 }) => {
  const { name, review, images, rating } = testimonial;
  const { name, review, images, rating, project, location } = testimonial;
  const ratingCount = Number(rating) || 5;

  const fallback = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length] || "/design.jpg";
  const displayImage = images && images.length > 0 && images[0] ? images[0] : fallback;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl sm:rounded-2xl overflow-hidden p-3 sm:p-4 w-full mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden p-3 sm:p-4 md:p-5 w-full mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#F3E5DE]/70 items-stretch gap-4 md:gap-6 md:min-h-[340px] lg:min-h-[360px]">
      
      <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
      <div className="flex-1 p-2 sm:p-4 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex space-x-1 mb-4 sm:mb-6">
          <div className="flex space-x-1 mb-3 sm:mb-4">
            {[...Array(ratingCount)].map((_, i) => (
              <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <p className="text-sm sm:text-base md:text-[18px] lg:text-[19px] italic text-gray-800 mb-6 sm:mb-8 font-serif leading-relaxed text-pretty">
          <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] italic text-gray-800 mb-6 font-serif leading-relaxed text-pretty">
            "{review}"
          </p>
        </div>
        
        <div>
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4 shadow-sm shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg sm:text-xl mr-3 sm:mr-4 shadow-sm shrink-0">
                {name ? name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{name}</h4>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg leading-tight">{name}</h4>
              {(project || location) && (
                <p className="text-xs sm:text-sm text-[#804C40] mt-0.5 font-medium">
                  {[project, location].filter(Boolean).join(' • ')}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-gray-200 min-h-56 sm:min-h-72 md:min-h-full rounded-lg md:rounded-none md:rounded-r-xl overflow-hidden mt-3 md:mt-0">
      <div className="w-full md:w-[42%] lg:w-[40%] shrink-0 h-60 sm:h-72 md:h-auto min-h-[220px] md:min-h-full relative bg-gray-100 rounded-xl overflow-hidden">
        <img 
          key={displayImage}
          src={displayImage} 
          alt={`${name}'s testimonial`} 
          className="w-full h-full object-cover absolute inset-0" 
          className="w-full h-full object-cover object-center absolute inset-0" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = fallback;
          }}
        />
      </div>

    </div>
  );
};

export default TestimonialCard;
