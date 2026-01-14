import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="w-full h-auto flex justify-center flex-col gap-8 items-center">
      <section className="leading-32 text-[#d3fb52] py-20 text-center">
        <p className="text-[130px] font-extrabold">GET SEEN</p>
        <p className="text-[130px] font-extrabold">GET HIRED</p>
      </section>
      <section className="mb-32">
        <Button
          content="Find Jobs & Internships Now"
          textColor="#000000"
          bgColor="#d3fb52"
        />
      </section>
    </div>
  );
};

export default Hero;
