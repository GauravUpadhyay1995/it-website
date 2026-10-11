"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { TextReveal } from "../common/TextReveal";

// Official vector icon list matching sincwebinfotech.com live website exactly
const row1Icons = [
  { name: "WhatsApp", icon: "/images/icons/whatsapp.svg" },
  { name: "Telegram", icon: "/images/icons/telegram.svg" },
  { name: "TikTok", icon: "/images/icons/tiktok.svg" },
  { name: "X", icon: "/images/icons/x.svg" },
  { name: "Pinterest", icon: "/images/icons/pinterest.svg" },
  { name: "Reddit", icon: "/images/icons/reddit.svg" },
  { name: "Snapchat", icon: "/images/icons/snapchat.svg" },
  { name: "Vimeo", icon: "/images/icons/vimeo.svg" },
  { name: "Zoom", icon: "/images/icons/zoom.svg" },
  { name: "Slack", icon: "/images/icons/slack.svg" },
  { name: "Netflix", icon: "/images/icons/netflix.svg" },
  { name: "Opera", icon: "/images/icons/opera.svg" },
  { name: "GitHub", icon: "/images/icons/github.svg", invert: true },
];

const row2Icons = [
  { name: "Mistral AI", icon: "/images/icons/mistral-ai.svg" },
  { name: "Music", icon: "/images/icons/music.svg" },
  { name: "Notion", icon: "/images/icons/notion.svg" },
  { name: "OpenAI", icon: "/images/icons/open-ai.svg", invert: true },
  { name: "Stripe", icon: "/images/icons/stripe.svg" },
  { name: "Suno", icon: "/images/icons/suno.svg", invert: true },
  { name: "Perplexity AI", icon: "/images/icons/perplexity-ai.svg" },
  { name: "Jira", icon: "/images/icons/jira-status-page.svg" },
  { name: "Shopify", icon: "/images/icons/shopify.svg" },
  { name: "Google Meet", icon: "/images/icons/google-meet.svg" },
  { name: "Master Card", icon: "/images/icons/master-card.svg" },
  { name: "Grok AI", icon: "/images/icons/grok-ai.svg", invert: true },
];

export function IntegrationsSection() {
  return (
    <section className="bg-[#0D1017] relative overflow-hidden py-16 md:py-24 lg:py-32 xl:py-40">
      {/* Authentic Sincweb Background Gradient Graphic (opai-11.png) */}
      <div
        className="pointer-events-none absolute -bottom-[75%] left-1/2 h-full w-[160%] -translate-x-1/2 md:-bottom-[60%] lg:-bottom-[7%] select-none z-0"
        aria-hidden="true"
      >
        <img
          src="/images/gradient/opai-11.png"
          alt="Background gradient"
          className="pointer-events-none w-full object-cover select-none"
        />
      </div>

      <div className="main-container relative z-10 pb-10 md:pb-13 lg:pb-16 text-center">
        <div className="space-y-1.5 pb-5 text-center lg:space-y-3">
          <h2 className="xl:text-sora-heading-2 text-sora-heading-4 lg:text-sora-heading-3 font-normal text-white/90 xl:tracking-[-2.4px]">
            <TextReveal
              text="Connected where it matters most"
              dimmedWords={["matters", "most"]}
              wordDelay={0.08}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-tagline-2 font-inter text-white/60 max-w-[420px] mx-auto leading-relaxed pt-1"
          >
            OptimAI works with your favorite tools and platforms across development, design, productivity, and more.
          </motion.p>
        </div>
      </div>

      {/* Row 1: Marquee Left */}
      <div className="relative z-10 overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee-left flex items-center">
          {[...row1Icons, ...row1Icons, ...row1Icons, ...row1Icons].map((tool, idx) => (
            <figure
              key={`row1-${idx}`}
              className="bg-[#171B24] border border-white/10 flex size-14 md:size-16 lg:size-[72px] items-center justify-center rounded-full p-3.5 mr-6 md:mr-10 lg:mr-[42px] shrink-0 shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
              title={tool.name}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className={`size-8 md:size-9 lg:size-10 object-contain ${tool.invert ? "invert" : ""}`}
              />
            </figure>
          ))}
        </div>
      </div>

      {/* Row 2: Marquee Right */}
      <div className="relative z-10 overflow-hidden py-3 mt-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee-right flex items-center">
          {[...row2Icons, ...row2Icons, ...row2Icons, ...row2Icons].map((tool, idx) => (
            <figure
              key={`row2-${idx}`}
              className="bg-[#171B24] border border-white/10 flex size-14 md:size-16 lg:size-[72px] items-center justify-center rounded-full p-3.5 mr-6 md:mr-10 lg:mr-[42px] shrink-0 shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
              title={tool.name}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className={`size-8 md:size-9 lg:size-10 object-contain ${tool.invert ? "invert" : ""}`}
              />
            </figure>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="text-center pt-12 md:pt-16 relative z-20">
        <MagneticButton href="#contact" text="Explore integrations" />
      </div>
    </section>
  );
}
