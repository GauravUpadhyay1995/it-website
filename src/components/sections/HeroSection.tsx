"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { LaserFlow } from "../common/LaserFlow";
import { TextReveal } from "../common/TextReveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D1017]">
      {/* Exact WebGL LaserFlow Three.js Shader Beam from sincwebinfotech.com */}
      <LaserFlow
        color="#5A9FFF"
        horizontalSizing={0.4}
        verticalSizing={1.8}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
        beamX={0.1}
        beamY={0.0}
        tiltStrength={0.01}
        className="h-[330px] md:h-[380px] lg:h-[1280px] xl:h-[1336px]"
      />

      <div className="main-container relative z-10 pt-40 pb-14 md:pt-44 md:pb-20 lg:pt-48 xl:pb-28">
        {/* Top Text Block */}
        <div className="mb-14 lg:mb-28">
          <h1 className="font-sora text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-normal text-white leading-[1.08] tracking-[-0.035em] mb-4 overflow-hidden">
            <TextReveal
              text="Best Digital Marketing & Web Designing Agency"
              dimmedWords={["&", "Web", "Designing", "Agency"]}
              wordDelay={0.09}
              duration={0.8}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-base sm:text-lg text-white/60 max-w-[500px] leading-relaxed mb-8"
          >
            Streamline workflows, eliminate repetitive tasks, and unlock next-level efficiency with SINCWEB INFOTECH’s powerful automation tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-[85%] md:w-full"
          >
            <MagneticButton href="#contact" text="Get Started" />
          </motion.div>
        </div>

        {/* Hero Showcase Graphic Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1288px] mx-auto mt-4"
        >
          {/* Main Showcase Image Frame */}
          <figure className="relative z-[2] mx-auto size-full max-w-[1288px] overflow-hidden rounded-md lg:rounded-[14px] bg-[#0D1017]">
            <img
              src="/images/sincweb.webp"
              alt="SINCWEB INFOTECH Platform"
              className="size-full object-cover block"
              loading="eager"
              width={1288}
              height={798}
            />
          </figure>

          {/* Sincweb Original Effect Glow Backdrop - Exact Sizing matching live site */}
          <div className="pointer-events-none absolute top-[-11%] left-1/2 z-[1] h-[540px] md:h-[600px] lg:h-[640px] w-[calc(100%+50px)] -translate-x-1/2 md:w-[calc(100%+100px)] xl:w-[calc(100%+180px)] select-none overflow-hidden">
            <img
              src="/images/effect.png"
              alt="Hero Effect Glow"
              className="size-full object-fill opacity-95"
            />
          </div>

          {/* Sincweb Bottom Fade: Full-width progressive gradient dissolving image and glow into #0D1017 with 0 visible edges */}
          <div
            className="pointer-events-none absolute bottom-[-2%] -left-[15%] z-[3] h-[180px] w-[130%] lg:h-[465px] select-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(13, 16, 23, 0) 0%, rgba(13, 16, 23, 0.5) 30%, rgba(13, 16, 23, 0.9) 65%, #0D1017 94%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
