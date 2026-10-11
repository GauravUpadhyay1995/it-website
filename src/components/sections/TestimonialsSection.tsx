"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-[#0D1017] relative overflow-hidden py-24 md:py-32">
      {/* Sincweb Exact Luminous Ambient Glows (Left & Right Aurora) */}
      {/* Left Glow */}
      <div className="pointer-events-none absolute top-[-24%] left-[-9%] z-0 size-[150px] lg:size-[360px] rotate-[-109deg] rounded-[836px] bg-white opacity-40 mix-blend-plus-lighter blur-[70px]" />
      <div className="pointer-events-none absolute top-[-15%] left-[-2%] z-0 size-[180px] lg:size-[380px] rotate-[-109deg] rounded-[836px] bg-[#227EFF] opacity-85 blur-[140px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute top-[-24%] right-[-9%] z-0 size-[150px] lg:size-[360px] rotate-[-109deg] rounded-[836px] bg-white opacity-40 mix-blend-plus-lighter blur-[70px]" />
      <div className="pointer-events-none absolute top-[-15%] right-[-2%] z-0 size-[180px] lg:size-[380px] rotate-[-109deg] rounded-[836px] bg-[#227EFF] opacity-85 blur-[140px]" />

      <div className="main-container relative z-10 text-center pb-14 space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sora-heading-2 text-white/90 font-normal tracking-[-0.035em]"
        >
          Real stories. <span className="text-white/30">real impact.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-tagline-2 font-inter text-white/60 max-w-[500px] mx-auto"
        >
          See how businesses have unlocked efficiency and growth through Sincweb’s AI automation—straight from the voices of those we’ve helped.
        </motion.p>
      </div>

      {/* Infinite Testimonials Horizontal Scrolling Marquee */}
      <div className="relative z-10 overflow-hidden py-4">
        <div className="animate-marquee-left flex items-stretch gap-6">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <article
              key={`testimonial-${idx}`}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-2xl w-[340px] sm:w-[400px] shrink-0 flex flex-col justify-between hover:border-[#5A9FFF]/40 hover:bg-white/[0.05] transition-all duration-300 shadow-xl group"
            >
              {/* Star Rating & Quote */}
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#FFFA6B]">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFFA6B]" />
                  ))}
                </div>
                <p className="text-sm font-inter text-white/80 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20"
                />
                <div>
                  <h4 className="font-sora text-sm font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs font-ibm-plex-mono text-[#5DDCF6]">
                    {item.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-14 relative z-10">
        <MagneticButton href="#contact" text="More testimonials" />
      </div>
    </section>
  );
}
