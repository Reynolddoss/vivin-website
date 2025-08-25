/**
 * TestimonialsSection Component
 * Auto-scrolling carousel with multiple testimonials moving continuously
 */

import React, { useState, useEffect, useRef } from 'react';
import { Testimonial } from '../../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

     // Auto-scroll functionality with CSS animation
   useEffect(() => {
     const scrollContainer = scrollRef.current;
     if (!scrollContainer) return;

     if (isPaused) {
       scrollContainer.style.animationPlayState = 'paused';
     } else {
       scrollContainer.style.animationPlayState = 'running';
     }
   }, [isPaused]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Star rating component
  const StarRating: React.FC = () => (
    <div className="d-flex justify-content-center mb-2">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className="fas fa-star text-warning"
          style={{ fontSize: '0.9rem', margin: '0 1px' }}
        ></i>
      ))}
    </div>
  );

  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="testimonials-auto-carousel">
      {/* Auto-scrolling container */}
                    <div 
         ref={scrollRef}
         className="testimonials-scroll-container"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
       >
         <div className="testimonials-track">
           {duplicatedTestimonials.map((testimonial, index) => (
             <div key={`testimonial-${index}`} className="testimonial-card">
               <div className="testimonial-content">
                 <div className="quote-icon">
                   <i className="fas fa-quote-left text-warning"></i>
                 </div>
                 <p className="testimonial-text">{testimonial.quote}</p>
                 <StarRating />
                 <h6 className="testimonial-author">- {testimonial.author}</h6>
               </div>
             </div>
           ))}
         </div>
       </div>



      {/* Inline styles for auto-scrolling carousel */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .testimonials-auto-carousel {
            position: relative;
            max-width: 100%;
            overflow: hidden;
            padding: 1rem 0 3rem 0;
          }

          .testimonials-scroll-container {
            overflow: hidden;
            position: relative;
            cursor: grab;
          }

          .testimonials-scroll-container:active {
            cursor: grabbing;
          }

                     .testimonials-track {
             display: flex;
             gap: 1.5rem;
             padding: 0 1rem;
             width: max-content;
             animation: slideLeft 30s linear infinite;
           }
           
           .testimonials-scroll-container:hover .testimonials-track {
             animation-play-state: paused;
           }

           @keyframes slideLeft {
             0% {
               transform: translateX(0);
             }
             100% {
               transform: translateX(-25%);
             }
           }

                     .testimonial-card {
             min-width: 350px;
             max-width: 350px;
             background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
             border-radius: 16px;
             padding: 1.5rem;
             box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
             border: 1px solid rgba(255, 193, 7, 0.1);
             transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
             flex-shrink: 0;
             position: relative;
             overflow: hidden;
           }

           .testimonial-card::before {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             height: 4px;
             background: linear-gradient(90deg, #ffc107, #ff8c00);
             border-radius: 16px 16px 0 0;
           }

           .testimonial-card:hover {
             transform: translateY(-8px) scale(1.02);
             box-shadow: 0 20px 40px rgba(255, 193, 7, 0.2);
             border-color: rgba(255, 193, 7, 0.3);
           }

           .testimonial-card:hover .quote-icon {
             transform: scale(1.1);
             color: #ff8c00;
           }

           .testimonial-card:hover .testimonial-text {
             color: #1a252f;
           }

          .testimonial-content {
            text-align: center;
            position: relative;
          }

                     .quote-icon {
             margin-bottom: 1rem;
             opacity: 0.8;
             transition: all 0.3s ease;
           }

           .quote-icon i {
             font-size: 1.5rem;
             transition: color 0.3s ease;
           }

                     .testimonial-text {
             font-style: italic;
             color: #2c3e50;
             line-height: 1.6;
             font-size: 0.95rem;
             margin-bottom: 1rem;
             display: -webkit-box;
             -webkit-line-clamp: 4;
             -webkit-box-orient: vertical;
             overflow: hidden;
             transition: color 0.3s ease;
           }

          .testimonial-author {
            font-weight: 600;
            color: #2c3e50;
            margin: 0;
            font-size: 0.9rem;
          }

          .pause-indicator {
            text-align: center;
            margin-top: 1rem;
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }

          .testimonials-auto-carousel:hover .pause-indicator {
            opacity: 1;
          }

                     /* Smooth scrolling */
           .testimonials-scroll-container {
             scroll-behavior: smooth;
             overflow: hidden;
           }

          /* Custom scrollbar */
          .testimonials-scroll-container::-webkit-scrollbar {
            display: none;
          }

          .testimonials-scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .testimonial-card {
              min-width: 280px;
              max-width: 280px;
              padding: 1.25rem;
            }

            .testimonials-track {
              gap: 1.5rem;
            }

            .testimonial-text {
              font-size: 0.9rem;
              -webkit-line-clamp: 3;
            }

            .quote-icon i {
              font-size: 1.25rem;
            }
          }

          @media (max-width: 576px) {
            .testimonial-card {
              min-width: 250px;
              max-width: 250px;
              padding: 1rem;
            }

            .testimonials-track {
              gap: 1rem;
            }

            .testimonial-text {
              font-size: 0.85rem;
              -webkit-line-clamp: 3;
            }
          }

                     /* Animation for cards */
           .testimonial-card {
             animation: slideIn 0.6s ease-out;
             animation-fill-mode: both;
           }

           .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
           .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
           .testimonial-card:nth-child(3) { animation-delay: 0.3s; }
           .testimonial-card:nth-child(4) { animation-delay: 0.4s; }
           .testimonial-card:nth-child(5) { animation-delay: 0.5s; }
           .testimonial-card:nth-child(6) { animation-delay: 0.6s; }
           .testimonial-card:nth-child(7) { animation-delay: 0.7s; }
           .testimonial-card:nth-child(8) { animation-delay: 0.8s; }
           .testimonial-card:nth-child(9) { animation-delay: 0.9s; }
           .testimonial-card:nth-child(10) { animation-delay: 1.0s; }

           @keyframes slideIn {
             from {
               opacity: 0;
               transform: translateX(30px);
             }
             to {
               opacity: 1;
               transform: translateX(0);
             }
           }

          /* Gradient overlay for smooth edges */
          .testimonials-auto-carousel::before,
          .testimonials-auto-carousel::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 50px;
            z-index: 10;
            pointer-events: none;
          }

          .testimonials-auto-carousel::before {
            left: 0;
            background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
          }

          .testimonials-auto-carousel::after {
            right: 0;
            background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
          }
        `
      }} />
    </div>
  );
};

export default TestimonialsSection; 