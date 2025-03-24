import React, { useEffect } from "react";
import Card from "./Card";
import "../../index.css";

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
  return (
    <div className="bg-white mt-5 w-full mb-80 md:mb-48 -z-3 ">
      <div className="flex flex-col justify-center gap-0 px-1 lg:px-40 lg:py-1">
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
            Global Principles and{" "}
            <span className="text-[#22604A]">Partners</span>
          </h1>
        </div>

        <p className="text-regular text-[2vh] font-normal p-2 pl-10">
          Partnering with leading global principals, we deliver superior
          excipients, ensuring quality and efficient distribution..
        </p>
      </div>

      {/* card Section  */}

      <div className="p-5  max-w-full  overflow-x-auto pb-10">
        <div className="grid grid-rows-2 grid-flow-col gap-20  min-w-max p-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              bgImage={card.bgImage}
              partnerImage={card.partnerImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalPrinciple;
