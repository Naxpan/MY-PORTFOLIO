import React from "react";
import BlurText from "../../../component/texts/Blur/blurText";
import SplitText from "../../../component/texts/slipt/sliptText";
import Magnet from "../../../component/buttons/Magnet/magnet";
import TextType from "../../../component/texts/textType/textType";
import AnimatedContent from "../../../component/animationContent/animated";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useTranslation } from "react-i18next";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const HomeContent: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto px-4 py-6">
      <div>
        <BlurText
          text={t("hello")}
          delay={0}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="mb-0 font-normal text-base sm:text-lg md:text-2xl"
        />
        <BlurText
          text="Phạm Ngọc Mẫn"
          delay={300}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8"
        />
      </div>
      <div className="w-full text-left">
        <SplitText
          text={t("myname")}
          className="text-lg sm:text-2xl md:text-3xl font-normal text-left block w-full"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <br />
        <div className="underline decoration-4 text-xl sm:text-2xl md:text-4xl font-semibold text-left mb-4 w-full">
          <SplitText
            text="Intern Web Developer & UX/UI Designer"
            className=""
            delay={50}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <a
          href="https://www.facebook.com/pham.man.1203?locale=vi_VN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white hover:text-blue-800 transition" />
        </a>
        <a
          href="https://www.instagram.com/_man.pn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white hover:text-pink-700 transition" />
        </a>
        <a
          href="https://www.tiktok.com/@pngocman_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTiktok className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white hover:text-gray-900 transition" />
        </a>
        <a
          href="https://github.com/Naxpan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white hover:text-gray-500 transition" />
        </a>
      </div>

      <TextType
        key={i18n.language}
        text={[t("p1"), t("p2")]}
        className="flex justify-start font-thin text-sm sm:text-xs md:text-lg"
        typingSpeed={30}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      <AnimatedContent
        distance={120}
        direction="horizontal"
        reverse={false}
        duration={1}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="w-full mt-6 flex gap-6 justify-end">
          <Magnet padding={5}>
            <a
              href="#projects"
              className="min-w-[120px] sm:min-w-[150px] px-3 sm:px-4 py-2 text-sm sm:text-base border border-violet-500 text-violet-500 rounded-full"
            >
              {t("b1")}
            </a>
          </Magnet>

          <Magnet padding={5}>
            <a
              href="#contact"
              className="min-w-[120px] sm:min-w-[150px] px-3 sm:px-4 py-2 text-sm sm:text-base border border-green-500 text-green-900 rounded-full"
            >
              {t("b2")}
            </a>
          </Magnet>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default HomeContent;
