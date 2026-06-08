import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Directpo,
  Dpo,
  KishuInu,
  MummyFinance,
  NFTArkade,
  PornVerse,
  askai,
  bebeSol,
  circleGame,
  dejiSol,
  hyperwrite,
  ironMike,
  vampToken,
  wallet,
} from "../assets";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded-lg">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={projects[currentIndex].img}
          alt={projects[currentIndex].title || "Design Project"}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-between p-4">
        <div>
          <h4 className="text-xl font-bold mb-2">
            {projects[currentIndex].title || "Design Project"}
          </h4>
          {projects[currentIndex].link && (
            <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors text-sm"
            >
              Visit Project
            </a>
          )}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = {
    "NFT Platforms | Metaverse Projects": [
      { img: NFTArkade, link: "https://nft-up3.vercel.app/", title: "NFT Up3" },
      {
        img: PornVerse,
        link: "https://porverse2.vercel.app/home",
        title: "Porverse 2",
      },
      {
        img: Directpo,
        link: "https://dpo-market.vercel.app/",
        title: "DPO Market",
      },
      {
        img: wallet,
        link: "https://opensource-wallet.netlify.app/",
        title: "Open Source Wallet",
      },
    ],
    "DEX | Swap Platforms": [
      {
        img: MummyFinance,
        link: "https://www.mummy.finance/",
        title: "Mummy Finance",
      },
      { img: Dpo, link: "https://dpo-swap-o.vercel.app/", title: "DPO Swap" },
      {
        img: "swap3.jpg",
        link: "https://tacofy-swap.web.app/",
        title: "Tacofy Swap",
      },
    ],
    "Crypto - Token Websites": [
      { img: KishuInu, link: "https://kishusol.vip/", title: "Kishu Sol" },
      {
        img: circleGame,
        link: "https://circlegame.lol/circlegame/",
        title: "Circle Game",
      },
      {
        img: ironMike,
        link: "https://ironmike.netlify.app/",
        title: "Iron Mike",
      },
      {
        img: bebeSol,
        link: "https://bebeonsol.netlify.app/",
        title: "Bebe on Sol",
      },
      {
        img: dejiSol,
        link: "https://dejicoin.netlify.app/",
        title: "Deji Coin",
      },
      { img: vampToken, link: "https://www.vampcoin.xyz/", title: "Vamp Coin" },
    ],
    "AI Web App | SAAS Platforms": [
      { img: askai, link: "https://www.askx.ai/", title: "Ask X AI" },
      {
        img: hyperwrite,
        link: "https://www.hyperwriteai.com/",
        title: "Hyperwrite AI",
      },
    ],
    // "Design Projects": [
    //   { img: design1, title: "Design 1" },
    //   { img: design2, title: "Design 2" },
    //   { img: design3, title: "Design 3" },
    //   { img: design4, title: "Design 4" },
    //   { img: design5, title: "Design 5" },
    //   { img: design6, title: "Design 6" },
    //   { img: design7, title: "Design 7" },
    //   { img: design8, title: "Design 8" },
    //   { img: design9, title: "Design 9" },
    // ],
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#100c15] to-[#181023] py-20 mt-6">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Our Portfolio
        </h2>

        <div className="space-y-16">
          {Object.entries(projects).map(([category, projectList]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-semibold mb-6">{category}</h3>
              <ProjectSlider projects={projectList} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
