import React from "react";
import SkillSetCard from "../Cards/SkillSetCard";

const SkillSetSection = () => {
  const skillSet = [
    {
      description:
        "Overseeing the end-to-end process of creating a product, from ideation to launch and beyond.",
      title: "Product Development",
      letter: "A",
    },
    {
      description:
        "Creating and maintaining roadmaps, managing backlogs and setting release plan",
      title: "Roadmap and backlog management",
      letter: "B",
    },
    {
      description: "Skilled in scrum and kanban, including sprint ceremony",
      title: "Agile methodology",
      letter: "C",
    },
    {
      description:
        "Conducting user interviews/survey and translating it into user centric features",
      title: "User research",
      letter: "D",
    },
    {
      description:
        "Ability to lead, motivate, and coordinate a team to achieve goals",
      title: "Team management",
      letter: "E",
    },
    {
      description:
        "Ability to efficiently navigate and utilize software like Jira, Notion, Figma, lucidchart, Excel etc",
      title: "Tool proficiency",
      letter: "F",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-8 lg:gap-16 py-5 md:py-10 lg:py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text text-center lg:text-left text-2xl md:text-4xl xlg:text-5xl font-bold ">
          Skill Set
        </h1>
        <p className="text-xl font-bold">My Product Core</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-4 lg:gap-8 w-full ">
        {skillSet.map((skill, index) => (
          <SkillSetCard
            description={skill?.description}
            title={skill?.title}
            letter={skill?.letter}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSetSection;
