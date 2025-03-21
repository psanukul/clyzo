import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Import your images from assets folder
import testimonialMain from '../assets/image.png';
import testimonial1 from '../assets/image.png';
import testimonial2 from '../assets/image.png';
import testimonial3 from '../assets/image.png';
import playIcon from '../assets/react.svg';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const mainSlideRef = useRef(null);
  const thumbnailsRef = useRef([]);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 0,
      name: "Debadatta Nayak",
      position: "Senior Manager",
      company: "AFT LabPvt Ltd",
      image: testimonialMain,
      rating: 5,
      testimonial: "Beingpart of Clyzon 6 monthshasbeen a privilege. It saremarkable platform,incredibly convenientforreportsuse,andhas simplifiedmy procurement work. Irate it aperfect5 out of 5. If there are improvements inthe future,our team will communicate themConfidently. IrecommendClyzon toothers inmy network."
    },
    {
      id: 1,
      name: "Debadatta Nayak",
      position: "Senior Manager",
      company: "AFT LabPvt Ltd",
      image: testimonial1,
      rating: 5,
      testimonial: "Beingpart of Clyzon 6 monthshasbeen a privilege. It saremarkable platform,incredibly convenientforreportsuse."
    },
    {
      id: 2,
      name: "Debadatta Nayak",
      position: "Senior Manager",
      company: "AFT LabPvt Ltd",
      image: testimonial2,
      rating: 5,
      testimonial: "Beingpart of Clyzon 6 monthshasbeen a privilege. It saremarkable platform,incredibly."
    },
    {
      id: 3,
      name: "Debadatta Nayak",
      position: "Senior Manager",
      company: "AFT LabPvt Ltd",
      image: testimonial3,
      rating: 5,
      testimonial: "Beinsfdsdfsdfsdfsdfgpart of Clyzon 6 monthshasbeen a privilege. It saremarkable platform."
    }
  ];

  const nextSlide = () => {
    const nextIndex = (activeSlide + 1) % testimonials.length;
    animateSlideChange(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeSlide - 1 + testimonials.length) % testimonials.length;
    animateSlideChange(prevIndex);
  };

  const selectSlide = (index) => {
    if (index === activeSlide) return;
    animateSlideChange(index);
  };

  const animateSlideChange = (newIndex) => {
    // Animate out current slide
    gsap.to(mainSlideRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      onComplete: () => {
        setActiveSlide(newIndex);
        // Animate in new slide
        gsap.fromTo(mainSlideRef.current, 
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      }
    });

    // Highlight the new thumbnail
    thumbnailsRef.current.forEach((thumb, idx) => {
      if (idx === newIndex) {
        gsap.to(thumb, { scale: 1.05, duration: 0.3, borderColor: '#00cccc' });
      } else {
        gsap.to(thumb, { scale: 1, duration: 0.3, borderColor: 'transparent' });
      }
    });
  };

  useEffect(() => {
    // Initial animations when component mounts
    gsap.fromTo(carouselRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Animate the initial thumbnail
    gsap.to(thumbnailsRef.current[activeSlide], {
      scale: 1.05,
      duration: 0.3,
      borderColor: '#00cccc'
    });

    // Optional: animate stars
    const stars = document.querySelectorAll('.star');
    gsap.fromTo(stars, 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <div>
        <div className="flex flex-col my-10 justify-center gap-0 px-40 py-1">
        <div className="flex flex-row items-center gap-1 ">
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="h-2 w-2  bg-[#3AC29A] rounded-full"></div>
            <div className="flex flex-col gap-1">
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold">
            Customer <span className="text-[#22604A]">Testimonials</span>
          </h1>
        </div>
        <p className="text-regular text-[2vh] font-normal mx-10 my-2">
          Discover how our customers benefit from our quality, reliability and delivery of excipient solutions.
        </p>
      </div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4" ref={carouselRef}>
      <div className="max-w-6xl w-full">
        {/* Main testimonial */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-6" ref={mainSlideRef}>
          <div className="flex flex-col md:flex-row">
            {/* Image side */}
            <div className="w-full md:w-1/2 relative">
              <img 
                src={testimonials[activeSlide].image} 
                alt={testimonials[activeSlide].name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-teal-500 rounded-full p-2 cursor-pointer transform hover:scale-105 transition-transform">
                <img src={playIcon} alt="Play" className="w-8 h-8" />
              </div>
            </div>

            {/* Content side */}
            <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-teal-500/10 to-teal-500/5 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-1">{testimonials[activeSlide].name}</h2>
              <p className="text-sm text-gray-600 mb-4">{testimonials[activeSlide].position}</p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonials[activeSlide].testimonial}
              </p>
              
              <div className="mt-auto">
                <p className="text-sm font-medium text-gray-800 mb-2">{testimonials[activeSlide].company}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star text-yellow-400 mr-1">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer shadow hover:bg-white transition-colors" onClick={prevSlide}>
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer shadow hover:bg-white transition-colors" onClick={nextSlide}>
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-4">
          {testimonials.slice(1).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={el => thumbnailsRef.current[index + 1] = el}
              className="bg-white rounded-lg shadow overflow-hidden cursor-pointer border-2 border-transparent hover:shadow-md transition-shadow"
              onClick={() => selectSlide(index + 1)}
            >
              <div className="flex items-center p-2">
                <div className="w-24 h-24 relative overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-1 right-1 bg-teal-500 rounded-full p-1 cursor-pointer">
                    <img src={playIcon} alt="Play" className="w-4 h-4" />
                  </div>
                </div>

                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-medium text-gray-800">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;