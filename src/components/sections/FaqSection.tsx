"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { TextReveal } from "../common/TextReveal";
import { faqsList } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openId, setOpenId] = React.useState<string | null>("faq-1");

  return (
    <section id="faq" className="bg-[#0D1017] py-20 md:py-28 lg:py-36">
      <div className="main-container">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-8">
          <h2 className="text-sora-heading-2 text-white/90 font-normal tracking-[-0.035em]">
            <TextReveal
              text="Everything you need to know simplified"
              dimmedWords={["need", "to", "know", "simplified"]}
              wordDelay={0.06}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-tagline-2 font-inter text-white/60 leading-relaxed"
          >
            Get clear, concise answers about our AI solutions, services, and how Sincweb Infotech helps your business move forward.
          </motion.p>
        </div>

        {/* Official Sincweb Avatars and Trust Pill */}
        <div className="flex items-center justify-center gap-4 pb-14">
          <div className="flex items-center">
            <img
              src="/images/opai-avatar-img-29.png"
              alt="200+ customers"
              className="h-10 w-auto object-contain drop-shadow-md"
            />
          </div>
          <div className="text-left">
            <p className="font-sora text-sm font-semibold text-white/90">
              Trusted by <span className="text-[#5A9FFF]">200+ Customers</span>
            </p>
            <p className="text-xs text-white/50">Across the globe</p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqsList.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#161B26] border-[#5A9FFF]/40 shadow-[0_0_30px_rgba(90,159,255,0.1)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-sora text-base font-medium text-white/90">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm font-inter text-white/60 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <MagneticButton href="#contact" text="Still have questions?" />
        </div>
      </div>
    </section>
  );
}
