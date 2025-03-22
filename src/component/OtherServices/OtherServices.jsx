import React from "react";

const OtherServices = () => {
  return (
    <div className="bg-white mt-5 w-full  -z-3 ">
      <div className="flex flex-col justify-center gap-0 px-1 lg:px-40 lg:py-1">
        <div className="flex flex-row items-center gap-1  ">
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="h-2 w-2  bg-[#3AC29A] rounded-full"></div>
            <div className="flex flex-col gap-1">
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold ">
            Other
            <span className="text-[#22604A]">Services</span>
          </h1>
        </div>

        <p className="text-regular text-[2vh] pl-8 font-normal">
          Explore value-added and regulatory services designed to optimize
          processes and drive your pharmaceutical business forward.
        </p>
      </div>

      <div></div>

      <div className=" flex flex-col  items-center w-full h-[90vh] bg-[linear-gradient(to_bottom,#FFFFFF_50%,#F4F4ED_50%)]">
        {/* Text Above Image */}
        <div className=" w-auto ">
          {/* Image */}
          <img
            src="/laptop.png"
            alt="Laptop"
            className="relative h-[80vh] w-auto object-contain items-start"
          />
        </div>
        <div className="absolute  mt-[30vh] sm:mt-[18vh] md:mt-[12vh] h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh] w-[68%] md:w-[38%] text-white z-20 font-bold flex flex-col items-center justify-start text-[10px] sm:text-[20px] md:text-sm">
          <p className=" text-[2vh] sm:text-[3vh] md:text-[5vh] mb-1 sm:mt-auto md:mb-6 font-normal">REGpro..</p>
          <div className="w-full">
            <p>What’s easier than </p>
            <p className=" text-[2vh] sm:text-[8vh] md:text-[10vh] py-0 md:py-6  font-normal">ONE CLICK</p>
          </div>

          <p className="text-[1.6vh] md:text-[3vh] font-semibold"> for all your regulatory document needs ?</p>
          <button className="border border-2px border-white bottom-6 mb-32 sm:mb-14 mt-auto text-[1.3vh] md:text-sm px-1 md:px-3 hover:text-green-500 hover:border-green-500 hover:scale-105 duration-300">Know more</button>
        </div>
      </div>


   <div className="flex  flex-col md:flex-row gap-4 md:gap-24 items-center justify-center w-full h-auto md:h-[20vh] bg-[#006761] text-white px-6 md:px-20">
     <h1 className=" text-[3vh] md:text-[5vh] w-50 md:w-40 font-semibold space-x-2">INSTANT QUOTES ..</h1>
     <p className=" text-[2vh] md:text-[3vh] md:font-semibold">Get Instant Quotes, Save Time, and Make Quick Decisions </p>
     <button className="border border-2px border-white  text-[2vh] md:text-sm px-2 mb-5 md:px-3 hover:text-green-500 hover:border-green-500 hover:scale-105 duration-300"> Know more</button >
   </div>

    </div>
  );
};

export default OtherServices;
