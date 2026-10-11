"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { TextReveal } from "../common/TextReveal";

export function CtaSection() {
  return (
    <section className="bg-[#0D1017] relative overflow-hidden pt-20 pb-16 md:pb-[100px] lg:pt-28">
      {/* Background Globe Image with seamless radial mask and edge feathering */}
      <div className="pointer-events-none absolute inset-0 size-full select-none z-0 overflow-hidden">
        <img
          src="/images/opai-img-43.png"
          alt="bg-globe"
          className="w-full h-full object-cover mix-blend-screen opacity-75"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 75% at 50% 45%, black 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 75% at 50% 45%, black 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 100%)",
          }}
        />
        {/* Soft Edge Gradient Dissolves for 100% Seamless Color Matching */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#0D1017] via-[#0D1017]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0D1017] via-[#0D1017]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#0D1017] via-[#0D1017]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-[#0D1017] via-[#0D1017]/70 to-transparent pointer-events-none" />
      </div>

      {/* Ambient Radial Gradient Halo */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-50 select-none">
        <div className="w-[800px] h-[550px] rounded-full bg-gradient-to-t from-[#5A9FFF]/20 via-[#5DDCF6]/10 to-transparent blur-[140px]" />
      </div>

      <div className="main-container relative z-10 grid h-full place-items-end md:min-h-[662px]">
        {/* Content */}
        <div className="relative z-10 mx-auto space-y-10 md:space-y-12 text-center max-w-3xl pb-10">
          <div className="space-y-3">
            <h2 className="text-sora-heading-2 text-white/90 font-normal tracking-[-0.035em] leading-tight">
              <TextReveal
                text="Turn content Into videos the smarter way"
                dimmedWords={["the", "smarter", "way"]}
                wordDelay={0.06}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-tagline-2 font-inter text-white/60 mx-auto w-full max-w-[360px] leading-relaxed"
            >
              No video editing skills? No problem. OptimAI handles the hard part.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto w-[85%] text-center md:w-auto"
          >
            <MagneticButton href="#contact" text="learn more" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
