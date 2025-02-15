"use client";

import React, { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";

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
            <div className="flex-none bg-[#363636] text-white  rounded-lg shadow-lg p-6 w-80">
              <p className=" italic mb-4">
                "This service has been an absolute game-changer! Highly
                recommend."
              </p>
              <h4 className=" font-bold">Jane Doe</h4>
              <p className="text-sm ">Product Manager</p>
            </div>

            <div className="flex-none bg-[#363636] text-white  rounded-lg shadow-lg p-6 w-80">
              <p className=" italic mb-4">
                "Exceptional quality and support. Couldn't ask for more!"
              </p>
              <h4 className=" font-bold">John Smith</h4>
              <p className="text-sm ">Software Engineer</p>
            </div>

            <div className="flex-none bg-[#363636] text-white  rounded-lg shadow-lg p-6 w-80">
              <p className=" italic mb-4">
                "I love how intuitive and easy-to-use everything is."
              </p>
              <h4 className=" font-bold">Emily Clark</h4>
              <p className="text-sm ">Designer</p>
            </div>

            <div className="flex-none bg-[#363636] text-white  rounded-lg shadow-lg p-6 w-80">
              <p className=" italic mb-4">
                "The results I got were amazing! Highly satisfied."
              </p>
              <h4 className=" font-bold">David Lee</h4>
              <p className="text-sm ">Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
