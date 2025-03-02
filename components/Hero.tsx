"use client";

import { useEffect, useState, useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { type Engine } from "tsparticles-engine";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Badge from "./Badge";
import Video from "./Video";

export default function Hero() {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const particlesSettingsConfig = {
    fullScreen: false,
    particles: {
      number: {
        value: 15,
      },
      size: {
        value: 400,
      },
      move: {
        enable: true,
        speed: 2,
      },
      color: {
        value: ["#58F1FF", "#5F83F0", "#E54BDA", "#FF8D29", "#F83A31", "#58F1FF", "#5F83F0", "#E54BDA", "#FF8D29", "#F83A31", "#58F1FF", "#5F83F0", "#E54BDA", "#FF8D29", "#F83A31"],
      },
      line_linked: {
        enable: true,
        color: "#ffffff",
        opacity: 1,
      },
    },
  };

  return (
    <div className="flex flex-col items-center relative justify-center pb-[100px]">
      <div className="absolute -z-10 w-full h-full">
        {/* colours layer */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesSettingsConfig}
          className="w-full h-full"
        />
      </div>
      <div className="absolute w-full h-[calc(100%+60px)] top-[-70px] bg-[#0000008e] backdrop-blur-[150px] -z-1">
        {/* blur layer */}
      </div>
        <div className={`flex flex-col items-center gap-[2rem] text-center w-full transition-opacity ease-in duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <h1>The AI Data Analyst</h1>
          <p className="max-w-[80%]">Ask questions, get instant charts and insights from your data.</p>
          <div className="flex flex-row justify-center align-center gap-[20px] my-[2rem]">
            <PrimaryButton link="/" text="Try free" />
            <SecondaryButton link="/" text="Book a demo" />
          </div>
          <div className="flex flex-row items-center justify-center width-full gap-2 flex-wrap mx-4">
            <Badge image="/assets/yc-logo.png" text="Y Combinator backed" />
            <Badge image="/assets/lock-icon.png" text="Enterprise Security" />
            <Badge image="/assets/shield-icon.png" text="100% Data Privacy" />
          </div>
          <div className="w-full">
            <Video link="/" video="/assets/camelai-gif.mp4" poster="/assets/camelai-gif-poster.jpg" />
          </div>
      </div>
    </div>
  );
}
