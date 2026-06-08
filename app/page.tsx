"use client";

import { useEffect, useRef } from "react";
import GradientButton from "@/assets/svg/ButtonGradient";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#services" && roadmapRef.current) {
      roadmapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
