"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { TextReveal } from "../common/TextReveal";

// Exact icon rows matching Sincweb Infotech
const marqueeRow1 = [
  { name: "Astro", icon: "/images/icons/astro.svg" },
  { name: "Slack", icon: "/images/icons/slack.svg" },
  { name: "Netflix", icon: "/images/icons/netflix.svg" },
  { name: "Opera", icon: "/images/icons/opera.svg" },
];

const marqueeRow2 = [
  { name: "Astro", icon: "/images/icons/astro.svg" },
  { name: "Slack", icon: "/images/icons/slack.svg" },
  { name: "Netflix", icon: "/images/icons/netflix.svg" },
  { name: "Opera", icon: "/images/icons/opera.svg" },
  { name: "GitHub", icon: "/images/icons/github.svg", invert: true },
  { name: "Spotify", icon: "/images/icons/spotify.svg" },
  { name: "Notion", icon: "/images/icons/notion.svg" },
];

const marqueeRow3 = [
  { name: "YouTube", icon: "/images/icons/youtube.svg" },
  { name: "WhatsApp", icon: "/images/icons/whatsapp.svg" },
  { name: "King Master", icon: "/images/icons/king-master.svg" },
  { name: "Zoom", icon: "/images/icons/zoom.svg" },
];

// Continuous seamless Marquee Row
function InfiniteMarqueeRow({
  items,
  direction = "left",
  speed = "28s",
}: {
  items: { name: string; icon: string; invert?: boolean }[];
  direction?: "left" | "right";
  speed?: string;
}) {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div
        className={direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
        style={{ animationDuration: speed }}
      >
        {repeated.map((item, idx) => (
          <figure
            key={idx}
            className="bg-[#171B24] border border-white/10 flex size-16 md:size-[72px] items-center justify-center rounded-full p-3.5 mr-6 shrink-0 shadow-lg transition-transform hover:scale-110"
          >
            <img
              src={item.icon}
              alt={item.name}
              className={`size-10 object-contain ${item.invert ? "invert" : ""}`}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

// Data Sync Interactive Node Pipeline with Continuous Traveling Light Pulses
function DataSyncConnectorGraph() {
  return (
    <figure className="relative z-10 pt-16 pb-6 select-none">
      <div className="features-integration-pill relative mx-auto h-28 max-w-[324px]">
        {/* LEFT pill (Sync) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <div className="border border-white/15 bg-[#141923] text-xs font-ibm-plex-mono flex items-center justify-center gap-1.5 rounded-full px-4 pt-1.5 pb-2 text-white shadow-xl">
            <span className="bg-[#227EFF] h-2 w-2 rounded-full shadow-[0_0_10px_#227EFF] animate-pulse"></span>
            <span className="font-normal">Sync</span>
          </div>
        </div>

        {/* CENTER TOP pill (Process) */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 z-10">
          <div className="border border-white/15 bg-[#141923] text-xs font-ibm-plex-mono flex w-24 items-center justify-start gap-1.5 rounded-full px-3.5 pt-1.5 pb-2 text-white shadow-xl">
            <span className="bg-[#FFFA6B] h-2 w-2 rounded-full shadow-[0_0_10px_#FFFA6B] animate-pulse"></span>
            <span className="font-normal">Process</span>
          </div>
        </div>

        {/* CENTER BOTTOM pill (Flow) */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10">
          <div className="border border-white/15 bg-[#141923] text-xs font-ibm-plex-mono flex w-24 items-center justify-start gap-1.5 rounded-full px-3.5 py-1.5 text-white shadow-xl">
            <span className="bg-[#5DDCF6] h-2 w-2 rounded-full shadow-[0_0_10px_#5DDCF6] animate-pulse"></span>
            <span className="font-normal">Flow</span>
          </div>
        </div>

        {/* RIGHT pill (Grow) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <div className="border border-white/15 bg-[#141923] text-xs font-ibm-plex-mono flex items-center justify-center gap-1.5 rounded-full px-4 pt-1.5 pb-2 text-white shadow-xl">
            <span className="bg-[#22C55E] h-2 w-2 rounded-full shadow-[0_0_10px_#22C55E] animate-pulse"></span>
            <span className="font-normal">Grow</span>
          </div>
        </div>

        {/* SVG Connectors with Exact Sincweb Bezier Curves & Traveling Light Pulses */}
        {/* Connector 1: Sync → Process */}
        <svg
          className="absolute top-[14px] left-[60px] z-0 h-[37px] w-16 pointer-events-none"
          viewBox="0 0 59 25"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow-1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0.999029 24.5H26.9087C34.1358 24.5 40.9781 21.2433 45.5355 15.6342L57.832 0.5"
            stroke="#7C8EA5"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <circle r="2.5" fill="#FFFFFF" filter="url(#glow-1)">
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              path="M0.999029 24.5H26.9087C34.1358 24.5 40.9781 21.2433 45.5355 15.6342L57.832 0.5"
            />
          </circle>
        </svg>

        {/* Connector 2: Sync → Flow */}
        <svg
          className="absolute bottom-[14px] left-[60px] z-0 h-[37px] w-16 pointer-events-none"
          viewBox="0 0 59 32"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow-2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0.332031 0.5H24.87C32.9592 0.5 40.5041 4.57491 44.9399 11.3394L57.832 31"
            stroke="#7C8EA5"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <circle r="2.5" fill="#FFFFFF" filter="url(#glow-2)">
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              path="M0.332031 0.5H24.87C32.9592 0.5 40.5041 4.57491 44.9399 11.3394L57.832 31"
            />
          </circle>
        </svg>

        {/* Connector 3: Process → Grow */}
        <svg
          className="absolute top-[13px] right-[60px] z-0 h-[37px] w-16 pointer-events-none"
          viewBox="0 0 59 25"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow-3" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M1.33203 0.5 L13.6286 15.6342 C18.1859 21.2433 25.0282 24.5 32.2553 24.5 H58.332"
            stroke="#7C8EA5"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <circle r="2.5" fill="#FFFFFF" filter="url(#glow-3)">
            <animateMotion
              dur="2.2s"
              begin="1.1s"
              repeatCount="indefinite"
              path="M1.33203 0.5 L13.6286 15.6342 C18.1859 21.2433 25.0282 24.5 32.2553 24.5 H58.332"
            />
          </circle>
        </svg>

        {/* Connector 4: Flow → Grow */}
        <svg
          className="absolute right-[60px] bottom-[14px] z-0 h-[37px] w-16 pointer-events-none"
          viewBox="0 0 59 32"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow-4" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M1.33203 31 L14.2242 11.3394 C18.66 4.57491 26.2049 0.5 34.2941 0.5 H58.832"
            stroke="#7C8EA5"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <circle r="2.5" fill="#FFFFFF" filter="url(#glow-4)">
            <animateMotion
              dur="2.2s"
              begin="1.1s"
              repeatCount="indefinite"
              path="M1.33203 31 L14.2242 11.3394 C18.66 4.57491 26.2049 0.5 34.2941 0.5 H58.832"
            />
          </circle>
        </svg>
      </div>
    </figure>
  );
}

// Sincweb Vertical Task Progress Bars with Hatched Pattern & Glow
function TaskProgressBars() {
  return (
    <div className="flex items-center justify-between gap-x-2.5 pt-2">
      {/* Bar 01 - Blue */}
      <div className="relative flex h-[185px] w-full items-center justify-between overflow-hidden rounded-[6px] bg-white/[0.02] border border-white/5">
        <img
          src="/images/vactor-shape/vertical-pattern.svg"
          alt="pattern"
          className="size-full object-cover opacity-60 pointer-events-none"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "30%" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#227EFF] shadow-[0_0_20px_#227EFF] absolute bottom-0 left-0 z-1 w-full rounded-[4px]"
        />
      </div>

      {/* Bar 02 - Dark / Slate */}
      <div className="relative flex h-[185px] w-full items-center justify-between overflow-hidden rounded-[6px] bg-white/[0.02] border border-white/5">
        <img
          src="/images/vactor-shape/vertical-pattern.svg"
          alt="pattern"
          className="size-full object-cover opacity-60 pointer-events-none"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "65%" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#1E293B] border border-white/10 absolute bottom-0 left-0 z-1 w-full rounded-[4px]"
        />
      </div>

      {/* Bar 03 - Lemon Yellow */}
      <div className="relative flex h-[185px] w-full items-center justify-between overflow-hidden rounded-[6px] bg-white/[0.02] border border-white/5">
        <img
          src="/images/vactor-shape/vertical-pattern.svg"
          alt="pattern"
          className="size-full object-cover opacity-60 pointer-events-none"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "45%" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFA6B] shadow-[0_0_20px_rgba(255,250,107,0.8)] absolute bottom-0 left-0 z-1 w-full rounded-[4px]"
        />
      </div>

      {/* Bar 04 - Cyan */}
      <div className="relative flex h-[185px] w-full items-center justify-between overflow-hidden rounded-[6px] bg-white/[0.02] border border-white/5">
        <img
          src="/images/vactor-shape/vertical-pattern.svg"
          alt="pattern"
          className="size-full object-cover opacity-60 pointer-events-none"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "30%" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#5DDCF6] shadow-[0_0_22px_#5DDCF6] absolute bottom-0 left-0 z-1 w-full rounded-[4px]"
        />
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Sincweb Cursor Glow Tracking for Glowing Cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll<HTMLElement>(".glowing-card-item");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--xPos", `${x}px`);
      card.style.setProperty("--yPos", `${y}px`);
    });
  };

  return (
    <section id="features" className="bg-[#0D1017] py-16 md:py-24 lg:py-28 xl:py-32 relative">
      <div className="main-container" ref={containerRef} onMouseMove={handleMouseMove}>
        {/* Section Heading with Text Reveal */}
        <div className="mb-13 space-y-1.5 text-center lg:mb-19 xl:space-y-3">
          <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 font-normal text-white/90 xl:tracking-[-2.4px]">
            <TextReveal
              text="Automate more. work smarter."
              dimmedWords={["work", "smarter."]}
              wordDelay={0.06}
            />
          </h2>
          <p className="text-tagline-2 font-inter text-white/60 max-w-[490px] mx-auto leading-relaxed">
            Boost productivity by eliminating repetitive tasks with AI-powered tools— designed for speed, accuracy, and effortless integration.
          </p>
        </div>

        {/* 3-Column Glowing Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Column 1: Card 1 - Workflow Automation Interactive Timeline */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glowing-card-item rounded-2xl bg-white/[0.03] border border-white/10 p-7 lg:p-9 relative overflow-hidden flex flex-col justify-between min-h-[640px] group shadow-xl"
          >
            {/* Sincweb Top-Right Glowing Cyan/White Aurora */}
            <div className="pointer-events-none absolute top-[-3%] right-[-20%] z-0 size-40 bg-white opacity-40 mix-blend-plus-lighter blur-[30px]" />
            <div className="pointer-events-none absolute top-[-4.5%] right-[-13%] z-0 size-36 bg-[#227EFF] opacity-90 blur-[45px]" />

            {/* Steps Timeline */}
            <div className="relative z-10 space-y-3 pt-2">
              {/* Step 01 */}
              <div className="text-center space-y-2.5">
                <span className="text-[#227EFF] text-xs font-ibm-plex-mono inline-flex items-center gap-1.5 rounded-md bg-[#227EFF]/10 border border-[#227EFF]/20 px-2.5 py-1">
                  <svg width="12" height="16" viewBox="0 0 15 20" fill="none" className="stroke-[#227EFF]">
                    <path d="M4.83203 18.75L6.08203 12.5L1.08203 10.625L9.83203 1.25L8.58203 7.5L13.582 9.375L4.83203 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Launch
                </span>
                <div className="bg-[#121620] border border-white/10 rounded-md px-5 py-3 text-xs text-white/80 font-sora shadow-sm">
                  New application is approved
                </div>
                <div className="flex justify-center">
                  <svg width="7" height="36" viewBox="0 0 7 43" fill="none">
                    <path d="M0.665 3C0.665 4.47 1.86 5.67 3.33 5.67C4.8 5.67 6 4.47 6 3C6 1.53 4.8 0.33 3.33 0.33C1.86 0.33 0.665 1.53 0.665 3ZM3.33 43L6.22 38H0.45L3.33 43ZM3.33 3V38.5" stroke="#7C8EA5" strokeOpacity="0.3" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Step 02 */}
              <div className="text-center space-y-2.5">
                <span className="text-[#FFFA6B] text-xs font-ibm-plex-mono inline-flex items-center gap-1.5 rounded-md bg-[#FFFA6B]/10 border border-[#FFFA6B]/20 px-2.5 py-1">
                  <svg width="12" height="16" viewBox="0 0 15 20" fill="none" className="stroke-[#FFFA6B]">
                    <path d="M4.83203 18.75L6.08203 12.5L1.08203 10.625L9.83203 1.25L8.58203 7.5L13.582 9.375L4.83203 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Launch
                </span>
                <div className="bg-[#121620] border border-white/10 rounded-md px-5 py-3 text-left space-y-1 shadow-sm">
                  <h4 className="text-xs text-white/80 font-medium">Send welcome email</h4>
                  <p className="text-[11px] text-white/40 leading-tight">Include links to employee handbook initial documents</p>
                </div>
                <div className="flex justify-center">
                  <svg width="7" height="36" viewBox="0 0 7 43" fill="none">
                    <path d="M0.665 3C0.665 4.47 1.86 5.67 3.33 5.67C4.8 5.67 6 4.47 6 3C6 1.53 4.8 0.33 3.33 0.33C1.86 0.33 0.665 1.53 0.665 3ZM3.33 43L6.22 38H0.45L3.33 43ZM3.33 3V38.5" stroke="#7C8EA5" strokeOpacity="0.3" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Step 03 */}
              <div className="text-center space-y-2.5">
                <span className="text-[#A855F7] text-xs font-ibm-plex-mono inline-flex items-center gap-1.5 rounded-md bg-[#A855F7]/10 border border-[#A855F7]/20 px-2.5 py-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="stroke-[#A855F7]">
                    <path d="M20 6L9 17L4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Check if/else
                </span>
                <div className="bg-[#121620] border border-white/10 rounded-md px-5 py-3 text-xs text-white/80 font-sora shadow-sm">
                  Review application status
                </div>
                <div className="flex justify-center">
                  <svg width="7" height="36" viewBox="0 0 7 43" fill="none">
                    <path d="M0.665 3C0.665 4.47 1.86 5.67 3.33 5.67C4.8 5.67 6 4.47 6 3C6 1.53 4.8 0.33 3.33 0.33C1.86 0.33 0.665 1.53 0.665 3ZM3.33 43L6.22 38H0.45L3.33 43ZM3.33 3V38.5" stroke="#7C8EA5" strokeOpacity="0.3" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Step 04 */}
              <div className="text-center space-y-2.5 opacity-60">
                <span className="text-[#22C55E] text-xs font-ibm-plex-mono inline-flex items-center gap-1.5 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 px-2.5 py-1">
                  Launch
                </span>
                <div className="bg-[#121620] border border-white/10 rounded-md px-5 py-3 text-xs text-white/80 font-sora shadow-sm">
                  Create onboarding checklist
                </div>
              </div>
            </div>

            {/* Sincweb Progressive Bottom Blur Mask */}
            <div className="pointer-events-none absolute inset-x-0 bottom-24 h-32 bg-gradient-to-t from-[#0D1017] via-[#0D1017]/80 to-transparent z-[5]" />

            {/* Bottom Title Info */}
            <div className="relative z-10 pt-6 border-t border-white/10 mt-auto">
              <h3 className="text-sora-heading-5 text-white/90 font-normal mb-1">
                Workflow automation
              </h3>
              <p className="text-tagline-3 text-white/50">
                Replace manual work with automated processes that adapt to your needs—no coding required.
              </p>
            </div>
          </motion.article>

          {/* Column 2: Card 2 (Task Progress) + Card 3 (Enterprise Security) */}
          <div className="space-y-8">
            {/* Card 2: AI task orchestration / Task Progress */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glowing-card-item rounded-2xl bg-white/[0.03] border border-white/10 p-7 relative overflow-hidden shadow-xl group"
            >
              {/* Sincweb Top-Left Corner Glow */}
              <div className="pointer-events-none absolute top-[-5%] left-[-25%] z-0 size-36 bg-white opacity-30 mix-blend-plus-lighter blur-[30px]" />
              <div className="pointer-events-none absolute top-[-6.5%] left-[-17%] z-0 size-32 bg-[#227EFF] opacity-80 blur-[45px]" />

              <div className="relative z-10 bg-[#0D1017]/80 rounded-xl p-4 sm:p-5 border border-white/10 mb-6 overflow-hidden">
                <h4 className="font-sora text-sm text-white/90 mb-3">Task Progress</h4>
                <div>
                  <div className="flex items-center justify-between text-[11px] font-ibm-plex-mono text-white/40 pb-2">
                    <span>5%</span>
                    <span>10%</span>
                    <span>-6%</span>
                  </div>
                  <div className="bg-white/10 my-1.5 h-px w-full"></div>
                  <div className="flex items-center justify-between text-[11px] font-ibm-plex-mono text-white/40 pb-3">
                    <span>Prototype</span>
                    <span>Design</span>
                    <span>Development</span>
                  </div>

                  {/* Sincweb Animated Vertical Progress Columns */}
                  <TaskProgressBars />
                </div>
              </div>

              <div>
                <h3 className="text-sora-heading-5 text-white/90 font-normal mb-1">
                  AI task orchestration
                </h3>
                <p className="text-tagline-3 text-white/50">
                  Intelligently distribute and route workload across autonomous micro-agents and human teams.
                </p>
              </div>
            </motion.article>

            {/* Card 3: Enterprise Security Lock */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glowing-card-item rounded-2xl bg-white/[0.03] border border-white/10 p-7 relative overflow-hidden shadow-xl group text-center"
            >
              {/* Sincweb Top-Left Corner Glow */}
              <div className="pointer-events-none absolute top-[-25%] left-[-25%] z-0 size-36 bg-white opacity-30 mix-blend-plus-lighter blur-[30px]" />
              <div className="pointer-events-none absolute top-[-23.5%] left-[-17%] z-0 size-32 bg-[#227EFF] opacity-80 blur-[45px]" />

              {/* Sincweb Concentric Pulsing Lock with lock.svg */}
              <div className="relative w-36 h-36 mx-auto my-4 flex items-center justify-center">
                <div className="lock-ring-1 absolute inset-0 rounded-full border border-[#5A9FFF]/30 bg-[#5A9FFF]/5"></div>
                <div className="lock-ring-2 absolute inset-4 rounded-full border border-[#5DDCF6]/40 bg-[#5DDCF6]/10"></div>
                <figure className="relative z-10 h-[52px] w-[50px] flex items-center justify-center">
                  <img
                    src="/images/vactor-shape/lock.svg"
                    alt="Enterprise Security Lock"
                    className="size-full object-contain drop-shadow-[0_0_25px_rgba(90,159,255,0.9)]"
                  />
                </figure>
              </div>

              <div className="text-left mt-6">
                <h3 className="text-sora-heading-5 text-white/90 font-normal mb-1">
                  Enterprise-grade security
                </h3>
                <p className="text-tagline-3 text-white/50">
                  Your data is protected with end-to-end encryption and industry-leading compliance standards.
                </p>
              </div>
            </motion.article>
          </div>

          {/* Column 3: Card 4 (3 Marquee Rows) + Card 5 (Data Sync Node Pipeline) */}
          <div className="space-y-8">
            {/* Card 4: Real-time notifications (Infinite 3-Row Alternating Sliding Marquee) */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glowing-card-item rounded-2xl bg-white/[0.03] border border-white/10 p-7 lg:p-8 relative overflow-hidden shadow-xl group"
            >
              {/* Sincweb Top-Right Corner Glow */}
              <div className="pointer-events-none absolute top-[-12%] right-[-24%] z-0 size-36 bg-white opacity-30 mix-blend-plus-lighter blur-[30px]" />
              <div className="pointer-events-none absolute top-[-10.5%] right-[-17%] z-0 size-32 bg-[#227EFF] opacity-80 blur-[45px]" />

              {/* 3 Alternating Continuous Sliding Streams of App Badges */}
              <div className="relative z-10 space-y-4 py-2 mb-4">
                <InfiniteMarqueeRow items={marqueeRow1} direction="left" speed="26s" />
                <InfiniteMarqueeRow items={marqueeRow2} direction="right" speed="32s" />
                <InfiniteMarqueeRow items={marqueeRow3} direction="left" speed="28s" />
              </div>

              <div>
                <h3 className="text-sora-heading-5 text-white/90 font-normal mb-1">
                  Real-time notifications
                </h3>
                <p className="text-tagline-3 text-white/50">
                  Automatically send updates via Slack, email, or chat based on real-time events or conditions.
                </p>
              </div>
            </motion.article>

            {/* Card 5: Data sync & processing (Traveling Light Pulse Node Tree) */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glowing-card-item rounded-2xl bg-white/[0.03] border border-white/10 p-7 lg:p-8 relative overflow-hidden shadow-xl group"
            >
              {/* Sincweb Top-Right Corner Glow */}
              <div className="pointer-events-none absolute top-[-12%] right-[-24%] z-0 size-36 bg-white opacity-30 mix-blend-plus-lighter blur-[30px]" />
              <div className="pointer-events-none absolute top-[-10.5%] right-[-17%] z-0 size-32 bg-[#227EFF] opacity-80 blur-[45px]" />

              {/* Sincweb Animated Flow Connector Graph */}
              <DataSyncConnectorGraph />

              <div>
                <h3 className="text-sora-heading-5 text-white/90 font-normal mb-1">
                  Data sync &amp; processing
                </h3>
                <p className="text-tagline-3 text-white/50">
                  Seamlessly connect and process data from spreadsheets, CRMs, and databases—on autopilot.
                </p>
              </div>
            </motion.article>
          </div>
        </div>

        {/* Explore Features CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <MagneticButton href="#contact" text="Explore features" />
        </div>
      </div>
    </section>
  );
}
