import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = [
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "Blog", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "NewSettler", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane", desc: "Pharma grade with amylene stabilization." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "Blog", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "NewSettler", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane", desc: "Pharma grade with amylene stabilization." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "Blog", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "NewSettler", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane", desc: "Pharma grade with amylene stabilization." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine.jpg", title: "Blog", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg", title: "NewSettler", desc: "Aerosol formulations ensure efficient delivery for respiratory and topical applications." },
  { bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg", title: "Dichloromethane", desc: "Pharma grade with amylene stabilization." },
];

export default function CategoryGrid() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const gridRef = useRef(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 480 ? 2 : window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 4 : 3);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(cardsData.length / itemsPerPage);
  
  useEffect(() => {
    if (gridRef.current?.children.length) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 }
      );
    }
  }, [currentPage, itemsPerPage]);

  const currentItems = cardsData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const centerIndex = Math.floor(currentItems.length / 2);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        x: -50,
        duration: 0.3,
        stagger: 0.02,
        onComplete: () => setCurrentPage((prev) => prev + 1),
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        x: 10,
        duration: 0.3,
        stagger: 0.02,
        onComplete: () => setCurrentPage((prev) => prev - 1),
      });
    }
  };

  return (
    <div className="bg-white mt-5 w-full h-[80%] -z-3">
      <div className="relative w-full px-20">
        <div ref={gridRef} className="w-full flex flex-col justify-center items-center gap-14">
          <div className="w-full flex flex-row justify-center items-center gap-14">
            {currentItems.map((card, index) => (
              <div
                key={index}
                className={`flex flex-row justify-center items-center overflow-hidden cursor-pointer group bg-white transition-all duration-300 ${
                  index === centerIndex ? "scale-110 shadow-lg" : ""
                }`}
              >
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="w-full h-40 object-cover group-hover:scale-105 duration-500"
                />
              </div>
            ))}
          </div>

          <div className="w-[95%] flex flex-row bg-[#D7EEE7] justify-center items-center gap-4 mt-15 h-[30vh] mb-24">
            {currentPage > 0 && (
              <button
                onClick={handlePrevPage}
                className="z-10 border-2 border-black p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
            )}

            {currentItems.map((card, index) => (
              <div
                key={index}
                className={`w-full h-full flex flex-col border-2 p-3 justify-center font-normal transition-all duration-300 ${
                  index === centerIndex ? "scale-[1.2] shadow-lg bg-[#2A8D70] rounded-xl  text-white" : ""
                }`}
              >
                <p className="mt-2 text-[3vh] font-normal">{card.title}</p>
                <p className="mt-2 text-xs font-normal">{card.desc}</p>
                <button className="ml-auto mb-1 border-2 border-black w-[15vh] text-center rounded-sm hover:scale-105 hover:bg-green-700 hover:text-white duration-500 text-sm">
                  View
                </button>
              </div>
            ))}

            {currentPage < totalPages - 1 && (
              <button
                onClick={handleNextPage}
                className="z-10 border-2 border-black p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}