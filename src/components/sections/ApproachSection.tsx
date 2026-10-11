"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";

const steps = [
  {
    number: "01",
    title: "Assess your unique business needs.",
    description: "We start by deeply understanding your goals, current workflows, data architecture, and bottleneck challenges.",
  },
  {
    number: "02",
    title: "Develop tailored AI strategies.",
    description: "Get customized architectures designed to align modern AI models and automation pipelines with your business objectives.",
  },
  {
    number: "03",
    title: "Implement cutting-edge solutions.",
    description: "Launch robust, production-ready AI tools, web systems, and intelligent microservices built to scale fast.",
  },
  {
    number: "04",
    title: "Monitor, analyze, and optimize performance.",
    description: "Track impact in real-time, fine-tune models continuously, and refine workflows for maximum measurable ROI.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="bg-[#0D1017] py-24 md:py-32">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sora-heading-2 text-white/90 font-normal tracking-[-0.035em] leading-tight"
            >
              From strategy to execution <span className="text-white/30">simplified.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-tagline-2 font-inter text-white/60 leading-relaxed"
            >
              We make AI adoption seamless with a proven 4-stage process that assesses your needs, builds tailored architectures, and delivers results that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <MagneticButton href="#contact" text="Get started now" />
            </motion.div>
          </div>

          {/* Right Column: 4-Step Timeline */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-6">
            {steps.map((step, idx) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-[#5A9FFF]/40 transition-all duration-300 group"
              >
                {/* Step Number + Connecting line */}
                <div className="flex flex-col items-center shrink-0">
                  <span className="font-ibm-plex-mono text-sm font-semibold text-[#5DDCF6] bg-[#5DDCF6]/10 px-2.5 py-1 rounded-md border border-[#5DDCF6]/20 group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-14 bg-gradient-to-b from-[#5DDCF6]/40 via-[#5A9FFF]/20 to-transparent mt-3"></div>
                  )}
                </div>

                {/* Step Details */}
                <div className="space-y-1.5 pt-0.5">
                  <h3 className="text-sora-heading-6 text-white/90 font-medium group-hover:text-[#5A9FFF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-inter text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
