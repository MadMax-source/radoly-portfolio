import React, { useEffect, useRef } from "react";
import GradientButton from "../assets/svg/ButtonGradient";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Roadmap from "../components/Roadmap";
import { useLocation } from "react-router-dom";

function Home() {
  const roadmapRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/services" && roadmapRef.current) {
      roadmapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
      </div>
      <GradientButton />
      <Benefits />
      <Collaboration />
      <Services />
      <div ref={roadmapRef}>
        <Roadmap />
      </div>
    </div>
  );
}

export default Home;
