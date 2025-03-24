"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ChevronRight, ChevronLeft } from "lucide-react"

const categories = {
  Chemistry: [
    {
      name: "Alcohol",
      desc: "Solvent and preservative enhancing pharmaceutical formulations effectively.",
      icon: "/ICONS/Alcahol.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Alcohol.jpg",
    },
    {
      name: "Amino Acids",
      desc: "Essential building blocks improving drug stability and bioavailability.",
      icon: "/ICONS/Amino Acids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Amino Acid.jpg",
    },
    {
      name: "Buffers",
      desc: "Maintain pH balance, ensuring formulation stability and efficacy.",
      icon: "/ICONS/Buffers.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Buffers.jpg",
    },
    {
      name: "Carbohydrates",
      desc: "Provide energy and stabilization in pharmaceutical preparations.",
      icon: "/ICONS/carbohydrates.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Carbohydrates.jpg",
    },
    {
      name: "Enzymes",
      desc: "Catalyse biochemical reactions, improving drug formulation efficiency.",
      icon: "/ICONS/enzyme.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Enzymes.jpg",
    },
    {
      name: "Fatty Acids",
      desc: "Enhance solubility, absorption, and stability in drug delivery.",
      icon: "/ICONS/Fatty Acid.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Fatty Acid.jpg",
    },
    {
      name: "Lipids",
      desc: "Improve drug solubility, absorption, and controlled release properties.",
      icon: "/ICONS/Lipids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Lipids.jpg",
    },
    {
      name: "Mineral Salts",
      desc: "Essential excipients supporting stability and bioavailability.",
      icon: "/ICONS/Mineral Salts.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Mineral Salts.jpg",
    },
    {
      name: "Oils",
      desc: "Act as carriers, emulsifiers, and solubilizers in formulations.",
      icon: "/ICONS/oil.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Oils.jpg",
    },
    {
      name: "Parabens",
      desc: "Widely used preservatives ensuring product safety and longevity.",
      icon: "/ICONS/Parabens.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Parabens.jpg",
    },
    {
      name: "Alcohol 2",
      desc: "Solvent and preservative enhancing pharmaceutical formulations effectively.",
      icon: "/ICONS/Alcahol.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Alcohol.jpg",
    },
    {
      name: "Amino Acids 2",
      desc: "Essential building blocks improving drug stability and bioavailability.",
      icon: "/ICONS/Amino Acids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Amino Acid.jpg",
    },
    {
      name: "Buffers 2",
      desc: "Maintain pH balance, ensuring formulation stability and efficacy.",
      icon: "/ICONS/Buffers.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Buffers.jpg",
    },
    {
      name: "Carbohydrates 2",
      desc: "Provide energy and stabilization in pharmaceutical preparations.",
      icon: "/ICONS/carbohydrates.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Carbohydrates.jpg",
    },
    {
      name: "Enzymes 2",
      desc: "Catalyse biochemical reactions, improving drug formulation efficiency.",
      icon: "/ICONS/enzyme.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Enzymes.jpg",
    },
    {
      name: "Fatty Acids 2",
      desc: "Enhance solubility, absorption, and stability in drug delivery.",
      icon: "/ICONS/Fatty Acid.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Fatty Acid.jpg",
    },
    {
      name: "Lipids 2",
      desc: "Improve drug solubility, absorption, and controlled release properties.",
      icon: "/ICONS/Lipids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Lipids.jpg",
    },
    {
      name: "Mineral Salts 2",
      desc: "Essential excipients supporting stability and bioavailability.",
      icon: "/ICONS/Mineral Salts.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Mineral Salts.jpg",
    },
    {
      name: "Oils 2",
      desc: "Act as carriers, emulsifiers, and solubilizers in formulations.",
      icon: "/ICONS/oil.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Oils.jpg",
    },
    {
      name: "Parabens 2",
      desc: "Widely used preservatives ensuring product safety and longevity.",
      icon: "/ICONS/Parabens.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Parabens.jpg",
    },
    {
      name: "Alcohol",
      desc: "Solvent and preservative enhancing pharmaceutical formulations effectively.",
      icon: "/ICONS/Alcahol.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Alcohol.jpg",
    },
    {
      name: "Amino Acids",
      desc: "Essential building blocks improving drug stability and bioavailability.",
      icon: "/ICONS/Amino Acids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Amino Acid.jpg",
    },
    {
      name: "Buffers",
      desc: "Maintain pH balance, ensuring formulation stability and efficacy.",
      icon: "/ICONS/Buffers.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Buffers.jpg",
    },
    {
      name: "Carbohydrates",
      desc: "Provide energy and stabilization in pharmaceutical preparations.",
      icon: "/ICONS/carbohydrates.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Carbohydrates.jpg",
    },
    {
      name: "Enzymes",
      desc: "Catalyse biochemical reactions, improving drug formulation efficiency.",
      icon: "/ICONS/enzyme.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Enzymes.jpg",
    },
    {
      name: "Fatty Acids",
      desc: "Enhance solubility, absorption, and stability in drug delivery.",
      icon: "/ICONS/Fatty Acid.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Fatty Acid.jpg",
    },
    {
      name: "Lipids",
      desc: "Improve drug solubility, absorption, and controlled release properties.",
      icon: "/ICONS/Lipids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Lipids.jpg",
    },
    {
      name: "Mineral Salts",
      desc: "Essential excipients supporting stability and bioavailability.",
      icon: "/ICONS/Mineral Salts.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Mineral Salts.jpg",
    },
    {
      name: "Oils",
      desc: "Act as carriers, emulsifiers, and solubilizers in formulations.",
      icon: "/ICONS/oil.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Oils.jpg",
    },
    {
      name: "Parabens",
      desc: "Widely used preservatives ensuring product safety and longevity.",
      icon: "/ICONS/Parabens.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Parabens.jpg",
    },
    {
      name: "Alcohol 2",
      desc: "Solvent and preservative enhancing pharmaceutical formulations effectively.",
      icon: "/ICONS/Alcahol.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Alcohol.jpg",
    },
    {
      name: "Amino Acids 2",
      desc: "Essential building blocks improving drug stability and bioavailability.",
      icon: "/ICONS/Amino Acids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Amino Acid.jpg",
    },
    {
      name: "Buffers 2",
      desc: "Maintain pH balance, ensuring formulation stability and efficacy.",
      icon: "/ICONS/Buffers.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Buffers.jpg",
    },
    {
      name: "Carbohydrates 2",
      desc: "Provide energy and stabilization in pharmaceutical preparations.",
      icon: "/ICONS/carbohydrates.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Carbohydrates.jpg",
    },
    {
      name: "Enzymes 2",
      desc: "Catalyse biochemical reactions, improving drug formulation efficiency.",
      icon: "/ICONS/enzyme.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Enzymes.jpg",
    },
    {
      name: "Fatty Acids 2",
      desc: "Enhance solubility, absorption, and stability in drug delivery.",
      icon: "/ICONS/Fatty Acid.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Fatty Acid.jpg",
    },
    {
      name: "Lipids 2",
      desc: "Improve drug solubility, absorption, and controlled release properties.",
      icon: "/ICONS/Lipids.png",
      Bgimage: "/CATEGORIES BACKGROUND BANNER/Lipids.jpg",
    },
  ],
  Function: [
    {
      name: "Absorbent",
      desc: "Enhances drug stability by reducing moisture retention.",
      icon: "/ICONS/absorbent.png",
    },
    {
      name: "Acidifying Agent",
      desc: "Regulates pH to optimize drug formulation stability.",
      icon: "/ICONS/Acidifying Agent.png",
    },
    {
      name: "Additive",
      desc: "Improves texture, functionality, and effectiveness in drugs.",
      icon: "/ICONS/Additive.png",
    },
    { name: "Adjuvant", desc: "Boosts immune response in vaccine and drug formulations.", icon: "/ICONS/Adjuvant.png" },
    {
      name: "Anti-bacterial",
      desc: "Prevents microbial growth ensuring product safety.",
      icon: "/ICONS/antibacterial.png",
    },
    {
      name: "Anti-Caking Agent",
      desc: "Prevents clumping, ensuring smooth drug flow.",
      icon: "/ICONS/anti-caking.png",
    },
    {
      name: "Anti-Coagulant",
      desc: "Prevents clotting, maintaining formulation stability.",
      icon: "/ICONS/Anti-Coagulant.png",
    },
    { name: "Anti-Fungal", desc: "Protects formulations against fungal contamination.", icon: "/ICONS/Antifungal.png" },
    {
      name: "Anti-Inflammatory",
      desc: "Reduces inflammation, enhancing therapeutic benefits.",
      icon: "/ICONS/Anti-Inflammatory.png",
    },
    {
      name: "Anti-Microbial Agent",
      desc: "Prevents microbial contamination in formulations.",
      icon: "/ICONS/Anti-Microbial Agent.png",
    },
  ],
  "Labelling Claims": [
    { name: "USP", desc: "Complies with U.S. Pharmacopoeia quality standards.", icon: "/ICONS/USP.png" },
    { name: "NF", desc: "Meets National Formulary pharmaceutical grade requirements.", icon: "/ICONS/NF.png" },
    { name: "EP", desc: "European Pharmacopoeia-compliant excipient quality standards.", icon: "/ICONS/EP.png" },
    { name: "Ph. Eur.", desc: "Ensures high European Pharmacopoeia compliance.", icon: "/ICONS/Ph.Eur..png" },
    { name: "BP", desc: "British Pharmacopoeia-certified for pharmaceutical use.", icon: "/ICONS/BP.png" },
    { name: "JP", desc: "Adheres to Japanese Pharmacopoeia quality norms.", icon: "/ICONS/JP.png" },
    { name: "ChP", desc: "Complies with Chinese Pharmacopoeia requirements.", icon: "/ICONS/Chp.png" },
    {
      name: "bioCERTIFIED",
      desc: "Meets stringent biological certification standards.",
      icon: "/ICONS/bioCERTIFIED.png",
    },
  ],
  "Dosage Form": [
    { name: "Aerosol", desc: "Inhalation based drug delivery system.", icon: "/ICONS/Aerosol.png" },
    { name: "Gel", desc: "Provides controlled drug release with smooth application.", icon: "/ICONS/Gel.png" },
    { name: "Liquid", desc: "Used in solutions, syrups, and suspensions.", icon: "/ICONS/Liquid.png" },
    { name: "Ophthalmic", desc: "Sterile solutions for eye treatments.", icon: "/ICONS/Ophthalmic.png" },
    { name: "Parenteral", desc: "Injectable formulations ensuring bioavailability.", icon: "/ICONS/Parenteral.png" },
    { name: "Semi-Solid", desc: "Includes creams, ointments, and gels.", icon: "/ICONS/Semi-Solid.png" },
    { name: "Topical", desc: "Applied directly to skin for localized effects.", icon: "/ICONS/Topical.png" },
    { name: "Vaccine", desc: "Enhances immunization with excipient stability.", icon: "/ICONS/Vaccine.png" },
  ],
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Chemistry")
  const gridRef = useRef(null)
  const [activeContainer, setActiveContainer] = useState("")
  const overlayRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(
     window.innerWidth < 480 ? 3 : window.innerWidth < 640 ? 2 : window.innerWidth < 768 ? 4 : window.innerWidth < 1000 ? 6 : 10
  );

  useEffect(() => {
    const preloadImages = () => {
      Object.values(categories).forEach(category => {
        category.forEach(item => {
          if (item.Bgimage) {
            const img = new Image();
            img.src = item.Bgimage;
          }
        });
      });
    };
    preloadImages();
  }, []);

useEffect(() => {
  const updateItemsPerPage = () => {
    setItemsPerPage(  window.innerWidth < 480 ? 3 : window.innerWidth < 640 ? 2 : window.innerWidth < 768 ? 4 : window.innerWidth < 1000 ? 6 : 10);
  };

  window.addEventListener("resize", updateItemsPerPage);
  return () => window.removeEventListener("resize", updateItemsPerPage);
}, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 })
    }
  }, [activeCategory, currentPage])

  const handleMouseEnter = (newBgImage, name) => {
    if (!newBgImage) return

    setActiveContainer(name)

    // Create a timeline for smooth transition
    const tl = gsap.timeline()

    // First, set the new image to the overlay
    if (overlayRef.current) {
      overlayRef.current.style.backgroundImage = `url("${newBgImage}")`

      // Fade in the overlay with the new image to 50% opacity
      tl.fromTo(overlayRef.current, { opacity: 0.5 }, { opacity: 0.5, duration: 0.5, ease: "power2.inOut" })
    }
  }

  const handleMouseLeave = () => {
    // Fade out the overlay when mouse leaves
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
  }


  const handleNextPage = () => {
    if (gridRef.current) {
      // Animate current items out
      gsap.to(gridRef.current.children, {
        opacity: 0,
        x: -50,
        duration: 0.3,
        stagger: 0.02,
        onComplete: () => {
          // Change page
          setCurrentPage((prev) => {
            const totalItems = categories[activeCategory].length
            const totalPages = Math.ceil(totalItems / itemsPerPage)
            return (prev + 1) % totalPages
          })
        },
      })
    }
  }

  const handlePrevPage = () => {
    if (gridRef.current) {
      // Animate current items out
      gsap.to(gridRef.current.children, {
        opacity: 0,
        x: 50,
        duration: 0.3,
        stagger: 0.02,
        onComplete: () => {
          // Change page
          setCurrentPage((prev) => {
            const totalItems = categories[activeCategory].length
            const totalPages = Math.ceil(totalItems / itemsPerPage)
            return prev === 0 ? totalPages - 1 : prev - 1
          })
        },
      })
    }
  }

  // Calculate total pages and current items
  const totalItems = categories[activeCategory].length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
  const currentItems = categories[activeCategory].slice(startIndex, endIndex)

  return (
    <div className="bg-gradient-to-r from-white to-[#9d9c9c] h-full w-full overflow-x-hidden pb-10 relative">
  {/* Background overlay for transitions */}
  <div
    ref={overlayRef}
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity z-0"
  />
  
  {/* Content */}
  <div className="relative z-10">
    <div className="flex flex-col justify-center gap-0 px-1 lg:px-40 lg:py-1 mt-10">
      <div className="flex flex-row items-center gap-1 ">
        <div className ="flex flex-row justify-center items-center gap-1">
    <div className="h-2 w-2  bg-[#3AC29A] rounded-full"></div>
      <div className="flex flex-col gap-1">
      <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
        <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
        <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
      </div>


    </div>
    <h1 className="text-3xl font-bold">Our <span className="text-[#22604A]">Categories</span></h1>

        </div>
    

    
     <p className="text-regular text-[2vh] font-normal p-2 pl-10">Browse our comprehensive range of excipients for various pharmaceutical applications and formulations.</p>
     </div>
     
        
      
    <div
   
    >
      {/* Overlay div for smooth transition */}
      

      {/* Content container with higher z-index */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Navbar */}
        <nav className="flex flex-wrap justify-center gap-4 p-3 rounded-lg mb-6 backdrop-blur-sm">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={` sm:px-2 lg:px-4 py-2 text-sm font-bold rounded transition-all ${
                activeCategory === cat
                  ? "underline underline-offset-4 decoration-[#22604A] decoration-2 "
                  : " "
              }`}
              onClick={() => {
                setActiveCategory(cat)
                setCurrentPage(0) // Reset to first page when changing category
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Grid container with navigation buttons */}
        <div className="relative w-full max-w-6xl ">
          {/* Previous button */}
          {currentPage >0 && (
            <button
              onClick={handlePrevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 bg-[#9dcdbf] backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-[#2A8D70] hover:text-white ml-16 md:ml-24
               lg:ml-18 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-11 w-full max-w-6xl px-8 md:px-20"
          >
            {currentItems.map((item, index) => (
              <div
                onMouseEnter={() => handleMouseEnter(item.Bgimage, item.name)}
                onMouseLeave={handleMouseLeave}
                key={index}
                className={`border-1 rounded-lg flex justify-center items-center w-full sm:w-[160px] md:w-[200px] h-[100px] md:h-[118px] border-[#707070] p-2 hover:bg-[#2A8D70] hover:shadow-lg cursor-pointer  transition-all duration-300 ${
                  activeContainer === item.name ? "bg-[#2A8D70]" : "bg-[#9dcdbf]/90"
                }`}
              >
                <div className="border-1 rounded-lg  w-full h-full flex flex-col items-center justify-center gap-2 bg-white shadow-md transition-transform duration-500 ">
                  <div className="flex flex-row items-center w-full px-3 gap-1">
                    <img src={item.icon || "/placeholder.svg"} alt={item.name} className="w-8 h-8 object-contain" />
                    <h3 className="text-sm font-semibold text-center underline">{item.name}</h3>
                  </div>
                  <p className="text-[8px] font-normal px-3  text-black text-start ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          {totalPages-1 >currentPage && (
            <button
              onClick={handleNextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 bg-[#9dcdbf] backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-[#2A8D70] hover:text-white mr-16 md:mr-24 lg:mr-16 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        
      </div>
    </div>
    </div>
    </div>
  )
}

