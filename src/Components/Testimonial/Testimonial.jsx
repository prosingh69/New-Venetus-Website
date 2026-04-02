import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    text: "Best decision we made for our home. The designers understood our vision perfectly and the quality of materials is outstanding.",
    name: "Rajesh Nair",
    role: "Business Owner",
    location: "Whitefield, Bangalore",
    project: "Full Home Design",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg", 
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" 
  },
  {
    id: 2,
    rating: 5,
    text: "The execution was flawless. They delivered the project 2 weeks before the deadline. Highly recommend their interior services!",
    name: "Priya Sharma",
    role: "IT Professional",
    location: "Indiranagar, Bangalore",
    project: "Modular Kitchen & Wardrobes",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=800&q=80"
  },
  {
    id: 3,
    rating: 4,
    text: "Great attention to detail. The team was very professional and accommodated all our last-minute design changes with a smile.",
    name: "Amit Patel",
    role: "Doctor",
    location: "Koramangala, Bangalore",
    project: "Living Room Renovation",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
  }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="py-16">
            <div className='flex flex-col items-center text-center px-4 mb-10'>
                <h2 className='text-[38px] font-bold mb-3 text-gray-900'>What Our Clients Say</h2>
                <p className='text-lg text-[#804C40] max-w-2xl'>Join 500+ satisfied families who have transformed their Bangalore homes</p>
            </div>
            
            <div className="w-[95%] max-w-350 mx-auto px-4 relative ">
                
                
                <TestimonialCard testimonial={testimonialsData[currentIndex]} />

                
                <div className="flex justify-center items-center mt-8 space-x-6">
              
                    <button 
                        onClick={prevSlide} 
                        className="p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    
                
                    <div className="flex space-x-2">
                        {testimonialsData.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index ? 'bg-orange-500 w-6' : 'bg-orange-200 w-2'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

            
                    <button 
                        onClick={nextSlide} 
                        className="p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
                <div className='flex items-center justify-center mt-6'>
                <button className='border-2 border-[#BF5F3A] text-[#BF5F3A] p-2 rounded-[7px] font-semibold cursor-pointer active:scale-97 '>Read All Testimonials</button>

                </div>
                
            </div>
        </section>
    )
}

export default Testimonial;