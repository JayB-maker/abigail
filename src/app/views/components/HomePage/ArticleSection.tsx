import React from "react";
import ProjectCard from "../Cards/ProjectCard";

const ArticleSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 lg:gap-16 py-5 md:py-10 lg:py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text text-center lg:text-left text-2xl md:text-4xl xlg:text-5xl font-bold ">
          Articles
        </h1>
        <p className="text-xl font-bold">
          I share my thoughts, journey and experience to inspire and motivate
          others
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-4 lg:gap-8 w-full ">
        {[1, 2, 3, 4, 5, 6].map((project, index) => (
          <ProjectCard
            codeUrl="https://www.google.com"
            description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            livePreviewUrl="https://www.google.com"
            techStack={["HTML", "JavaScript", "SASS", "React"]}
            title="Project Tile goes here"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
