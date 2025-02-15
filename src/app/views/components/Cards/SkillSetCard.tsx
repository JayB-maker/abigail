"use client";

interface ProjectCardProps {
  title?: string;
  description?: string;
  letter?: string;
}

export default function SkillSetCard({
  title,
  description,
  letter,
}: ProjectCardProps) {
  return (
    <div className="w-full overflow-hidden bg-[#363636] text-white rounded-[8px] lg:rounded-[16px] flex gap-4 p-4 ">
      <div className="h-12 !w-12 bg-orange-500 rounded-[4px] flex items-center justify-center">
        <h3 className="text-2xl text-white font-bold ">{letter}</h3>
      </div>
      <div className="w-fit flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        {/* <div className="pt-2">
          <p className="text-gray-400">Tech stack : {techStack.join(", ")}</p>
        </div> */}
      </div>
    </div>
  );
}
