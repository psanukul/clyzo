import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "2-Propanol (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "Amine Fluoride 33% (Permafluor)" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane stabilized with ~ 20 ppm of amylene (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Chlorocresol (4-Chloro-3-Methylphenol) (USP-NF, BP, Ph. Eur.) pure, pharma grade" },
  { bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg", title: "Artificial Powdered Flavor (Chicken) Pharmaceutical Grade" },
];

export default function CategoryGrid() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const gridRef = useRef(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(
        window.innerWidth < 480 ? 2 : window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 4 : 8
      );
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    if (gridRef.current?.children.length) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 }
      );
    }
  }, [currentPage]);

  const totalPages = Math.ceil(cardsData.length / itemsPerPage);
  const currentItems = cardsData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPage = () => {
    if (gridRef.current?.children.length) {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        x: -50,
        duration: 0.3,
        stagger: 0.02,
        onComplete: () => {
          setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
        },
      });
    }
  };

  const handlePrevPage = () => {
    if (gridRef.current?.children.length) {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        x: 50,
        duration: 0.3,
        stagger: 0.02,
        onComplete: () => {
          setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
        },
      });
    }
  };

  return (
    <div className="bg-white mt-5 w-full  -z-3 ">
      <div className="flex flex-col justify-center gap-0 px-1 lg:px-40 lg:py-1 ">
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
          Most 
            <span className="text-[#22604A]">Popular Excipients</span>
          </h1>
        </div>

        <p className="text-regular text-[2vh] font-normal pb-8">
        Here is the list of the most popular excipients that are commonly searched for and used in the pharmaceutical industry
        </p>
      </div>

      <div className="relative w-full px-20">
        {currentPage < totalPages && (
          <button
            onClick={handlePrevPage}
            className="absolute left-9 top-1/2   -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div ref={gridRef} className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {currentItems.map((card, index) => (
            <div key={index} className="flex flex-col justify-center items-center overflow-hidden cursor-pointer group  bg-gray-300 hover:scale-105 hover:shadow-lg duration-500 shadow-md">
              <img src={card.bgImage} alt={card.title} className="w-full h-40 object-cover group-hover:scale-105 duration-500 " />
              <p className="mt-2 text-xs font-semibold text-center">{card.title}</p>
              <button className="mt-auto mb-1  border-2 border-green-700 w-1/2 text-center  text-green-700 rounded-full hover:scale-105   hover:bg-green-700 hover:text-white duration-500">Buy Now</button>
            </div>  
          ))}
        </div>
        {totalPages > currentPage && (
          <button
            onClick={handleNextPage}
            className="absolute right-9 top-1/2 -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
