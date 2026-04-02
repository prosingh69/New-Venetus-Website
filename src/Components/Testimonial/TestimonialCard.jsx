import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { rating, text, name, role, location, project, avatar, thumbnail } = testimonial;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-4 w-full mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <div className="flex space-x-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-lg italic text-gray-800 mb-8 font-serif leading-relaxed">
            "{text}"
          </p>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <img 
              src={avatar} 
              alt={name} 
              className="w-14 h-14 rounded-full object-cover mr-4 shadow-sm" 
            />
            <div>
              <h4 className="font-bold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
              <p className="text-sm text-orange-500 font-medium">{location}</p>
            </div>
          </div>
          <div className="bg-orange-50 text-gray-700 text-sm py-2 px-4 rounded-md inline-block w-full border border-orange-100">
            Project: {project}
          </div>
        </div>
      </div>
      <div className="flex-1 relative bg-gray-300 min-h-75 md:min-h-full">
        <img 
          src={thumbnail} 
          alt="Video Thumbnail" 
          className="w-full h-full object-cover absolute inset-0" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 hover:bg-opacity-20 transition duration-300">
          <button className="bg-orange-600 rounded-full p-4 shadow-lg hover:bg-orange-700 transition transform hover:scale-110">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-90 text-center py-2 text-sm text-gray-900 font-medium">
          Video Testimonial
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;