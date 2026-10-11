"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function ScrambleFooterTitle({ text = "SINCWEB" }: { text?: string }) {
  const [displayText, setDisplayText] = React.useState(text);
  const containerRef = React.useRef<HTMLHeadingElement>(null);
  const hasAnimated = React.useRef(false);

  const startShuffle = React.useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const duration = 2000;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const revealed = Math.floor(progress * text.length);

      const animated = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          return i < revealed
            ? text[i]
            : chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(animated);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [text]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startShuffle();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [startShuffle]);

  return (
    <h2
      ref={containerRef}
      className="footer-title font-inter text-center font-bold tracking-[22px] sm:tracking-[40px] md:tracking-[60px] lg:tracking-[80px] xl:tracking-[100px] pl-5 sm:pl-8 md:pl-10 lg:pl-14 text-[42px] sm:text-[64px] md:text-[88px] lg:text-[112px] xl:text-[132px] leading-[1.3] cursor-default select-none transition-all duration-300"
    >
      {displayText}
    </h2>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1017] relative z-10 overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-8 border-t border-white/10">
      <div className="main-container relative z-10">
        {/* Newsletter Box */}
        <div className="border-b border-white/10 flex flex-col items-center justify-between gap-6 pb-14 lg:flex-row lg:items-start lg:pb-20">
          <div className="text-center lg:text-left space-y-2">
            <h3 className="font-sora text-3xl sm:text-4xl font-normal tracking-tight text-white">
              Join our newsletter
            </h3>
            <p className="text-sm font-inter text-white/50 max-w-md leading-relaxed">
              Get product updates, industry insights, and AI automation tips delivered directly to your inbox.
            </p>
          </div>

          <div className="space-y-3 w-full lg:w-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to SINCWEB INFOTECH updates!");
              }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="h-12 w-full sm:w-80 rounded-full bg-[#161B26] border border-white/15 px-5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#5A9FFF] transition-colors font-inter"
              />
              <button
                type="submit"
                className="h-12 w-full sm:w-auto px-7 rounded-full bg-white text-[#0D1017] hover:bg-[#5DDCF6] font-ibm-plex-mono text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-xs font-inter text-white/40 text-center lg:text-left">
              By subscribing you agree to our{" "}
              <Link href="#" className="underline hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-12 gap-10 lg:gap-8 pt-12 pb-14">
          {/* Brand Info */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <figure className="h-auto max-h-[40px] w-[166px]">
                <img
                  src="/images/logo/new.svg"
                  alt="SINCWEB INFOTECH"
                  className="w-full h-auto object-contain"
                />
              </figure>
            </Link>

            <div className="space-y-4 text-sm font-inter text-white/50">
              <div>
                <p className="font-semibold text-white/90 text-xs font-ibm-plex-mono uppercase tracking-wider mb-1">
                  Address:
                </p>
                <p>30 North Gould Street, Sheridan, WY 82801</p>
              </div>
              <div>
                <p className="font-semibold text-white/90 text-xs font-ibm-plex-mono uppercase tracking-wider mb-1">
                  Contact:
                </p>
                <a href="tel:+12025550130" className="block hover:text-white transition-colors">
                  +1 (202) 555-0130
                </a>
                <a href="mailto:hello@sincwebinfotech.com" className="block hover:text-white transition-colors">
                  hello@sincwebinfotech.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  name: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "X",
                  href: "#",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.74a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27z" />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-[#161B26] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#5A9FFF] hover:scale-110 transition-all duration-300"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-2 lg:text-right space-y-3">
            <p className="font-sora text-sm font-semibold text-white/90">Company</p>
            <ul className="space-y-2 text-sm font-inter text-white/50">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Career</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:text-right space-y-3">
            <p className="font-sora text-sm font-semibold text-white/90">Support</p>
            <ul className="space-y-2 text-sm font-inter text-white/50">
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tutorial</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Support Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal Policies */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:text-right space-y-3">
            <p className="font-sora text-sm font-semibold text-white/90">Legal Policies</p>
            <ul className="space-y-2 text-sm font-inter text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Affiliate Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* SINCWEB Giant Animated Watermark Title */}
        <div className="py-10 md:py-14 lg:py-16 overflow-hidden">
          <ScrambleFooterTitle text="SINCWEB" />
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-inter text-white/50">
          <p>© {currentYear} SINCWEB INFOTECH. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link></li>
          </ul>
        </div>
      </div>

      {/* Sincweb Original Aurora Pink/Blue Prism Gradient Graphic */}
      <figure className="pointer-events-none absolute right-[-32%] bottom-[-15%] sm:right-[-25%] sm:bottom-[-25%] lg:right-[-20%] lg:bottom-[-35%] z-0 h-[600px] w-[600px] sm:h-[850px] sm:w-[850px] lg:h-[1100px] lg:w-[1100px] select-none opacity-90 mix-blend-screen">
        <img
          src="/images/gradient/opai-14.png"
          alt="footer-bg"
          className="size-full object-contain pointer-events-none select-none"
        />
      </figure>
    </footer>
  );
}
