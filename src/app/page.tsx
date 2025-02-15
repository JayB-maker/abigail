import ArticleSection from "./views/components/HomePage/ArticleSection";
import HeroSection from "./views/components/HomePage/HeroSection";
import ProjectSection from "./views/components/HomePage/ProjectSection";
import SkillSetSection from "./views/components/HomePage/SkillSetSection";
import TestimonialSection from "./views/components/HomePage/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillSetSection />
      <TestimonialSection />
      {/* <ArticleSection /> */}
    </>
  );
}
