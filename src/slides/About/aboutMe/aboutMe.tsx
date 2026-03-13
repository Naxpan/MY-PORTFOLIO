import StarBorder from "../../../component/buttons/StarBorder/starBorder";
import ShinyText from "../../../component/texts/shiny/shinyText";
import BlurText from "../../../component/texts/Blur/blurText";
import Lanyard from "../../../component/lanyard/lanyard";
import CountUp from "../../../component/count/countup";
import Magnet from "../../../component/buttons/Magnet/magnet";
import { useTranslation } from "react-i18next";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-0 py-8 sm:py-12"
      style={{ padding: "0px 0" }}
    >
      <StarBorder
        className="w-full py-8 sm:py-12 custom-class relative"
        style={{ overflow: "hidden" }}
        thickness={0}
        speed="3s"
        color="cyan"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Lanyard */}
          <div className="flex-1 flex items-start lg:items-center justify-center lg:justify-start h-[320px] lg:h-[100px] -mt-28 lg:mt-[100px]">
            <Lanyard cameraDistance={10} position={[0, 9, 30]} />
          </div>
          {/* Info */}
          <div
            className="flex-2 flex items-center justify-center lg:justify-start w-full"
            style={{
              color: "#fff",
              fontSize: "2rem",
              fontWeight: "bold",
              cursor: "default",
            }}
          >
            <div
              className="flex flex-col items-start w-full"
              style={{
                color: "#fff",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              <ShinyText
                className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-4"
                text={t("aboutme")}
                speed={1.8}
                delay={0.6}
                spread={145}
              />
              <span className="mt-2">
                <span className="mr-2 sm:mr-6 text-lg sm:text-2xl font-thin text-gray-300">
                  |
                </span>
                <span className="text-sm sm:text-base font-thin italic text-gray-300">
                  {t("p3")}
                </span>
              </span>
              <BlurText
                text={t("p4")}
                delay={20}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-base sm:text-xl mt-4 sm:mt-6 font-light text-base-gray-300 cursor-default"
              />
              <BlurText
                text={t("p5")}
                delay={20}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-base sm:text-xl mt-2 sm:mt-4 mb-4 sm:mb-8 font-light text-base-gray-300"
              />
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 border-t border-b border-gray-700 py-10 gap-y-8">
                <div className="flex flex-col items-center">
                  <div className="flex text-2xl font-bold text-blue-400">
                    <CountUp from={0} to={5} duration={5} />+
                  </div>
                  <span className="text-base text-gray-300 mt-2">{t("y")}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex text-2xl font-bold text-blue-400">
                    <CountUp from={0} to={6} duration={5} />+
                  </div>
                  <span className="text-base text-gray-300 mt-2">
                    {t("project")}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex text-2xl font-bold text-blue-400">
                    <CountUp from={0} to={14} duration={1} />+
                  </div>
                  <span className="text-base text-gray-300 mt-2">
                    {t("tool")}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex text-2xl font-bold text-blue-400">
                    <CountUp from={0} to={2.87} duration={1} />+
                  </div>
                  <span className="text-base text-gray-300 mt-2">GPA</span>
                </div>
              </div>
              <div className="w-full flex justify-center lg:justify-start my-4 sm:my-6">
                <Magnet padding={20}>
                  <a
                    href="/CV/CV_PhamNgocMan_ThuctapKySuLapTrinhWeb.pdf"
                    className="mt-6 sm:mt-10 mb-6 sm:mb-8 px-3 py-3 border border-gray-300 text-gray-300 rounded-full text-base cursor-pointer"
                    download="CV_PhamNgocMan.pdf"
                  >
                    {t("Cv")}
                  </a>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </StarBorder>
    </div>
  );
};

export default AboutMe;
