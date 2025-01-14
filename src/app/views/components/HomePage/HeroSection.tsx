import React from "react";
import DP from "@/app/views/assets/dp.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row gap-6 pt-32 pb-10 md:py-36 lg:pt-44 lg:pb-20">
      <h1 className="text-center lg:text-left text-4xl md:text-6xl xlg:text-7xl font-bold ">
        Hi 👋, <br /> My name is <br />{" "}
        <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
          Abigail Sanni
        </span>
      </h1>
      <div className="relative max-w-[350px] max-h-[35opx] md:max-w-[unset] md:max-h-[unset] w-full h-full aspect-square rounded-full md:w-[400px] md:h-[400px] xlg:!w-[450px] xlg:!h-[450px] p-2">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 animate-spin rounded-full"></div>
        <div className="relative bg-black w-full h-full rounded-full overflow-hidden flex items-center justify-center">
          <Image src={DP} alt="dp" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
