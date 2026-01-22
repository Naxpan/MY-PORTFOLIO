import { useState } from "react";
import { ThreeDCardDemo } from "./project/3dcard";
import AnimatedContent from "../../component/animationContent/animated";
import projectsData from "../../assets/data/projects.json";
import { DragCloseDrawer } from "../../component/DragCloseDrawer/DragCloseDrawer";
import CardSwap, { Card } from "../../component/CardSwap/CardSwap";
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

      <DragCloseDrawer open={open} setOpen={setOpen}>
        {selectedProject && (
          <div style={{ height: "450px", position: "relative" }}>
            <div className="absolute w-[90%] sm:w-2/3 md:w-1/2 left-2 sm:left-8 md:left-20 top-4 sm:top-10 sm:ml-4 md:ml-8 mt-4 sm:mt-8 md:mt-16 z-10">
              <h1 className="text-white text-3xl font-bold mb-12">
                {
                  selectedProject.title[
                    lang as keyof typeof selectedProject.title
                  ]
                }
              </h1>
              <p className="text-white text-xl mb-12">
                {
                  selectedProject.content[
                    lang as keyof typeof selectedProject.content
                  ]
                }
              </p>
              <span className="text-white text-base font-normal">
                {t("tech")}
              </span>
              <div
                className="grid
                  grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]
                  gap-4
                  mt-6
                  mb-60
                  z-10"
              >
                {selectedProject.tech.map((tech: Tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-16 h-16 object-contain mb-2"
                      loading="lazy"
                    />
                    <span className="text-base text-white font-base">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1"></div>
            <CardSwap cardDistance={30} verticalDistance={40}>
              <Card className="hidden md:block">
                <img
                  src={selectedProject.image[0].pic1}
                  alt={
                    selectedProject.title[
                      lang as keyof typeof selectedProject.title
                    ]
                  }
                  className="w-full h-full rounded-xl"
                  style={{ maxHeight: "100%" }}
                />
              </Card>
              <Card className="hidden sm:block">
                <img
                  src={selectedProject.image[0].pic2}
                  alt={
                    selectedProject.title[
                      lang as keyof typeof selectedProject.title
                    ]
                  }
                  className="w-full h-full rounded-xl"
                  style={{ maxHeight: "100%" }}
                />
              </Card>
              <Card className="hidden md:block">
                <img
                  src={selectedProject.image[0].pic3}
                  alt={
                    selectedProject.title[
                      lang as keyof typeof selectedProject.title
                    ]
                  }
                  className="w-full h-full rounded-xl"
                  style={{ maxHeight: "100%" }}
                />
              </Card>
            </CardSwap>
          </div>
        )}
      </DragCloseDrawer>
    </div>
  );
};

export default Project;
