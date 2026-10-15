import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from './TestimonialCard';
import { NavLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';

const Testimonial = ({ showButton = true, locationName = 'Bangalore' }) => {
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://nextjs-as-backend.vercel.app/api/data");
                const result = await response.json();
                if (result.success && result.data) {
                    const sortedData = [...result.data].sort((a, b) =>
                        new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
                    );
                    setTestimonialsData(sortedData.slice(0, 10));
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
            setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonialsData.length]);

    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));

    return (
        <section className="w-full bg-[#545454] py-10 sm:py-13 md:py-16 px-3 sm:px-4 border-t border-b border-white/10 text-white" ref={sectionRef}>
            <div className='flex flex-col items-center text-center px-2 mb-8 sm:mb-10 max-w-3xl mx-auto'>
                <h2 className='font-sans text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-white tracking-tight leading-[1.2] mb-3 sm:mb-4 text-center'>
                    <span className="block">
                        <LettersPullUp
                            text="What Our Clients Say in"
                            startDelay={0.08}
                            charDelay={0.03}
                            align="center"
                        />
                    </span>
                    <span className="block mt-1 sm:mt-1.5">
                        <LettersPullUp
                            text={locationName}
                            highlightWord={locationName}
                            highlightClass="text-primary italic"
                            startDelay={0.55}
                            charDelay={0.035}
                            align="center"
                        />
                    </span>
                </h2>
                <FadeUp delay={0.4} duration={0.6}>
                    <p className='font-sans text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl text-center text-balance px-2 leading-relaxed'>
                        Join 500+ satisfied families who have transformed their Bangalore homes
                    </p>
                </FadeUp>
            </div>

            <div className="w-full max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 relative">
                {loading ? (
                    <div className="flex justify-center items-center py-16 sm:py-20">
                        <p className="text-base sm:text-xl font-medium text-gray-600">Loading testimonials...</p>
                    </div>
                ) : testimonialsData.length > 0 ? (
                    <>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                        >
                            <TestimonialCard 
                                key={testimonialsData[currentIndex]?._id || currentIndex} 
                                testimonial={testimonialsData[currentIndex]} 
                                index={currentIndex}
                            />
                        </motion.div>

                        <motion.div
                            className="flex justify-center items-center mt-6 sm:mt-8 space-x-4 sm:space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.55 }}
                        >
                            <motion.button
                                onClick={prevSlide}
                                className="p-2 sm:p-2.5 rounded-full bg-neutral-800 text-white hover:bg-primary hover:text-neutral-950 border border-white/10 transition cursor-pointer shadow-md"
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.5 }}
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                            </motion.button>

                            <div className="flex space-x-1.5 sm:space-x-2">
                                {testimonialsData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index ? 'bg-primary w-5 sm:w-6' : 'bg-white/30 w-1.5 sm:w-2'}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                onClick={nextSlide}
                                className="p-2 sm:p-2.5 rounded-full bg-neutral-800 text-white hover:bg-primary hover:text-neutral-950 border border-white/10 transition cursor-pointer shadow-md"
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.6 }}
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                            </motion.button>
                        </motion.div>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-white/60">No testimonials found.</p>
                    </div>
                )}

                {showButton && (
                    <motion.div
                        className="flex items-center justify-center mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <NavLink
                            to="/Testinomial"
                            className='border-2 border-primary text-primary hover:bg-primary hover:text-neutral-950 text-sm sm:text-base px-5 py-2.5 rounded-lg font-bold cursor-pointer active:scale-[0.97] transition shadow-md'
                        >
                            Read All Testimonials
                        </NavLink>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Testimonial;
