import { useState } from "react";
import { ThreeDCardDemo } from "./project/3dcard";
import AnimatedContent from "../../component/animationContent/animated";
import projectsData from "../../assets/data/projects.json";
import ProjectDetailDrawer from "../../component/DragCloseDrawer/ProjectDetailDrawer";
import { HeroParallaxDemo } from "./project/HeroParallaxDemo";
import { useTranslation } from "react-i18next";

// Define Project interface
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

const Project = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleShowDetail = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <div className="pb-24">
      <HeroParallaxDemo />

      {/* Hiển thị ThreeDCardDemo khi showAllProjects = true */}
      {showAllProjects && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <AnimatedContent
              key={index}
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="power2.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.15}
              delay={0.1 + index * 0.1}
            >
              <ThreeDCardDemo
                title={project.title[lang as keyof typeof project.title]}
                description={
                  project.description[lang as keyof typeof project.description]
                }
                image={project.image[0].pic1}
                onShowDetail={() => handleShowDetail(project)}
              />
            </AnimatedContent>
          ))}
        </div>
      )}

      {/* Nút Xem tất cả */}
      <div className="flex justify-end my-12">
        <h3
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="mr-4 sm:mr-16 lg:mr-20
  text-white text-base sm:text-lg
  font-semibold
  rounded-full
  hover:scale-105
  transition-transform duration-300
  shadow-lg hover:shadow-xl
  cursor-pointer
  z-10"
        >
          {showAllProjects ? t("hidden") : t("Cmore")}
        </h3>
      </div>

      <ProjectDetailDrawer
        open={open}
        setOpen={setOpen}
        project={selectedProject}
        lang={lang}
      />
    </div>
  );
};

export default Project;
