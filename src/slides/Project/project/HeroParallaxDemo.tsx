"use client";
import { useState } from "react";
import { HeroParallax } from "../../../component/HeroParallax/HeroParallax";
import projectsData from "../../../assets/data/projects.json";
import ProjectDetailDrawer from "../../../component/DragCloseDrawer/ProjectDetailDrawer";
import { useTranslation } from "react-i18next";

interface Tech {
  name: string;
  logo: string;
}

interface Project {
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  image: Array<{ pic1: string; pic2: string; pic3: string }>;
  content: { vi: string; en: string };
  tech: Tech[];
}

export function HeroParallaxDemo() {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleShowDetail = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const { i18n } = useTranslation();
  const lang = i18n.language;

  const products = projectsData.map((project) => ({
    title: project.title[lang as keyof typeof project.title],
    description: project.description[lang as keyof typeof project.description],
    thumbnail: project.image[0].pic1,
    link: "#",
    fullData: project,
  }));

  return (
    <>
      <HeroParallax products={products} onShowDetail={handleShowDetail} />

      <ProjectDetailDrawer
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        project={selectedProject}
        lang={lang}
      />
    </>
  );
}
export default HeroParallaxDemo;
