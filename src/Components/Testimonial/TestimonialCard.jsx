import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, review, images, rating } = testimonial;
  const ratingCount = Number(rating) || 5;

  const displayImage = images && images.length > 0 && images[0] ? images[0] : "/design.jpg";

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-4 w-full mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)] min-h-87.5">
      
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <div className="flex space-x-1 mb-6">
            {[...Array(ratingCount)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <p className="text-[19px] italic text-gray-800 mb-8 font-serif leading-relaxed">
            "{review}"
          </p>
        </div>
        
        <div>
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-2xl mr-4 shadow-sm shrink-0">
                {name ? name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-gray-300 min-h-75 md:min-h-full rounded-md md:rounded-none md:rounded-r-md overflow-hidden">
        <img 
          src={displayImage} 
          alt={`${name}'s testimonial`} 
          className="w-full h-full object-cover absolute inset-0" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "/design.jpg";
          }}
        />
      </div>

    </div>
  );
};

export default TestimonialCard;