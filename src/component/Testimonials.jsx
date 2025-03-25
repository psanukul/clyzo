"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import person1 from "../assets/image1.png";
import person2 from "../assets/image2.jpg";
import person3 from "../assets/image3.jpg";
import person4 from "../assets/image4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Debadatta Nayak",
    position: "Senior Manager",
    company: "AET LabPvt Ltd",
    image: person1,
    rating: 5,
    text: "Beingpart of Clyzefor 6 monthshasbeena privilege. It'saremarkable platform,incredibly convenientforre-sellanduse,andhas simplifiedmy procurement work. Irate it aperfect10 out of 5. If there are improvements inthe future,ourteam will communicate them. Idefinitely recommendClyze toothers inmy network.",
  },
  {
    id: 2,
    name: "Debadatta Nayak",
    position: "Marketing Director",
    company: "Techwave Solutions",
    image: person2,
    rating: 4,
    text: "The Clyze platform has transformed how our team handles procurement. The intuitive interface and responsive support team make it a standout solution. We've seen significant time savings and cost reductions since implementation.",
  },
  {
    id: 3,
    name: "Debadatta Nayak",
    position: "Operations Lead",
    company: "Global Innovations Inc",
    image: person3,
    rating: 5,
    text: "After evaluating several options, Clyze emerged as the clear winner for our procurement needs. The platform's ability to streamline complex processes while maintaining compliance has been invaluable to our organization.",
  },
  {
    id: 4,
    name: "Debadatta Nayak",
    position: "Supply Chain Manager",
    company: "Nexus Industries",
    image: person4,
    rating: 4,
    text: "Clyze has revolutionized our procurement workflow. The platform's analytics capabilities provide insights that have helped us optimize our supply chain and reduce costs by 15% in just three months.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainRef = useRef(null);
  const thumbsRef = useRef([]);
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Initial animations
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );

    // Animate thumbnails on load
    thumbsRef.current.forEach((thumb, index) => {
      gsap.fromTo(
        thumb,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.3 + index * 0.1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  useEffect(() => {
    // Animate out the current testimonial
    gsap.to(mainRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        // Animate in the new testimonial
        gsap.fromTo(
          mainRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });

    // Highlight the active thumbnail
    thumbsRef.current.forEach((thumb, index) => {
      if (index === activeIndex) {
        gsap.to(thumb, { scale: 1.05, duration: 0.3, borderColor: "#3AC29A" });
      } else {
        gsap.to(thumb, { scale: 1, duration: 0.3, borderColor: "transparent" });
      }
    });
  }, [activeIndex]);

  return (
    <div className="bg-[#F4F4ED] py-8">
      <div className="max-w-4xl mx-auto ">
        <div ref={headerRef} className="flex items-center gap-3 mb-2">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            <div className="flex flex-col ml-1">
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold">
            Customer <span className="text-[#22604A]">Testimonials</span>
          </h1>
        </div>

        <p ref={subtitleRef} className="text-md text-gray-700 mt-3 mb-6 ml-10">
          Discover how our customers benefit from our quality, reliability, and
          delivery of excipient solutions.
        </p>

        <div className="relative">
          {/* Main testimonial */}
          <div
            ref={mainRef}
            className="relative rounded-lg overflow-hidden mb-6"
          >
            <div className="relative h-[498px] bg-gradient-to-r from-gray-300/10 to-gray-100/5">
              <img
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-700/70 to-transparent"></div>

              <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center max-w-2xl">
                <h2 className="text-3xl font-bold mb-1">
                  {testimonials[activeIndex].name}
                </h2>
                <p className="text-lg mb-6">
                  {testimonials[activeIndex].position}
                </p>

                <p className="text-sm leading-relaxed mb-6">
                  {testimonials[activeIndex].text}
                </p>

                <div className="mt-auto">
                  <p className="mb-2">{testimonials[activeIndex].company}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeIndex].rating
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <button
                className="absolute right-6 bottom-6 bg-[#3AC29A] hover:bg-[#22604A] rounded-full p-3 text-white transition-all"
                aria-label="Play testimonial"
                onClick={() => {
                  gsap.fromTo(
                    ".play-button-pulse",
                    { scale: 1, opacity: 0.8 },
                    {
                      scale: 1.5,
                      opacity: 0,
                      duration: 1,
                      ease: "power2.out",
                      repeat: 1,
                    }
                  );
                }}
              >
                <div className="play-button-pulse absolute inset-0 rounded-full bg-[#3AC29A]"></div>
                <Play className="w-6 h-6 fill-current relative z-10" />
              </button>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-3 -translate-y-1/2 -translate-x-1/2 bg-white rounded-r-md py-10 px-0.1 shadow-lg z-20 hover:bg-gray-100 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-3 -translate-y-1/2 translate-x-1/2 bg-white rounded-l-md py-10 px-0.1 shadow-lg z-20 hover:bg-gray-100 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 mt-5">
          {testimonials.map((testimonial, index) => {
            if (index === activeIndex) {
              return null;
            }

            return (
              <div
                key={testimonial.id}
                ref={(el) => (thumbsRef.current[index] = el)}
                onClick={() => goToTestimonial(index)}
                className={`relative rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                  activeIndex === index
                    ? "border-[#3AC29A]"
                    : "border-transparent"
                }`}
              >
                <div className="relative h-[150px]">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-700/80 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-3 text-white">
                    <h3 className="text-sm font-medium">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <button
                    className="absolute right-2 bottom-2 bg-[#3AC29A] hover:bg-[#22604A] rounded-full p-1.5 text-white transition-all"
                    aria-label="Play testimonial"
                    onClick={(e) => {
                      e.stopPropagation();
                      gsap.fromTo(
                        e.currentTarget,
                        { scale: 0.8 },
                        { scale: 1, duration: 0.3, ease: "back.out(1.7)" }
                      );
                    }}
                  >
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import person1 from "../assets/image.png";
// import person2 from "../assets/image2.jpg";
// import person3 from "../assets/image3.jpg";
// import person4 from "../assets/image4.jpg";

// const testimonials = [
//   {
//     id: 1,
//     name: "Debadatta Nayak",
//     position: "Senior Manager",
//     company: "AET LabPvt Ltd",
//     image: person1,
//     rating: 5,
//     text: "Beingpart of Clyzefor 6 monthshasbeena privilege. It'saremarkable platform,incredibly convenientforre-sellanduse,andhas simplifiedmy procurement work. Irate it aperfect10 out of 5. If there are improvements inthe future,ourteam will communicate them. Idefinitely recommendClyze toothers inmy network.",
//   },
//   {
//     id: 2,
//     name: "Debadatta Nayak",
//     position: "Marketing Director",
//     company: "Techwave Solutions",
//     image: person2,
//     rating: 4,
//     text: "The Clyze platform has transformed how our team handles procurement. The intuitive interface and responsive support team make it a standout solution. We've seen significant time savings and cost reductions since implementation.",
//   },
//   {
//     id: 3,
//     name: "Debadatta Nayak",
//     position: "Operations Lead",
//     company: "Global Innovations Inc",
//     image: person3,
//     rating: 5,
//     text: "After evaluating several options, Clyze emerged as the clear winner for our procurement needs. The platform's ability to streamline complex processes while maintaining compliance has been invaluable to our organization.",
//   },
//   {
//     id: 4,
//     name: "Debadatta Nayak",
//     position: "Supply Chain Manager",
//     company: "Nexus Industries",
//     image: person4,
//     rating: 4,
//     text: "Clyze has revolutionized our procurement workflow. The platform's analytics capabilities provide insights that have helped us optimize our supply chain and reduce costs by 15% in just three months.",
//   },

// ];

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const mainRef = useRef(null);
//   const thumbsRef = useRef([]);

//   const nextTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const goToTestimonial = (index) => {
//     setActiveIndex(index);
//   };

//   useEffect(() => {
//     // Animate out the current testimonial
//     gsap.to(mainRef.current, {
//       opacity: 0,
//       x: -20,
//       duration: 0.3,
//       onComplete: () => {
//         // Animate in the new testimonial
//         gsap.fromTo(
//           mainRef.current,
//           { opacity: 0, x: 20 },
//           { opacity: 1, x: 0, duration: 0.5 }
//         );
//       },
//     });

//     // Highlight the active thumbnail
//     thumbsRef.current.forEach((thumb, index) => {
//       if (index === activeIndex) {
//         gsap.to(thumb, { scale: 1.05, duration: 0.3, borderColor: "#10b981" });
//       } else {
//         gsap.to(thumb, { scale: 1, duration: 0.3, borderColor: "transparent" });
//       }
//     });
//   }, [activeIndex]);

//   return (
//     <div >

//       <div className="flex flex-col mt-52 justify-center gap-0 px-1 lg:px-40 lg:py-1">
//         <div className="flex flex-row items-center gap-1 ">
//           <div className="flex flex-row justify-center items-center gap-1">
//             <div className="h-2 w-2  bg-[#3AC29A] rounded-full"></div>
//             <div className="flex flex-col gap-1">
//               <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
//               <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
//               <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
//             </div>
//           </div>
//           <h1 className="text-3xl font-bold">
//             Customer <span className="text-[#22604A]">Testimonials</span>
//           </h1>
//         </div>

//         <p className="text-regular text-[2vh] font-normal my-2 mx-8">
//           Browse our comprehensive range of excipients for various
//           pharmaceutical applications and formulations.
//         </p>
//       </div>
//       <div className="max-w-4xl mx-auto px-4 py-12">
//         <div className="relative">
//           {/* Main testimonial */}
//           <div
//             ref={mainRef}
//             className="relative rounded-lg overflow-hidden mb-6"
//           >
//             <div className="relative h-[400px] bg-gradient-to-r from-gray-300/10 to-gray-100/5">
//               <img
//                 src={testimonials[activeIndex].image || "/placeholder.svg"}
//                 alt={testimonials[activeIndex].name}
//                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-500/50 to-transparent"></div>

//               <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center max-w-2xl">
//                 <h2 className="text-3xl font-bold mb-1">
//                   {testimonials[activeIndex].name}
//                 </h2>
//                 <p className="text-lg mb-6">
//                   {testimonials[activeIndex].position}
//                 </p>

//                 <p className="text-sm leading-relaxed mb-6">
//                   {testimonials[activeIndex].text}
//                 </p>

//                 <div className="mt-auto">
//                   <p className="mb-2">{testimonials[activeIndex].company}</p>
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className={`w-5 h-5 ${
//                           i < testimonials[activeIndex].rating
//                             ? "text-yellow-400"
//                             : "text-gray-400"
//                         }`}
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 className="absolute right-6 bottom-6 bg-teal-500 hover:bg-teal-600 rounded-full p-3 text-white transition-all"
//                 aria-label="Play testimonial"
//               >
//                 <Play className="w-6 h-6 fill-current" />
//               </button>
//             </div>
//           </div>

//           {/* Navigation arrows */}
//           <button
//             onClick={prevTestimonial}
//             className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-r-md py-6 shadow-lg z-20 hover:bg-gray-100 transition-all"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={nextTestimonial}
//             className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-l-md py-6 shadow-lg z-20 hover:bg-gray-100 transition-all"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Thumbnails */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.id}
//               ref={(el) => (thumbsRef.current[index] = el)}
//               onClick={() => goToTestimonial(index)}
//               className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
//                 activeIndex === index ? "border-teal-500" : "border-transparent"
//               }`}
//             >
//               <div className="relative h-[150px]">
//                 <img
//                   src={testimonial.image || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-700/80 to-transparent"></div>

//                 <div className="absolute bottom-0 left-0 p-3 text-white">
//                   <h3 className="text-sm font-medium">{testimonial.name}</h3>
//                   <div className="flex mt-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className={`w-3 h-3 ${
//                           i < testimonial.rating
//                             ? "text-yellow-400"
//                             : "text-gray-400"
//                         }`}
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   className="absolute right-2 bottom-2 bg-teal-500 hover:bg-teal-600 rounded-full p-1.5 text-white transition-all"
//                   aria-label="Play testimonial"
//                 >
//                   <Play className="w-3 h-3 fill-current" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
