"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "@fontsource/questrial"; // Questrial font
import "@fontsource/oswald"; // Regular font


gsap.registerPlugin(ScrollTrigger)

const CategoriesSection = () => {
  const sectionRef = useRef(null)
  const customersRef = useRef(null)
  const partnersRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      },
    )

    const animateCounter = (target, endValue) => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: endValue,
        duration: 3,
        roundProps: "val",
        onUpdate: () => {
          target.innerHTML = obj.val + "+"
        },
        scrollTrigger: { trigger: target, start: "top 90%" },
      })
    }

    animateCounter(customersRef.current, 350)
    animateCounter(partnersRef.current, 50)
    animateCounter(productsRef.current, 600)
  }, [])

  return (
    <section  className="w-full py-6 bg-[#f5f3ed]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Your Trusted Partner for High-Quality Excipients
        </h2>

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-4">
          <div className="flex flex-col items-center">
            <span
              ref={customersRef}
              className="text-6xl md:text-8xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px #3cb489",
                fontFamily: "'Oswald', sans-serif",
                lineHeight: "1",
              }}
            >
              350+
            </span>
            <div className="border-t-2 border-gray-800 w-full mt-2 mb-2"></div>
            <p className="text-sm text-gray-800">Customers</p>
          </div>

          <div className="flex flex-col items-center">
            <span
              ref={partnersRef}
              className="text-6xl md:text-8xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px #3cb489",
                fontFamily: "'Oswald', sans-serif",
                lineHeight: "1",
              }}
            >
              50+
            </span>
            <div className="border-t-2 border-gray-800 w-full mt-2 mb-2"></div>
            <p className="text-sm text-gray-800">Global Principles and Partners</p>
          </div>

          <div className="flex flex-col items-center">
            <span
              ref={productsRef}
              className="text-6xl md:text-8xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px #3cb489",
                // fontFamily: "'Questrial', sans-serif",
                fontFamily: "'Oswald', sans-serif",
                lineHeight: "1",
              }}
            >
              600+
            </span>
            <div className="border-t-2 border-gray-800 w-full mt-2 mb-2"></div>
            <p className="text-sm text-gray-800">Products in Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection

