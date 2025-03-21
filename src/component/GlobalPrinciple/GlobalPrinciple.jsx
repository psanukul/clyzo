import React, { useEffect } from "react";
import Card from "./Card";
import "../../index.css";

const cardsData = [
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner3.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner3.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner3.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine2.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner3.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine3.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner1.jpg",
  },
  {
    bgImage: "/GlobalPrinciple/BgImages/medicine1.jpg",
    partnerImage: "/GlobalPrinciple/Partners/Partner2.jpg",
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

        <p className="text-regular text-[2vh] font-normal">
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
