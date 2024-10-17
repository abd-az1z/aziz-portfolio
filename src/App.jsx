import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "locomotive-scroll/src/locomotive-scroll.scss";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="overflow-x-hidden text-neutral-300 antialiased selection:text-purple-300">
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-20">
        <Navbar />
        <MainPage />
        <About />
        <Technology />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;