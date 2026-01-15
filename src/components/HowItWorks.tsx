import React from "react";
import LandingCard from "./LandingCard";
import landingJob from "../assets/images/landingJob.svg";
import landingFeed from "../assets/images/landingFeed.svg";
import landingEvent from "../assets/images/landingEvent.svg";
import landingImage from "../assets/images/landingImage.svg";
import Button from "./ui/Button";

const data = [
  {
    type: "Jobs",
    heading: "Jobs Meant for you",
    description:
      "Shows only fresher and internship roles you are eligible for, so you don't waste time on irrelevant jobs.",
    imageSrc: landingJob,
  },
  {
    type: "Feed",
    heading: "Things to Know",
    description:
      "A shared space where colleges, employers, and students share official hiring activity, guidance, and important campus opportunities.",
    imageSrc: landingFeed,
  },
  {
    type: "Jobs",
    heading: "Events for You",
    description:
      "All placement-related tests, interviews, PPTs, and hiring events scheduled by your college and employers.",
    imageSrc: landingEvent,
  },
  {
    type: "Feed",
    heading: "Make Connections",
    description:
      "Find and connect with a network of peers, mentors, and thought leaders to get career support.",
    imageSrc: landingImage,
  },
];

const HowItWorks = () => {
  return (
    <div className="font-inter md:px-18 px-4 bg-[#f9ffe6]">
      <p className="text-[50px] font-semibold pb-10 md:pb-18">How it works</p>
      {/* <div className="grid grid-cols-2 grid-rows-2 px-2 gap-25"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-25 gap-y-35 px-1 mb-5">
        {data.map((item, index) => (
          <LandingCard
            key={index}
            type={item.type}
            heading={item.heading}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      <div className="md:hidden mt-25 flex justify-center pb-10">
        <Button content="Find Internships" />
      </div>
    </div>
  );
};

export default HowItWorks;
