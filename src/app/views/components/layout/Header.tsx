"use client";

import Link from "next/link";
import React, { useState } from "react";
import routeConfig from "../../config/routeConfig";
// import Resume from "../../assets/Abigail_Sanni_product_management_cv.pdf"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-5 lg:py-6 px-4 lg:px-10 max-w-[1200px] ">
        <div className="text-xl font-bold">
          <a href="#">Abigail</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav className={`md:flex gap-12 hidden`}>
          <Link
            href={routeConfig.home}
            className="text-gray-400 hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            href={routeConfig.about}
            className="text-gray-400 hover:text-gray-200"
          >
            About
          </Link>
          <Link
            href={routeConfig.projects}
            className="text-gray-400 hover:text-gray-200"
          >
            Projects
          </Link>
          {/* <Link
            href={routeConfig.articles}
            className="text-gray-400 hover:text-gray-200"
          >
            Articles
          </Link>
          <Link
            href={routeConfig.contact}
            className="text-gray-400 hover:text-gray-200"
          >
            Contact
          </Link> */}
        </nav>
        <div className="hidden md:flex space-x-4">
          <a
            href="/Abigail_Sanni_product_management_cv.pdf"
            download
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-md shadow hover:from-orange-600 hover:to-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed h-full w-full bg-black z-10">
          <nav className="flex flex-col space-y-2 p-4">
            <a
              href={routeConfig.home}
              className="text-gray-400 hover:text-gray-200"
            >
              Home
            </a>
            <a
              href={routeConfig.about}
              className="text-gray-400 hover:text-gray-200"
            >
              About
            </a>
            <a
              href={routeConfig.projects}
              className="text-gray-400 hover:text-gray-200"
            >
              Projects
            </a>
            {/* <a
              href={routeConfig.articles}
              className="text-gray-400 hover:text-gray-200"
            >
              Articles
            </a>
            <a
              href={routeConfig.contact}
              className="text-gray-400 hover:text-gray-200"
            >
              Contact
            </a> */}
            <div className="!w-full p-4 absolute left-0 bottom-24 md:flex">
              <a href="/Abigail_Sanni_product_management_cv.pdf" download>
                <button
                  // href="#"
                  className="!w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-md shadow hover:from-orange-600 hover:to-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Download Resume
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
