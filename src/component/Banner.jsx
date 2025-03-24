"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { IoSearch } from "react-icons/io5"
import { FaBars } from "react-icons/fa"
import banner1 from "../assets/baneer.png"
import banner2 from "../assets/banner.jpg"
import banner3 from "../assets/banner2.jpg"
import banner4 from "../assets/banneer4.png"
import banner5 from "../assets/banner3.jpg"
import banner6 from "../assets/banner4.jpg"
import logo from "../assets/logo.png"

const images = [
  { src: banner1, title: "Parenteral Excipients", subtitle: "for Injectable Drug Formulations" },
  { src: banner2, title: "Biopharmaceutical", subtitle: "Solution for Fermentation and Cell Culture" },
  { src: banner3, title: "Amino Acids", subtitle: "for Parenteral Formulation" },
  { src: banner4, title: "Vaccine Formulation", subtitle: "powered by Premium Excipients" },
  { src: banner5, title: "Plasma Fractionation", subtitle: "starts with right raw material" },
  { src: banner6, title: "Multi-Compendial", subtitle: "Excellence for Formulations" },
]

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.to(bannerRef.current, {
      backgroundImage: `url(${images[currentIndex].src})`,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    })

    gsap.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
  }, [currentIndex])

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((img) => {
        const image = new Image()
        image.src = img.src
        image.crossOrigin = "anonymous"
      })
    }
    preloadImages()
  }, [])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-[100svh] overflow-hidden flex flex-col items-center">
      {/* Background */}
      <div
        ref={bannerRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 lg:px-6 md:w-4/5 lg:w-3/5 text-white mt-3 sm:mt-5 z-10">
        <div className="text-4xl font-bold">
          <img src={logo || "/placeholder.svg"} className="w-20 sm:w-24 md:w-28 lg:w-32" alt="Logo" />
        </div>
        <div className="flex flex-row items-center">
          <button className="bg-teal-700 px-4 sm:px-6 md:px-8 py-1 text-xs sm:text-sm rounded text-white">
            Log in
          </button>
          <div className="ml-4 sm:ml-6 mt-1">
            <FaBars className="text-lg sm:text-xl md:text-2xl" />
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center z-10 px-4 sm:px-8 md:px-12 lg:px-60">
        <div className="w-full max-w-[1200px] flex flex-col items-center sm:items-start">
          {/* Search Bar */}
          <div className="flex items-center rounded-full w-full max-w-[700px] border-white bg-white shadow-lg mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Search By Product Name, CAS No."
              className="px-3 sm:px-4 md:px-6 py-2 w-full rounded-l-3xl text-gray-700 focus:outline-none text-xs sm:text-sm md:text-base"
            />
            <button className="bg-teal-700 flex items-center justify-center text-white px-3 sm:px-5 md:px-7 py-2 my-[2px] mr-[2px] rounded-r-3xl whitespace-nowrap">
              <p className="text-xs sm:text-sm md:text-base">Search</p>
              <IoSearch className="ml-1 sm:ml-2 text-lg sm:text-xl md:text-2xl" />
            </button>
          </div>

          {/* Animated Banner Content */}
          <div ref={textRef} className="text-white mt-6 sm:mt-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{images[currentIndex].title}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4">{images[currentIndex].subtitle}</p>
            <div className="flex justify-center sm:justify-start">
              <button className="mt-4 sm:mt-5 md:mt-7 border border-green-900 text-xs sm:text-sm px-4 sm:px-6 md:px-7 py-1 rounded-md">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 lg:left-40 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Banner

