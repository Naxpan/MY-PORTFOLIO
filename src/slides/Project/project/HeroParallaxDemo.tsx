"use client";
import React, { useState } from "react";
import { HeroParallax } from "../../../component/HeroParallax/HeroParallax";
import { DragCloseDrawer } from "../../../component/DragCloseDrawer/DragCloseDrawer";
import projectsData from "../../../assets/data/projects.json";
import CardSwap, { Card } from "../../../component/CardSwap/CardSwap";
import { useTranslation } from "react-i18next";

interface Tech {
  name: string;
  logo: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  content: string;
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

  const products = projectsData.map((project) => ({
    title: project.title,
    description: project.description,
    thumbnail: project.image,
    link: "#",
    fullData: project,
  }));

  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <HeroParallax products={products} onShowDetail={handleShowDetail} />

      <DragCloseDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
        {selectedProject && (
          <div style={{ height: "500px", position: "relative" }}>
            <div className="absolute w-[90%] sm:w-2/3 md:w-1/2 left-2 sm:left-8 md:left-20 top-4 sm:top-10 md:ml-2 sm:ml-4 mt-4 sm:mt-8 md:mt-16 z-10">
              <h1 className="text-white text-3xl font-bold mb-12">
                {selectedProject.title[lang]}
              </h1>
              <p className="text-white text-xl mb-12">
                {selectedProject.content[lang]}
              </p>
              <span className="text-white text-base font-normal">
                {t("techStackTitle")}
              </span>
              <div
                className="grid
  grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]
  gap-4
  mt-6
  mb-60
  z-10"
              >
                {selectedProject.tech.map((tech: Tech, idx: number) => (
                  <div
                    key={`${
                      typeof tech.name === "object"
                        ? (tech.name[lang] ?? idx)
                        : tech.name
                    }-${idx}`}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={tech.logo}
                      alt={
                        typeof tech.name === "object"
                          ? tech.name[lang]
                          : tech.name
                      }
                      className="w-16 h-16 object-contain mb-2"
                      loading="lazy"
                    />
                    <span className="text-base text-white font-base">
                      {typeof tech.name === "object"
                        ? tech.name[lang]
                        : tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1"></div>
            <CardSwap cardDistance={30} verticalDistance={40}>
              <Card className="hidden md:block">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  className="w-full h-full rounded-xl"
                  style={{ maxHeight: "100%" }}
                />
              </Card>
              <Card className="hidden sm:block">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  className="w-full h-full rounded-xl"
                  style={{ maxHeight: "100%" }}
                />
              </Card>
              <Card className="hidden md:block">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  className="w-full h-full rounded-xl"
                  style={{ maxHeight: "100%" }}
                />
              </Card>
            </CardSwap>
          </div>
        )}
      </DragCloseDrawer>
    </>
  );
}
export default HeroParallaxDemo;
