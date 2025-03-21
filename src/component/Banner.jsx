import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import banner1 from "../assets/baneer.png";
import banner2 from "../assets/banner.jpg";
import banner3 from "../assets/banner2.jpg";
import banner4 from "../assets/banneer4.png";
import banner5 from "../assets/banner3.jpg";
import banner6 from "../assets/banner4.jpg";
import logo from "../assets/logo.png";

const images = [
  { src: banner1, title: "Parenteral Excipients", subtitle: "for Injectable Drug Formulations" },
  { src: banner2, title: "Biopharmaceutical", subtitle: "Solution for Fermentation and Cell Culture" },
  { src: banner3, title: "Amino Acids", subtitle: "for Parenteral Formulation" },
  { src: banner4, title: "Vaccine Formulation", subtitle: "powered by Premium Excipients" },
  { src: banner5, title: "Plasma Fractionation", subtitle: "starts with right raw material" },
  { src: banner6, title: "Multi-Compendial", subtitle: "Excellence for Formulations" },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate background image transition
    gsap.to(bannerRef.current, {
      backgroundImage: `url(${images[currentIndex].src})`,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });

    // Animate text section (fade-in & slide-up effect)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 }, // Start invisible & move down
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" } // Fade in & move up
    );

  }, [currentIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center">
      {/* Background */}
      <div
        ref={bannerRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      ></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center w-3/5 px-2 text-white mt-5 z-10">
        <div className="text-3xl font-bold">
          <img src={logo} className="w-28" alt="Logo" />
        </div>
        <div className="flex flex-row">
          <button className="bg-teal-700 px-4 py-1 text-xs rounded text-white">Log in</button>
          <div className="ml-4 mt-1">
            <FaBars />
          </div>
        </div>
      </nav>

      {/* Search Bar & Banner Content */}
      <div className="flex flex-col items-start ml-[0.1%] z-10 gap-4 mt-36">
        {/* Search Bar */}
        <div className="flex items-center rounded-3xl w-[550px] border-white bg-white shadow-lg">
          <input  
            type="text"
            placeholder="Search By Product Name, CAS No."
            className="px-4 py-1 w-[500px] rounded-l-3xl  text-gray-700 focus:outline-none"
          />
          <button className="bg-teal-700 flex items-center text-white px-8 py-1  my-[2px] mr-[2px] rounded-r-3xl">
            <p>Search</p>
            <IoSearch className="ml-2" />
          </button>
        </div>

        {/* Animated Banner Content */}
        <div ref={textRef} className="text-white">
          <h1 className="text-4xl font-bold">{images[currentIndex].title}</h1>
          <p className="text-sm mt-2">{images[currentIndex].subtitle}</p>
          <button className="mt-5 border border-green-900 text-xs px-5 py-1 rounded-md">Know More</button>
        </div>
      </div>

      {/* Navigation Dots (Bottom Left) */}
      <div className="absolute bottom-10 left-20 flex space-x-1 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;

