import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from './TestimonialCard';
import { NavLink } from 'react-router-dom';

const Testimonial = ({ showButton = true }) => {
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://nextjs-as-backend.vercel.app/api/data");
                const result = await response.json();
                
                if (result.success && result.data) {
                    const sortedData = [...result.data].sort((a, b) => 
                        new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
                    );
                    
                    const latestTen = sortedData.slice(0, 10);
                    
                    setTestimonialsData(latestTen);
                }
            } catch (error) {
                console.error("API Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (testimonialsData.length === 0) return;
        
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        
        return () => clearInterval(timer);
    }, [testimonialsData.length]);

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
                
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <p className="text-xl font-medium text-gray-600">Loading testimonials...</p>
                    </div>
                ) : testimonialsData.length > 0 ? (
                    <>
                        <TestimonialCard testimonial={testimonialsData[currentIndex]} />

                        <div className="flex justify-center items-center mt-8 space-x-6">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition cursor-pointer"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="flex space-x-2">
                                {testimonialsData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index ? 'bg-orange-500 w-6' : 'bg-orange-200 w-2'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition cursor-pointer"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-500">No testimonials found.</p>
                    </div>
                )}
                
                {
                    showButton &&
                    <div className={` flex items-center justify-center mt-6`}>
                        <NavLink to="/Testinomial" className='border-2 border-[#BF5F3A] text-[#BF5F3A] p-2 rounded-[7px] font-semibold cursor-pointer active:scale-[0.97] transition'>Read All Testimonials</NavLink>
                    </div>
                }

            </div>
        </section>
    )
}

export default Testimonial;