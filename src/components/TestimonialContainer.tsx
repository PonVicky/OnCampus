import Testimonial from "./ui/Testimonial";
import { useRef } from "react";
import testimonial1 from "../assets/images/testimonial1.svg"
import testimonial2 from "../assets/images/testimonial2.svg"
import arrowLeft from "../assets/images/arrowLeft.svg"
import arrowRight from "../assets/images/arrowRight.svg"
import Button from "./ui/Button";

const TestimonialContainer = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonialData = [
    {
      testimonial: `"I was looking for internships and had a hard time at first using other job sites. Then I started looking into OnCampus. I got a direct messagge from the employer that invited me to apply for the internship position. After I applied, the rest was history."`,
      name: "Krishna Singh (she/her)",
      university: "Netaji Subhas University of Technology",
      year: "Class of 2027",
      image: testimonial1,
      bgColor: "bg-[#d4ff00]"
    },
    {
      testimonial: `"What I liked most about OnCampus is that it felt official. Every job and update came through one place, directly connected to the college, so there was no confusion about what was real and what wasn’t.”`,
      name: "Aditi Jain (she/her)",
      university: "Mount Carmel College",
      year: "Class of 2026",
      image: testimonial2,
      bgColor: "bg-[#548cff]"
    }
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -1600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 1600, behavior: "smooth" });
    }
  };

  return <div className="font-inter">
    <div className="mt-30 md:mt-70 ">
      <div className="px-5 md:px-0">
        <p className="text-[14px]  md:px-20 text-[#6B7280]">TESTIMONIALS</p>
        <nav className=" leading-10 md:px-20 md:leading-15 mb-12">
          <p className="text-[35px] md:text-[48px] font-extrabold">For people who are</p>
          <p className="text-[35px] md:text-[48px] text-[#9CA3AF] font-extrabold">(or have been) in your shoes</p>
        </nav>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth gap-10 md:pb-0 pb-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="shrink-0 px-5">
            <Testimonial
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              university={testimonial.university}
              year={testimonial.year}
              image={testimonial.image}
              bgColor={testimonial.bgColor}
            />
          </div>
        ))}
      </div>
      <div className="hidden md:flex gap-2 mt-8 ml-5 mb-10">
        <nav onClick={scrollLeft} className="hover:cursor-pointer bg-black rounded-full p-2">
          <img src={arrowLeft} alt="arrow-left" />
        </nav>
        <nav onClick={scrollRight} className="hover:cursor-pointer bg-black rounded-full p-2">
          <img src={arrowRight} alt="arrow-right" />
        </nav>
      </div>
      <div className="md:px-20 px-5 mt-18 md:mt-40 pb-10 font-bold text-[65px] leading-15 md:text-[120px] md:leading-30">
        <p>START</p>
        <p>BUILDING</p>
        <p className="hidden md:block">YOUR CAREER</p>
        <p className="md:hidden">YOUR</p>
        <p className="md:hidden">CAREER</p>
      </div>
      <div className=" md:hidden flex justify-center items-center w-full px-2.5 pb-10">
        <button
          className={`bg-[#d3fb52] w-full hover:bg-[#a1dd3b] transition-colors duration-150  px-4 py-2 rounded-sm hover:cursor-pointer`}
        >
          <p className={`font-medium text-[16px]`}>Get Started</p>
        </button>      </div>
    </div>
  </div>

};

export default TestimonialContainer;
