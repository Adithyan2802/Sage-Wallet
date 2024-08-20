"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { SparklesCore } from "../../components/ui/sparkles";
import { Spotlight } from "../../components/ui/spotlight";

function Hero() {
  const words = "Take Charge of Your Finances, Effortlessly";

  return (
    <section className="p-8 mt-10 flex items-center h-screen w-screen flex-col ">
      <div className="w-full absolute inset-0 h-screen -z-10">
        <Spotlight
          className="-top-40 left-0 w-screen h-screen md:left-60 md:-top-20"
          fill="#5b21b6"
        />

        <Spotlight
          className="top-40 left-full w-screen h-screen md:right-60 md:-top-20"
          fill="#5b21b6"
        />

        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#facc15"
        />
      </div>

      <div className="flex flex-col overflow-hidden text-center">
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words={words}
        />
        <br />
        <br />
        <p className="text-center  uppercase tracking-widest mb-4 text-sm md:text-base lg:text-xl">
          Track, Save, and Grow with AI-Driven Financial Wisdom
        </p>
      </div>
    </section>
  );
}

export default Hero;
