

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
  const outerMostDivRef = useRef(null)
  const [activeContainer, setActiveContainer] = useState("")
  const [bgImage, setBgImage] = useState("")
  const overlayRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 })
    }
  }, [activeCategory, currentPage])

  const handleChangeBgImage = (newBgImage, name) => {
    if (!newBgImage) return

    setActiveContainer(name)

    // Don't change anything if it's the same image
    if (bgImage === newBgImage) return

    // Create a timeline for smooth transition
    const tl = gsap.timeline()

    // First, set the new image to the overlay
    if (overlayRef.current) {
      overlayRef.current.style.backgroundImage = `url("${newBgImage}")`

      // Fade in the overlay with the new image
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Update the main background state
          setBgImage(newBgImage)

          // Small delay before fading out overlay
          setTimeout(() => {
            // Fade out the overlay
            gsap.to(overlayRef.current, {
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut",
            })
          }, 100)
        },
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
    <div className="bg-gradient-to-r from-white to-[#9d9c9c] h-full w-full">
  
    
     <div className="flex flex-col  justify-center gap-0 px-40 py-1">
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
    

    
     <p className="text-regular text-[2vh] font-normal">Browse our comprehensive range of excipients for various pharmaceutical applications and formulations.</p>
     </div>
     
        
      
    <div
      ref={outerMostDivRef}
      className=" flex flex-col items-center px-6 py-2 h-[80vh] relative"
      style={{
        backgroundImage: bgImage ? `url("${bgImage}")` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay div for smooth transition */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-0 opacity-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content container with higher z-index */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Navbar */}
        <nav className="flex flex-wrap justify-center gap-4 p-3 rounded-lg mb-6 backdrop-blur-sm">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-semibold rounded transition-all ${
                activeCategory === cat
                  ? "underline underline-offset-2 text-[#2A8D70]"
                  : "text-gray-600 hover:text-[#2A8D70]"
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
        <div className="relative w-full max-w-6xl">
          {/* Previous button */}
          {currentPage >0 && (
            <button
              onClick={handlePrevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 bg-[#9dcdbf] backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-[#2A8D70] hover:text-white ml-3 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl"
          >
            {currentItems.map((item, index) => (
              <div
                onClick={() => handleChangeBgImage(item.Bgimage, item.name)}
                key={index}
                className={`border-1 rounded-lg flex justify-center items-center border-[#707070] p-2 hover:bg-[#2A8D70] hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ${
                  activeContainer === item.name ? "bg-[#2A8D70]" : "bg-[#9dcdbf]/90"
                }`}
              >
                <div className="border-1 rounded-lg m-2 w-full h-32 flex flex-col items-center justify-center gap-2 bg-white shadow-md transition-transform duration-500 hover:scale-105">
                  <div className="flex flex-row items-center w-full pl-3 gap-1">
                    <img src={item.icon || "/placeholder.svg"} alt={item.name} className="w-10 h-10 object-contain" />
                    <h3 className="text-sm font-semibold text-center underline">{item.name}</h3>
                  </div>
                  <p className="text-xs font-normal text-black text-center">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          {totalPages-1 >currentPage && (
            <button
              onClick={handleNextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 bg-[#9dcdbf] backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-[#2A8D70] hover:text-white mr-3 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        
      </div>
    </div>
    </div>
  )
}

