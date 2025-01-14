"use client";

// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react";
import DP from "@/app/views/assets/dp.jpg";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack?: string[];
  livePreviewUrl: string;
  codeUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  livePreviewUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full overflow-hidden bg-[#363636] text-white rounded-[8px] lg:rounded-[16px] ">
      <div className="h-64 w-full bg-cover bg-center">
        <Image
          src={DP}
          alt="project-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold tracking-wide">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        {/* <div className="pt-2">
          <p className="text-gray-400">Tech stack : {techStack.join(", ")}</p>
        </div> */}
      </div>
      <div className="px-6 pb-6 pt-0 gap-4">
        <button
          className="flex gap-1 items-center hover:border-b "
          onClick={() => window.open(livePreviewUrl, "_blank")}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View more
        </button>
        {/* <button
          className="flex-1"
          onClick={() => window.open(codeUrl, "_blank")}
        >
          <Github className="w-4 h-4 mr-2" />
          View Code
        </button> */}
      </div>
    </div>
  );
}
