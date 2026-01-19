import AboutMe from "./aboutMe/aboutMe";
import TechStack from "./techStack/techStack";
import AnimatedContent from "../../component/animationContent/animated";

const About = () => (
  <section className="w-full flex justify-center px-4 sm:px-8 lg:px-16">
    <div className="w-full max-w-7xl flex flex-col gap-16">
      <AboutMe />

      <AnimatedContent
        distance={80}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power2.out"
        initialOpacity={0.15}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.2}
      >
        <TechStack />
      </AnimatedContent>
    </div>
  </section>
);

export default About;
