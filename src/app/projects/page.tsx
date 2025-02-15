import React from "react";
import ProjectCard from "../views/components/Cards/ProjectCard";
import AfroTrip from "../views/assets/afrotrips.jpg";
import LegalAssistance from "../views/assets/legal-assistance.jpg";
import Whatsapp from "../views/assets/whatsapp.png";
import Renergy from "../views/assets/renergy.png";
import Datawise from "../views/assets/datawise.png";
import Chatgpt from "../views/assets/chatgpt.png";

const page = () => {
  const projectData = [
    {
      image: Renergy,
      link: "https://www.renergyhub.com.ng",
      project: "Renergy Hub: Renewable Energy Marketplace",
      description:
        "Renergy Hub is a platform designed to connect individuals, businesses, and organizations with renewable energy solutions, promoting sustainable energy adoption through product access, partnerships, and educational resources.",
    },
    {
      image: AfroTrip,
      link: "https://www.figma.com/proto/dq0bdQw0SNrRuuO6CbKwJN/TMA-PROJECT?node-id=293-188&t=Oe5LV1gWBI2mh2OA-1",
      project: "AfroTrips: A tourism platform",
      description:
        "I contributed to the development of a digital solution designed to highlight Africa's rich cultural heritage, tourist attractions, and sustainable travel options. The project aimed to attract both local and international travelers by promoting Africa’s unique offerings.",
    },
    {
      image: LegalAssistance,
      link: "https://medium.com/@abigailsanni10/product-management-cape-stone-project-legal4me-app-connecting-lawyers-with-clients-in-need-db5858a31eb7",
      project: "Swift legal app",
      description:
        "Swift legal is a mobile app designed to provide individuals with easy access to legal services, offering affordable or subsidized rates for legal consultations. The app helps users find lawyers that match their specific needs, whether for personal or business-related legal matters. By simplifying the process of searching for legal professionals, Swift legal app aims to make legal assistance more accessible and affordable for a wider audience, especially those who may not have traditional access to legal representation.",
    },
    {
      image: Datawise,
      link: "https://drive.google.com/file/d/1f7bHNEeGfizBHC-2jmwklZJUHLsNCv6x/view?usp=drivesdk",
      project: "Datawise ",
      description: "",
    },
    {
      image: Chatgpt,
      link: "https://drive.google.com/file/d/19jNn3tjWDMFrLiwtn1M_LmEbBW5gT7RU/view?usp=drivesdk",
      project: "Chatgpt market research",
      description: "",
    },
    {
      image: Whatsapp,
      link: "https://drive.google.com/file/d/19XAYiS8naeVSwKWyyOHmmpMYPiX1mYVq/view?usp=drivesdk",
      project: "Whatsapp product teardown ",
      description: "",
    },
  ];
  return (
    <div className="flex flex-col gap-6 pt-32 pb-10 md:py-36 lg:pt-44 lg:pb-20">
      {/* <!-- About Me --> */}
      <section className="max-w-xl text-white mb-12">
        <h2 className="text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text mb-4">
          Project
        </h2>
        <p className="text-gray-600 leading-relaxed">
          As a product manager, I specialize in bridging the gap between
          technical teams and business stakeholders. My role involves
          overseeing the product lifecycle from ideation to launch, ensuring
          that the final product meets user needs and business goals. I excel
          in strategic planning, market research, and cross-functional
          collaboration to deliver innovative solutions that drive growth and
          customer satisfaction.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-4 lg:gap-8 w-full ">
        {projectData.map((project, index) => (
          <ProjectCard
            codeUrl={project.link}
            description={project.description}
            livePreviewUrl={project.link}
            // techStack={["HTML", "JavaScript", "SASS", "React"]}
            title={project.project}
            key={index}
            imageUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
