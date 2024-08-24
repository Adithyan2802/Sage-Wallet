"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { SparklesCore } from "../../components/ui/sparkles";
import { Spotlight } from "../../components/ui/spotlight";
import { BorderBeam } from "../../components/ui/border-beam";
import BlurFade from "../../components/ui/blur-fade";
import ShinyButton from "../../components/ui/shiny-button";
import { GlareCard } from "../../components/ui/glare-card";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";
import { useState } from "react";
import ShineBorder from "../../components/ui/shine-border";

function Hero() {
  const words = "Take Charge of Your Finances, Effortlessly";
  const [hovered, setHovered] = useState(false);

  return (
    <div className="p-8 mt-10 flex items-center h-auto w-screen flex-col ">
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

      <section id="headline">
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

      <section id="getStartedButton">
        <Link href="/sign-up">
          <ShinyButton text="Get Started Now" className="mt-16" />
        </Link>
      </section>

      <section
        id="sample"
        className="flex justify-center items-center flex-col"
      >
        <div className="relative w-5/6 h-3/5 rounded-2xl mt-24 max-w-screen-2xl ">
          <BlurFade delay={1} inView className={"rounded-2xl "}>
            <img
              className="size-full rounded-2xl object-contain "
              src={"/sample.png"}
            />
            <BorderBeam colorFrom="#6d28d9" colorTo="#d8b4fe" borderWidth={2} />
          </BlurFade>
        </div>
        <div
          className=" w-full h-96 -mt-72 z-10 max-sm:-mt-32 max-sm:h-56 max-md:-mt-52"
          style={{
            background: "linear-gradient(to top, #0a0a0a 80%, #00000003)",
          }}
        ></div>
      </section>

      <section id="bullet">
        <h2 className="text-center mb-10 uppercase tracking-widest text-sm md:text-base lg:text-xl">
          Key-Features of the app
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-96">
          <ShineBorder
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#f59e0b", "#fde047", "#fefce8"]}
          >
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="h-full w-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black relative rounded-xl"
            >
              <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
                Budget Management
              </p>
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full absolute inset-0"
                  >
                    <CanvasRevealEffect
                      animationSpeed={5}
                      containerClassName="bg-transparent"
                      colors={[[234, 179, 8]]}
                      opacities={[
                        0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1,
                      ]}
                      dotSize={2}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </div>
          </ShineBorder>

          <ShineBorder
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#f59e0b", "#fde047", "#fefce8"]}
          >
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="h-full w-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black relative rounded-xl"
            >
              <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
                Income & Expense Tracker
              </p>
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full absolute inset-0"
                  >
                    <CanvasRevealEffect
                      animationSpeed={5}
                      containerClassName="bg-transparent"
                      colors={[[234, 179, 8]]}
                      opacities={[
                        0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1,
                      ]}
                      dotSize={2}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </div>
          </ShineBorder>

          <ShineBorder
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#f59e0b", "#fde047", "#fefce8"]}
          >
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="h-full w-full flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black  relative rounded-xl"
            >
              <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
                Financial Insights
              </p>
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full absolute inset-0"
                  >
                    <CanvasRevealEffect
                      animationSpeed={5}
                      containerClassName="bg-transparent"
                      colors={[[234, 179, 8]]}
                      opacities={[
                        0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1,
                      ]}
                      dotSize={2}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </div>
          </ShineBorder>
        </div>
      </section>
    </div>
  );
}

export default Hero;
