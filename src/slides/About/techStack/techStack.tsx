import ShinyText from "../../../component/texts/shiny/shinyText";
import techStack from "../../../assets/data/techstack.json";
import { useTranslation } from "react-i18next";

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-40">
      <ShinyText
        className="font-bold 
             text-2xl sm:text-2xl md:text-5xl lg:text-6xl sm:mb-8 md:mb-10 
             z-10"
        text={t("techStackTitle")}
        speed={1.8}
        delay={0.6}
        spread={145}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-12 mt-20 mb-60 z-20">
        {techStack.map((tech: { name: string; logo: string }) => (
          <div key={tech.name} className="flex flex-col items-center">
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-2"
              loading="lazy"
            />
            <span className="text-base text-white font-base">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
