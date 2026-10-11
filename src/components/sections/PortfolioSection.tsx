"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { NumberFlow } from "../common/NumberFlow";
import { TextReveal } from "../common/TextReveal";

const caseStudies = [
  {
    id: "cs-1",
    title: "Smart Healthcare",
    subtitle: "AI-powered medical diagnostics & patient care",
    image: "/images/opai-img-100.jpg",
    fullWidth: true,
    metric1: { value: 85, suffix: "%", label: "Improved diagnostic accuracy" },
    metric2: { value: 50, suffix: "%", label: "Reduced wait times" },
  },
  {
    id: "cs-2",
    title: "FinTech Revolution",
    subtitle: "AI-powered trading & risk management",
    image: "/images/opai-img-101.jpg",
    fullWidth: false,
    metric1: { value: 92, suffix: "%", label: "Trading accuracy" },
    metric2: { value: 65, suffix: "%", label: "Risk reduction & efficiency" },
  },
  {
    id: "cs-3",
    title: "Retail Optimization",
    subtitle: "Predictive inventory & customer analytics",
    image: "/images/opai-img-102.jpg",
    fullWidth: false,
    metric1: { value: 78, suffix: "%", label: "Stock efficiency" },
    metric2: { value: 40, suffix: "%", label: "Cost reduction" },
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#0D1017] py-20 md:py-28 lg:py-36">
      <div className="main-container space-y-14 md:space-y-18">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-sora-heading-2 text-white/90 font-normal tracking-[-0.035em]">
            <TextReveal
              text="Real results. real transformations."
              dimmedWords={["transformations."]}
              wordDelay={0.09}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-tagline-2 font-inter text-white/60 max-w-[510px] mx-auto leading-relaxed"
          >
            Explore how Sorbit’s AI automation solutions have streamlined operations and delivered measurable impact across industries.
          </motion.p>
        </div>

        {/* Portfolio Grid Matching Sincweb 100% */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`col-span-12 ${item.fullWidth ? "col-span-12" : "lg:col-span-6"}`}
            >
              <div className="group relative block overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#121620] cursor-pointer">
                {/* Image Container */}
                <figure
                  className={`w-full overflow-hidden ${
                    item.fullWidth
                      ? "h-[440px] md:h-[540px] xl:h-[640px]"
                      : "h-[440px] md:h-[540px] xl:h-[720px]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-full object-cover scale-100 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-0.5"
                  />
                </figure>

                {/* Dark Gradient Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1017]/90 via-transparent to-transparent pointer-events-none"></div>

                {/* Center Hover Floating Frosted Arrow Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 md:size-18 rounded-xl bg-[#0D1017]/60 border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-2xl z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-white"
                  >
                    <path
                      d="M7 17L17 7M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Floating Bottom Glass Metrics Bar */}
                <div className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:left-6 lg:right-6 p-4 md:p-6 rounded-lg bg-[#0D1017]/75 border border-white/15 backdrop-blur-[20px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-10 shadow-2xl">
                  <div className="w-full md:w-[55%]">
                    <h3 className="text-sora-heading-5 font-normal tracking-[-0.02em] text-white/90 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-tagline-2 text-white/50 text-sm">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex w-full items-center justify-between md:justify-end gap-x-6 md:w-[45%] border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-6">
                    <div className="w-full md:w-[130px]">
                      <h4 className="text-sora-heading-6 inline-flex items-baseline font-normal text-white/90">
                        <NumberFlow value={item.metric1.value} suffix={item.metric1.suffix} />
                      </h4>
                      <p className="text-tagline-3 text-white/50 text-xs">
                        {item.metric1.label}
                      </p>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-white/10"></div>

                    <div className="w-full md:w-[130px]">
                      <h4 className="text-sora-heading-6 inline-flex items-baseline font-normal text-white/90">
                        <NumberFlow value={item.metric2.value} suffix={item.metric2.suffix} />
                      </h4>
                      <p className="text-tagline-3 text-white/50 text-xs">
                        {item.metric2.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Portfolio CTA */}
        <div className="text-center pt-8">
          <MagneticButton href="#contact" text="Explore all case studies" />
        </div>
      </div>
    </section>
  );
}
