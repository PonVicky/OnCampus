import React from "react";

type LandingCardProps = {
  type: string;
  heading: string;
  description: string;
  imageSrc: string;
};

const LandingCard = ({
  type,
  heading,
  description,
  imageSrc,
}: LandingCardProps) => {
  return (
    <div className="h-full bg-white rounded-2xl overflow-visible">
      <div className="h-full flex flex-col ">
        <div className="pt-9 px-7 rounded-t-2xl mx-3 pb-10">
          <p className="border rounded-full inline px-4 text-[19px]">{type}</p>
          <p className="md:mt-10 mt-4 leading-12 md:w-full w-[80%] text-[40px] md:text-[50px] font-medium mb-4">
            {heading}
          </p>
          <p className="text-[20px] leading-5.25 md:text-[30px] text-[#333333] md:leading-9 md:w-[85%]">
            {description}
          </p>
        </div>
        <div className="mt-auto -mb-16 overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt="landing image"
            className="transition-transform duration-150 ease-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
