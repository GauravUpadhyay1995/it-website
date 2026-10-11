"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { GeometricShape } from "../common/GeometricShape";
import { TextReveal } from "../common/TextReveal";

const services = [
  {
    id: "service-1",
    title: "Personalized\nAI tools.",
    shape: 1,
    image: null,
  },
  {
    id: "service-2",
    title: "ML model\ndeployment.",
    shape: 2,
    image: "/images/opai-avatar-img-61.png",
    gradient: "/images/gradient/opai-10.png",
  },
  {
    id: "service-3",
    title: "Analytics and\nvisualization tools.",
    shape: 3,
    image: null,
  },
  {
    id: "service-4",
    title: "AI-driven software\ndevelopment.",
    shape: 4,
    image: "/images/opai-img-62.png",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#0D1017] pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-28">
      <div className="main-container">
        {/* Section Heading */}
        <div className="mb-13 space-y-1.5 text-center lg:mb-19 lg:space-y-3">
          <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 font-normal tracking-[-2.4px] text-white/90">
            <TextReveal
              text="Tailored solutions. proven results."
              dimmedWords={["proven", "results."]}
              wordDelay={0.08}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-tagline-2 font-inter text-white/60 max-w-[420px] mx-auto leading-relaxed"
          >
            OptimAI works with your favorite tools and platforms across development, design, productivity, and more.
          </motion.p>
        </div>

        {/* 4-Cards Grid Matching Sincweb 100% */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative h-[420px] max-h-[420px] min-h-[420px] w-full rounded-2xl p-8 flex flex-col justify-between overflow-hidden border border-white/10 group transition-all duration-500 shadow-2xl bg-white/[0.03] hover:border-[#5A9FFF]/40"
            >
              {/* Optional Background Image */}
              {service.image && (
                <figure className="absolute inset-0 size-full pointer-events-none z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </figure>
              )}

              {/* Optional Gradient Orb */}
              {service.gradient && (
                <div className="absolute -top-[50%] -right-[80%] z-0 h-[400px] w-[400px] pointer-events-none select-none">
                  <img
                    src={service.gradient}
                    alt="Ambient glow"
                    className="size-full object-cover opacity-80"
                  />
                </div>
              )}

              {/* Progressive Bottom Blur Mask */}
              {service.image && (
                <div
                  className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-[#0D1017] via-[#0D1017]/85 to-transparent z-1 pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Top Vector Shape Glyph */}
              <div className="relative z-10">
                <GeometricShape shape={service.shape} className="w-14 h-14" />
              </div>

              {/* Bottom Card Title */}
              <div className="relative z-10">
                <h3 className="text-sora-heading-5 font-normal tracking-[-0.02em] text-white/90 whitespace-pre-line leading-tight">
                  {service.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View Services CTA Button */}
        <div className="mt-14 text-center">
          <MagneticButton href="#contact" text="View services" />
        </div>
      </div>
    </section>
  );
}
