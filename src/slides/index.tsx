import React, { useEffect, useState } from "react";
import Home from "../slides/Home";
import About from "../slides/About";
import Project from "../slides/Project";
import Aurora from "../background/aurora/aurora";
import Contact from "./Contact";

const MainPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToHome = () => {
    const el = document.querySelector("#home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
      className="-mt-8"
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Aurora colorStops={["#5900ff", "#021264", "#00e9fa"]} />
      </div>

      <section id="home">
        <Home />
      </section>
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact" style={{ position: "relative", zIndex: 2 }}>
        <Contact />
      </section>

      {showScrollTop && (
        <button
          onClick={handleScrollToHome}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-5"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default MainPage;
