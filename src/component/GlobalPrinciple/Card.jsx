import React from "react";

const Card = ({ bgImage, partnerImage }) => {
  console.log(partnerImage);
  return (
    <div
      className="flex justify-center items-center w-48 h-60  rounded-lg overflow-hidden shadow-lg bg-cover bg-center transform transition-transform duration-300 group hover:scale-105"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Child div with partner background */}
      <div
        className="h-24 w-24 bg-cover bg-center rounded-2xl overflow-hidden shadow-lg  transform transition-transform duration-300 group-hover:scale-105 "
        style={{
          backgroundImage: `url(${partnerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default Card;
