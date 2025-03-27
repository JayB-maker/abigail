import React from "react";
import PicOne from "../views/assets/pic-one.png";
import PicTwo from "../views/assets/pic-two.png";
import PicThree from "../views/assets/pic-three.png";
import Image from "next/image";
import SkillSetCard from "../views/components/Cards/SkillSetCard";

const page = () => {
  const hobbies = [
    "Building products that impact and improve lives",
    "Networking and connecting with people",
    "Reading fictional and non-fictional books",
    "Exploring new cuisines and dining experiences",
    "Traveling and discovering new places",
    "Watching documentaries to unwind",
    "Sleeping and recharging",
    "Engaging in meaningful conversations",
    "Attending workshops and learning new skills",
    "Journaling and reflecting on personal growth",
    "Visiting art galleries and museums",
    "Trying out fun, low-effort DIY projects",
    "Enjoying nature walks and scenic views",
  ];
  return (
    <div className="flex flex-col gap-6 pt-32 pb-10 md:py-36 lg:pt-44 lg:pb-20">
      {/* <!-- About Me --> */}
      <section className="w-full text-white mb-12">
        <h2 className="text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-4">
          About Me
        </h2>
        <div className="flex items-center flex-col lg:flex-row justify-between gap-28 ">
          <div className="max-w-xl">
            <p className="text-gray-600 leading-relaxed">
              I am a passionate Product Manager and entrepreneur with a
              background in financial management and a degree in Urban and
              Regional Planning. My drive to create impact and improve lives
              fuels my dedication to product management, where I combine focus,
              goal-setting, and a deep understanding of customer needs to build
              meaningful and innovative solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              My entrepreneurial journey has sharpened my ability to position
              products effectively and craft experiences that resonate with
              users on a personal level. I am also deeply committed to
              Sustainable Development Goals (SDGs) 11 and 13, focusing on
              creating sustainable cities and addressing climate change. I
              envision making significant strides in these areas through
              innovative solutions and impactful products.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              In the next five years, I see myself thriving in my career, proud
              of the lives I’ve touched and the products I’ve built and owned.
              Beyond work, I am an avid reader and researcher who loves learning
              new things. While I’m a foodie who finds cooking amusingly
              unenjoyable, I delight in exploring new places, watching
              documentaries to unwind, and connecting with people.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              As a great conversationalist with a knack for building meaningful
              relationships, I’m confident in my ability to bring value,
              collaboration, and fresh perspectives to any team or project.
            </p>
          </div>
          <div className="group border-[10px] border-orange-500 bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg ">
            <Image
              src={PicTwo}
              alt="Gallery Image"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>

      {/* <!-- Hobboes --> */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-6">
          Hobbies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map((skill, index) => (
            <SkillSetCard description={skill} key={index} />
          ))}
        </div>
      </section>

      {/* <!-- Work Experience --> */}
      {/* <section className="mb-12 max-w-3xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-6">
          Work Experience
        </h2>
        <div className="space-y-6">

          <div className="flex items-center justify-between bg-[#363636] p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="text-xl font-medium text-white">
                Junior Web Developer
              </h3>
              <p className="text-sm text-gray-400">
                Dr. Rajkumar's Learning App • Bengaluru
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="bg-green-100 text-green-500 text-sm px-3 py-1 rounded-lg">
                Full Time
              </span>
              <p className="text-sm text-gray-400">Sep 2021 - Dec 2021</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#363636] p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="text-xl font-medium text-white">
                Web Development Intern
              </h3>
              <p className="text-sm text-gray-400">
                IonPixlez Web Solutions • Bengaluru
              </p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="bg-green-100 text-green-500 text-sm px-3 py-1 rounded-lg">
                Internship
              </span>
              <p className="text-sm text-gray-400">Sep 2021 - Dec 2021</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#363636] p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="text-xl font-medium text-white">
                SEO / SEM Specialist
              </h3>
              <p className="text-sm text-gray-400">HAAPS • Bengaluru</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="bg-green-100 text-green-500 text-sm px-3 py-1 rounded-lg">
                Internship
              </span>
              <p className="text-sm text-gray-400">Sep 2021 - Dec 2021</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Education --> */}
      {/* <section className="max-w-3xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-6">
          Education
        </h2>
        <div className="flex items-center justify-between bg-[#363636] p-6 rounded-lg shadow-sm">
          <div>
            <h3 className="text-xl font-medium text-white">
              Bachelor in Electronics & Communication
            </h3>
            <p className="text-sm text-gray-400">
              Bangalore Institute of Technology
            </p>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <span className="bg-green-100 text-green-500 text-sm px-3 py-1 rounded-lg">
              Full Time
            </span>
            <p className="text-sm text-gray-400">Aug 2015 - Dec 2020</p>
          </div>
        </div>
      </section> */}

      <div className="py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-8 ">
            Gallery
          </h2>
          {/* <!-- Gallery Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 !lg:grid-cols-4 gap-6">
            {/* <!-- Image Card --> */}
            <div className="group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg ">
              <Image
                src={PicOne}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
              {/* <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg -hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
        >
          <p className="text-white font-semibold">View Image</p>
        </div> */}
            </div>

            {/* <!-- Repeated Image Cards --> */}
            <div className="group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg ">
              <Image
                src={PicTwo}
                alt="Gallery Image"
                className="w-full h-full object-cover "
              />
              {/* <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg -hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
        >
          <p className="text-white font-semibold">View Image</p>
        </div> */}
            </div>

            <div className="group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg ">
              <Image
                src={PicThree}
                alt="Gallery Image"
                className="w-full h-[150%] object-cover"
              />
              {/* <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg -hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
        >
          <p className="text-white font-semibold">View Image</p>
        </div> */}
            </div>

            {/* <div className="group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg ">
              <Image
                src={PicTwo}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
              <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg -hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
        >
          <p className="text-white font-semibold">View Image</p>
        </div>
            </div> */}

            {/* <div className="group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg ">
              <Image
                src={PicTwo}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
              <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg -hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
        >
          <p className="text-white font-semibold">View Image</p>
        </div>
            </div> */}

            {/* <div className="group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg ">
              <Image
                src={PicTwo}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group bg-[#363636] rounded-lg h-100 overflow-hidden shadow-lg -hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white font-semibold">View Image</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
