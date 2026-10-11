"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../common/MagneticButton";
import {
  ChevronDown,
  X,
  Menu,
  Layers,
  BarChart3,
  Workflow,
  Globe,
  Smartphone,
  Code2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSubmenu, setMobileSubmenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 py-4 ${
          isScrolled
            ? "bg-[#0D1017]/85 backdrop-blur-[25px] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1520px] mx-auto flex items-center justify-between">
          {/* Brand Logo - Exact Official Sincweb SVG Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <figure className="h-auto max-h-[40px] w-[166px]">
              <img
                src="/images/logo/new.svg"
                alt="SINCWEB INFOTECH"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </figure>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
            {/* Home */}
            <Link
              href="/"
              className="px-3 py-2 font-ibm-plex-mono text-[13.5px] tracking-[1.68px] text-white/70 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>

            {/* About Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("about")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 font-ibm-plex-mono text-[13.5px] tracking-[1.68px] text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                About
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMenu === "about" ? "rotate-180 text-white" : "text-white/60"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 p-3 bg-[#0B0E14] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="space-y-1">
                      <Link
                        href="#about"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#1F2633] flex items-center justify-center text-[#5A9FFF]">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-sora text-sm text-white font-medium group-hover:text-[#5A9FFF] transition-colors">
                            About Us
                          </p>
                          <p className="text-xs text-white/50">Company vision & team</p>
                        </div>
                      </Link>

                      <Link
                        href="#portfolio"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#1F2633] flex items-center justify-center text-[#5DDCF6]">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-sora text-sm text-white font-medium group-hover:text-[#5DDCF6] transition-colors">
                            Portfolio
                          </p>
                          <p className="text-xs text-white/50">Proven case studies</p>
                        </div>
                      </Link>

                      <Link
                        href="#approach"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#1F2633] flex items-center justify-center text-[#FFFA6B]">
                          <Workflow className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-sora text-sm text-white font-medium group-hover:text-[#FFFA6B] transition-colors">
                            Our Approach
                          </p>
                          <p className="text-xs text-white/50">Step-by-step roadmap</p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 font-ibm-plex-mono text-[13.5px] tracking-[1.68px] text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMenu === "services" ? "rotate-180 text-white" : "text-white/60"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-20 w-[680px] p-6 bg-[#0B0E14] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl grid grid-cols-12 gap-6"
                  >
                    <div className="col-span-5 border-r border-white/10 pr-4 space-y-3">
                      <p className="font-ibm-plex-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                        Core Services
                      </p>
                      <Link
                        href="#services"
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 group transition-colors"
                      >
                        <TrendingUp className="w-4 h-4 text-[#5A9FFF]" />
                        <span className="font-sora text-sm text-white/90 group-hover:text-white">
                          Digital Marketing
                        </span>
                      </Link>
                      <Link
                        href="#services"
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 group transition-colors"
                      >
                        <Globe className="w-4 h-4 text-[#5DDCF6]" />
                        <span className="font-sora text-sm text-white/90 group-hover:text-white">
                          Website Designing
                        </span>
                      </Link>
                      <Link
                        href="#services"
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 group transition-colors"
                      >
                        <Code2 className="w-4 h-4 text-[#FFFA6B]" />
                        <span className="font-sora text-sm text-white/90 group-hover:text-white">
                          Website Development
                        </span>
                      </Link>
                      <Link
                        href="#services"
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 group transition-colors"
                      >
                        <Smartphone className="w-4 h-4 text-[#A855F7]" />
                        <span className="font-sora text-sm text-white/90 group-hover:text-white">
                          App Development
                        </span>
                      </Link>
                    </div>

                    <div className="col-span-7 space-y-4">
                      <p className="font-ibm-plex-mono text-xs uppercase tracking-widest text-white/40">
                        Featured Platform
                      </p>
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between h-36 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A9FFF]/10 rounded-full blur-2xl"></div>
                        <div>
                          <h4 className="font-sora text-sm font-semibold text-white mb-1">
                            Merge & AI Automation Unified
                          </h4>
                          <p className="text-xs text-white/60 line-clamp-2">
                            One intelligent workflow pipeline for countless product integrations.
                          </p>
                        </div>
                        <Link
                          href="#features"
                          className="flex items-center gap-1.5 text-xs text-[#5DDCF6] font-medium group-hover:gap-2.5 transition-all"
                        >
                          Explore integrations <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us */}
            <Link
              href="#contact"
              className="px-3 py-2 font-ibm-plex-mono text-[13.5px] tracking-[1.68px] text-white/70 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>

            {/* Learn From Us */}
            <Link
              href="#blog"
              className="px-3 py-2 font-ibm-plex-mono text-[13.5px] tracking-[1.68px] text-white/70 hover:text-white transition-colors duration-300"
            >
              Learn From Us
            </Link>
          </nav>

          {/* Right Action Button - Magnetic Glow */}
          <div className="hidden lg:flex items-center gap-4">
            <MagneticButton href="#contact" text="Try now" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-[380px] bg-[#0D1017] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="inline-block">
                    <figure className="h-auto max-h-[36px] w-[145px]">
                      <img
                        src="/images/logo/new.svg"
                        alt="SINCWEB INFOTECH"
                        className="w-full h-auto object-contain"
                      />
                    </figure>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 space-y-4">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="block font-ibm-plex-mono text-base text-white/80 hover:text-white py-2"
                  >
                    Home
                  </Link>

                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === "about" ? null : "about")}
                      className="flex items-center justify-between w-full font-ibm-plex-mono text-base text-white/80 hover:text-white py-2"
                    >
                      About
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSubmenu === "about" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubmenu === "about" && (
                      <div className="pl-4 py-2 space-y-2 text-sm text-white/60">
                        <Link href="#about" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">
                          About Company
                        </Link>
                        <Link href="#portfolio" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">
                          Portfolio
                        </Link>
                        <Link href="#approach" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">
                          Our Approach
                        </Link>
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
                      className="flex items-center justify-between w-full font-ibm-plex-mono text-base text-white/80 hover:text-white py-2"
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSubmenu === "services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubmenu === "services" && (
                      <div className="pl-4 py-2 space-y-2 text-sm text-white/60">
                        <Link href="#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">
                          Digital Marketing
                        </Link>
                        <Link href="#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">
                          Website Designing
                        </Link>
                        <Link href="#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">
                          Website Development
                        </Link>
                        <Link href="#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-white">
                          App Development
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block font-ibm-plex-mono text-base text-white/80 hover:text-white py-2"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="#blog"
                    onClick={() => setMobileOpen(false)}
                    className="block font-ibm-plex-mono text-base text-white/80 hover:text-white py-2"
                  >
                    Learn From Us
                  </Link>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <MagneticButton
                  href="#contact"
                  text="Try now"
                  fullWidth
                  onClick={() => setMobileOpen(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
