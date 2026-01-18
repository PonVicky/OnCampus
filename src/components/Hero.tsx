import Button from "./ui/Button";
import InfiniteStrips from "./InfiniteStrips ";
import hero1 from "../assets/images/heroImage.svg";

const Hero = () => {
  return (
    <div className="w-full h-auto flex justify-center md:px-0 px-4 flex-col gap-8 items-center">
      <section className="leading-17 md:leading-32 text-[#d3fb52] pt-20 text-center">
        <p className="text-[65px] md:text-[130px] font-extrabold">GET SEEN</p>
        <p className="text-[65px] md:text-[130px] font-extrabold">GET HIRED</p>
      </section>
      <p className="text-[20px] md:hidden text-black text-center">
        Join the network built for starting your career.
      </p>
      <section className="mb-32 md:block hidden">
        <Button content="Find Jobs & Internships Now" />
      </section>
      <section className="px-4 w-full mb-6 md:hidden">
        <button
          className={`bg-[#d3fb52] hover:bg-[#a1dd3b] transition-colors duration-150 w-full font-medium px-4 py-3 rounded-md hover:cursor-pointer text-[18px]`}
        >
          Get Started
        </button>
      </section>
      <img src={hero1} alt="hero-image" className="hidden" />
      <section className="mt-15 md:mt-0 mb-40">
        <p className="md:block hidden mb-13 font-medium text-center">
          Where Students Aspire To Work
        </p>
        <InfiniteStrips />
      </section>
    </div>
  );
};

export default Hero;
