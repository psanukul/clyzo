import React, { memo } from "react";

const Card = ({ bgImage, partnerImage }) => {
  console.log('card is rendering');
  return (
    <div
      className="flex justify-center items-center w-48 h-[235px]  rounded-lg overflow-hidden shadow-lg bg-cover bg-center transform transition-transform duration-300 group hover:scale-105"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Child div with partner background */}
      <div
        className="h-28 w-28 bg-cover bg-center overflow-hidden  transform transition-transform duration-300 group-hover:scale-105 "
        style={{
          backgroundImage: `url(${partnerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default memo(Card);
