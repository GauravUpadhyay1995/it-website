"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import { TextReveal } from "../common/TextReveal";

const blogColumns = [
  [
    {
      id: "blog-1",
      image: "/images/opai-img-14.jpg",
      date: "15/1/2025",
      tags: ["Automation", "AI"],
      title: "How AI Automation is Revolutionizing Customer Service Operations",
    },
    {
      id: "blog-2",
      image: "/images/opai-img-15.jpg",
      date: "22/1/2025",
      tags: ["Machine Learning", "Trends"],
      title: "The Future of Machine Learning: Emerging Trends and Technologies",
    },
  ],
  [
    {
      id: "blog-3",
      image: "/images/opai-img-16.jpg",
      date: "29/1/2025",
      tags: ["Productivity", "Business"],
      title: "5 Ways AI-Driven Workflows Boost Workplace Productivity",
    },
    {
      id: "blog-4",
      image: "/images/opai-img-17.jpg",
      date: "05/2/2025",
      tags: ["Integrations", "API"],
      title: "Building Scalable AI Solutions: Best Practices for Enterprises",
    },
  ],
  [
    {
      id: "blog-5",
      image: "/images/opai-img-18.jpg",
      date: "12/2/2025",
      tags: ["Innovation", "Tech"],
      title: "Demystifying Deep Learning: A Practical Guide for Modern Teams",
    },
    {
      id: "blog-6",
      image: "/images/opai-img-19.jpg",
      date: "19/2/2025",
      tags: ["Security", "AI"],
      title: "Navigating Ethics & Security in Enterprise AI Automation",
    },
  ],
];

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#0D1017] pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      <div className="main-container space-y-14 md:space-y-18">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-sora-heading-2 text-white/90 font-normal tracking-[-0.035em]">
            <TextReveal
              text="Stay Ahead with the latest in AI Automation"
              dimmedWords={["latest", "in", "AI", "Automation"]}
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
            Discover expert tips, industry trends, and actionable strategies to power your growth with OptimAI.
          </motion.p>
        </div>

        {/* 3-Column Staggered Blogs Matching Sincweb 100% */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {blogColumns.map((col, colIdx) => (
            <div key={`col-${colIdx}`} className="space-y-10 md:space-y-12">
              {col.map((post, postIdx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (colIdx * 2 + postIdx) * 0.1 }}
                  className="group space-y-4 cursor-pointer"
                >
                  {/* Photo Frame */}
                  <figure className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#121620] shadow-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-auto object-cover scale-100 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-0.5"
                    />
                  </figure>

                  {/* Metadata & Title */}
                  <div className="px-1 space-y-2.5">
                    <time className="text-xs font-ibm-plex-mono text-white/60 block">
                      {post.date}
                    </time>

                    <div className="flex gap-2 py-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs rounded-full bg-white/[0.05] border border-white/10 px-3 py-0.5 font-normal text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-sora text-base sm:text-lg font-normal tracking-[-0.02em] text-white/90 group-hover:text-[#5DDCF6] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>
          ))}
        </div>

        {/* Read Our Blog CTA */}
        <div className="text-center pt-8">
          <MagneticButton href="#blog" text="Read our blog" />
        </div>
      </div>
    </section>
  );
}
