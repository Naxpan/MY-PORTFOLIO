// src/component/ProjectDetailDrawer/ProjectDetailDrawer.tsx
import { useTranslation } from "react-i18next";
import { DragCloseDrawer } from "../DragCloseDrawer/DragCloseDrawer";
import CardSwap, { Card } from "../CardSwap/CardSwap";

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

interface ProjectDetailDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project: Project | null;
  lang: string;
}

const ProjectDetailDrawer = ({
  open,
  setOpen,
  project,
  lang,
}: ProjectDetailDrawerProps) => {
  const { t } = useTranslation();

  return (
    <DragCloseDrawer open={open} setOpen={setOpen}>
      {project && (
        <div style={{ height: "450px", position: "relative" }}>
          <div className="absolute w-[90%] sm:w-2/3 md:w-1/2 left-2 sm:left-8 md:left-20 top-4 sm:top-10 sm:ml-4 md:ml-8 mt-4 sm:mt-8 md:mt-16 z-10">
            <h1 className="text-white text-3xl font-bold mb-12">
              {project.title[lang as keyof typeof project.title]}
            </h1>
            <p className="text-white text-xl mb-12">
              {project.content[lang as keyof typeof project.content]}
            </p>
            <span className="text-white text-base font-normal">
              {t("tech")}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 mt-6 mb-60 z-10">
              {project.tech.map((tech: Tech) => (
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
                src={project.image[0].pic1}
                alt={project.title[lang as keyof typeof project.title]}
                className="w-full h-full rounded-xl"
                style={{ maxHeight: "100%" }}
              />
            </Card>
            <Card className="hidden sm:block">
              <img
                src={project.image[0].pic2}
                alt={project.title[lang as keyof typeof project.title]}
                className="w-full h-full rounded-xl"
                style={{ maxHeight: "100%" }}
              />
            </Card>
            <Card className="hidden md:block">
              <img
                src={project.image[0].pic3}
                alt={project.title[lang as keyof typeof project.title]}
                className="w-full h-full rounded-xl"
                style={{ maxHeight: "100%" }}
              />
            </Card>
          </CardSwap>
        </div>
      )}
    </DragCloseDrawer>
  );
};

export default ProjectDetailDrawer;
