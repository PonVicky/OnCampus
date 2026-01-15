import React from "react";
import Button from "./ui/Button";
import InfiniteStrips from "./InfiniteStrips ";

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

        />
      </section>
      <section className="">
        <p className="mb-13 font-medium text-center">Where Students Aspire To Work</p>
        <InfiniteStrips />
      </section>
    </div>
  );
};

export default Hero;
