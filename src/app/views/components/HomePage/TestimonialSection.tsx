"use client";

import React, { useEffect, useState, useRef } from "react";
import Williams from "@/app/views/assets/williams-llube.png";
import Blessing from "@/app/views/assets/blessing-okomori.png";
import Anthony from "@/app/views/assets/anthony-ashley.png";
import "tailwindcss/tailwind.css";
import Image from "next/image";

const testimonials = [
  { id: 1, text: "Testimonial 1", author: "Author 1" },
  { id: 2, text: "Testimonial 2", author: "Author 2" },
  { id: 3, text: "Testimonial 3", author: "Author 3" },
  { id: 4, text: "Testimonial 4", author: "Author 4" },
  { id: 5, text: "Testimonial 5", author: "Author 5" },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  {
    /* Tailwind Animation */
  }
  <style jsx>{`
    @keyframes scroll-linear {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animate-scroll-testimonials {
      display: inline-flex;
      white-space: nowrap;
    }
  `}</style>;

  return (
    <div className="relative  py-12 overflow-scroll">
      <div className="container mx-auto px-6 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4">
          <h1 className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text text-center lg:text-left text-2xl md:text-4xl xlg:text-5xl font-bold ">
            Testimonials
          </h1>
          <p className="text-xl font-bold">What people say</p>
        </div>
        {/* <!-- Scrolling Wrapper --> */}
        <div className="relative overflow-scroll">
          <div
            className="flex space-x-8 animate-scroll-testimonials"
            style={{ animation: "scroll-linear 20s linear infinite" }}
          >
            {/* <!-- Testimonial Cards --> */}
            <div className="flex-none bg-[#363636] text-white  rounded-lg shadow-lg p-6 w-[450px]">
              <p className=" italic mb-4">
                "Working with Abigail Sanni has been an absolute pleasure. As a
                Product Manager Abigail consistently demonstrated exceptional
                problem-solving skills, innovation, and a keen understanding of
                product management Frameworks. <br />
                <br />
                Her ability to collaborate with cross-functional teams and
                deliver results under tight deadlines is truly impressive. She
                brings a unique blend of passion, professionalism, and
                creativity to every project she works on. I have no doubt she
                will continue to excel in her career and make a significant
                impact in product management. "
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image src={Williams} alt="test" />
                </div>
                <div className="flex flex-col justify-end ">
                  <h4 className=" font-bold">Williams Ilube</h4>
                  <p className="text-sm ">Product manager</p>
                </div>
              </div>
            </div>

            <div className="flex-none bg-[#363636] text-white  rounded-lg shadow-lg p-6 w-[450px]">
              <p className=" italic mb-4">
                "I had the privilege of working with Abigail, and her
                dedication, patience, and curiosity as a product manager truly
                stand out. She has a natural talent for breaking down complex
                challenges into actionable solutions, all while fostering
                collaboration and ensuring team alignment. <br />
                <br /> Abigail’s eagerness to learn and grow is inspiring. She
                consistently seeks opportunities to improve her skills and
                adopts a thoughtful, forward-thinking approach to every project.
                Her empathetic communication style and attention to detail make
                her a valued teammate and leader. <br />
                <br /> I wholeheartedly recommend Abigail for any
                opportunity—her passion and commitment are unmatched! "
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image src={Blessing} alt="test" />
                </div>
                <div className="flex flex-col justify-end ">
                  <h4 className=" font-bold">Blessing Okomor</h4>
                  <p className="text-sm ">Product manager</p>
                </div>
              </div>
            </div>

            <div className="relative flex-none bg-[#363636] text-white  rounded-lg shadow-lg p-6 w-[450px]">
              <p className=" italic mb-4">
                "Abigail is quite dedicated and efficient, her passion for what
                she does makes the difference, worked with her on different
                projects and the energy was so so excellent I would recommend
                Abigail 100 percent "
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image src={Anthony} alt="test" />
                </div>
                <div className="static flex flex-col justify-end items-baseline bottom-0 ">
                  <h4 className=" font-bold">Anthony Ashley </h4>
                  <p className="text-sm ">Product manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
