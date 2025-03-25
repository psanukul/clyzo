import React, { useEffect, useMemo, useRef, useState } from "react";
import Card from "./Card";
import "../../index.css";
import CustomScrollbar from "./CustomScrollbar";

const cardsData = [
  {
    bgImage: "/GlobalPrinciple/BgImages/PanReacAppliChem.png",
    partnerImage: "/GlobalPrinciple/Partners/PanReacAppliChem.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/TopScience.png",
    partnerImage: "/GlobalPrinciple/Partners/TopScience.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/Pharmabiotech.png",
    partnerImage: "/GlobalPrinciple/Partners/PharmaBiotech.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/cristalco.png",
    partnerImage: "/GlobalPrinciple/Partners/cristalco.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/upi.png",
    partnerImage: "/GlobalPrinciple/Partners/upi.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/katwijk.png",
    partnerImage: "/GlobalPrinciple/Partners/katwijk.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/athenstaedt.png",
    partnerImage: "/GlobalPrinciple/Partners/athenstaedt.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/chem-is-try.png",
    partnerImage: "/GlobalPrinciple/Partners/chem-is-try.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/kosterkeunen.png",
    partnerImage: "/GlobalPrinciple/Partners/kosterKeunen.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/pet-flavors.png",
    partnerImage: "/GlobalPrinciple/Partners/PetFlavours.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/image.png",
    partnerImage: "/GlobalPrinciple/Partners/image.png",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/sunway.png",
    partnerImage: "/GlobalPrinciple/Partners/sunway.png",
  },
];

const GlobalPrinciple = () => {
  useEffect(() => {
    const preloadImages = () => {
      cardsData.forEach((item) => {
        if (item.partnerImage) {
          const img = new Image();
          img.src = item.partnerImage;
        }
      });
    };
    preloadImages();
  }, []);

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollContainerRef = useRef(null);

  // Handle container scroll based on percentage
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = scrollPercentage * maxScroll;
    }
  }, [scrollPercentage]);

  const memoizedCardsData = useMemo(() => cardsData, []);

  return (
    <div className="bg-white mt-7  mx-48 -z-3 ">
      <div className="flex flex-col px-[60px] justify-center gap-0 lg:py-1">
        <div className="flex flex-row items-center gap-2 ">
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="h-2 w-2  bg-[#3AC29A] rounded-full"></div>
            <div className="flex flex-col gap-1">
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold">
            Global Principles and{" "}
            <span className="text-[#22604A]">Partners</span>
          </h1>
        </div>

        <p className="text-regular text-[2vh] font-normal py-3 pl-12">
          Partnering with leading global principals, we deliver superior
          excipients, ensuring quality and efficient distribution..
        </p>
      </div>

      {/* card Section  */}

      <div
        ref={scrollContainerRef}
        className="py-8  px-5 no-scrollbar max-w-full  overflow-x-auto pb-10"
      >
        <div className="grid grid-rows-2 grid-flow-col  gap-x-4 gap-y-4 min-w-max items-center justify-center">
          {memoizedCardsData.map((card, index) => (
            <Card
              key={index}
              bgImage={card.bgImage}
              partnerImage={card.partnerImage}
            />
          ))}
        </div>
      </div>

      <CustomScrollbar
        scrollPercentage={scrollPercentage}
        setScrollPercentage={setScrollPercentage}
      />
    </div>
  );
};

export default GlobalPrinciple;
