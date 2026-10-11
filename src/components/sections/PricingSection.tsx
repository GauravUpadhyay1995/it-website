"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { NumberFlow } from "../common/NumberFlow";
import { TextReveal } from "../common/TextReveal";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Solo users & startups",
    priceMonthly: 0,
    priceYearly: 0,
    featured: false,
    features: [
      { text: "Basic workflows", active: true },
      { text: "10 automation runs/month", active: true },
      { text: "Core integrations", active: true },
      { text: "Community support", active: true },
      { text: "Custom API access", active: false },
      { text: "Dedicated account manager", active: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Great for teams & advanced users",
    priceMonthly: 99,
    priceYearly: 79,
    featured: true,
    features: [
      { text: "Unlimited active workflows", active: true },
      { text: "10,000 automation runs/month", active: true },
      { text: "All 50+ integrations", active: true },
      { text: "Priority 24/7 support", active: true },
      { text: "Custom webhook triggers", active: true },
      { text: "Advanced analytics dashboard", active: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Built for large-scale operations",
    priceMonthly: 499,
    priceYearly: 399,
    featured: false,
    features: [
      { text: "Custom LLM & ML deployment", active: true },
      { text: "Unlimited runs & executions", active: true },
      { text: "Dedicated VPC infrastructure", active: true },
      { text: "99.99% SLA guarantee", active: true },
      { text: "Custom security audit & SSO", active: true },
      { text: "Dedicated account manager", active: true },
    ],
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section id="pricing" className="bg-[#0D1017] pt-20 pb-24 md:pt-28 md:pb-36 lg:pt-36 lg:pb-48">
      <div className="main-container space-y-14 md:space-y-18">
        {/* Section Heading */}
        <div className="text-center space-y-1.5 md:space-y-3 lg:mx-auto lg:max-w-[680px]">
          <h2 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 font-normal tracking-[-2.4px] text-white/90">
            <TextReveal
              text={"Simple, transparent\npricing that scales with you"}
              dimmedWords={["pricing", "that", "scales", "with", "you"]}
              wordDelay={0.03}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-tagline-2 font-inter text-white/60 mx-auto max-w-[510px] leading-relaxed"
          >
            Whether you're launching or growing, choose a plan that delivers value without compromise.
          </motion.p>
        </div>

        {/* Pricing Switcher Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center"
        >
          <label className="inline-flex cursor-pointer items-center gap-3 select-none">
            <span
              onClick={() => setIsYearly(false)}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                !isYearly ? "text-white font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </span>

            <input
              type="checkbox"
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
              className="sr-only peer"
              aria-label="Toggle yearly billing"
            />

            {/* Toggle Capsule Track */}
            <div
              onClick={() => setIsYearly(!isYearly)}
              className="relative h-7 w-13 rounded-full bg-white/15 p-1 transition-colors duration-300 peer-checked:bg-[#5A9FFF]/25 border border-white/15 cursor-pointer flex items-center"
            >
              <div
                className={`size-5 rounded-full bg-gradient-to-r from-[#5A9FFF] via-[#5DDCF6] to-[#FFFA6B] shadow-[0_0_12px_rgba(90,159,255,0.7)] transition-all duration-300 transform ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>

            <span
              onClick={() => setIsYearly(true)}
              className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                isYearly ? "text-white font-semibold" : "text-white/60 hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span className="text-[10px] bg-[#FFFA6B] text-[#0D1017] px-2 py-0.5 rounded-full font-bold shadow-sm">
                Save 20%
              </span>
            </span>
          </label>
        </motion.div>

        {/* 3-Cards Pricing Grid */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8">
          {pricingPlans.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;

            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`col-span-12 lg:col-span-4 relative rounded-2xl p-8 md:p-10 flex flex-col justify-between border transition-all duration-500 shadow-2xl ${
                  plan.featured
                    ? "bg-[#121620] border-[#5A9FFF]/50 shadow-[0_0_50px_rgba(90,159,255,0.2)] ring-1 ring-[#5A9FFF]/40"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular badge */}
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#5A9FFF] to-[#5DDCF6] text-[#0D1017] text-xs font-ibm-plex-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(93,220,246,0.5)]">
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-manrope-heading-5 font-normal text-white/90 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-inter text-white/50">{plan.subtitle}</p>
                  </div>

                  {/* Price with Smooth Sliding Reel NumberFlow Animation */}
                  <div className="flex items-baseline gap-1 py-4 border-y border-white/10">
                    <span className="text-4xl sm:text-5xl font-bold font-sora text-white flex items-baseline">
                      <span className="text-3xl sm:text-4xl mr-0.5">$</span>
                      <NumberFlow value={price} />
                    </span>
                    <span className="text-sm font-ibm-plex-mono text-white/50 ml-1">
                      /mo {isYearly && <span className="text-xs text-[#5DDCF6]">(billed yearly)</span>}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 text-sm">
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-3 ${
                          f.active ? "text-white/80" : "text-white/25 line-through"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            f.active
                              ? "bg-[#5DDCF6]/20 text-[#5DDCF6]"
                              : "bg-white/5 text-white/20"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <MagneticButton href="#contact" text="Get started now" fullWidth />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
