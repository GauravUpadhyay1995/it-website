"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-[#0D1017] py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-[#5A9FFF]/10 rounded-full blur-[140px]"></div>
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-[#5DDCF6]/10 rounded-full blur-[140px]"></div>

      <div className="main-container relative z-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sora-heading-2 text-white/90 font-normal tracking-[-0.035em]"
          >
            Ready to Build <br className="hidden sm:block" />
            <span className="text-white/30">Your Next Success?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-tagline-2 font-inter text-white/60"
          >
            Get in touch with the Sincweb Infotech team for a free technical consultation and customized project proposal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-8 shadow-xl"
          >
            <div className="space-y-6">
              <h3 className="font-sora text-xl font-medium text-white">
                Contact Information
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Fill out the inquiry form or contact our global headquarters directly. We respond within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5A9FFF]/15 border border-[#5A9FFF]/30 flex items-center justify-center text-[#5A9FFF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-ibm-plex-mono text-white/40 uppercase">Email Us</p>
                    <a href="mailto:hello@sincwebinfotech.com" className="text-sm font-sora text-white hover:text-[#5DDCF6] transition-colors">
                      hello@sincwebinfotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5DDCF6]/15 border border-[#5DDCF6]/30 flex items-center justify-center text-[#5DDCF6] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-ibm-plex-mono text-white/40 uppercase">Call Support</p>
                    <a href="tel:+12025550130" className="text-sm font-sora text-white hover:text-[#5DDCF6] transition-colors">
                      +1 (202) 555-0130
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFA6B]/15 border border-[#FFFA6B]/30 flex items-center justify-center text-[#FFFA6B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-ibm-plex-mono text-white/40 uppercase">Headquarters</p>
                    <p className="text-sm font-sora text-white">
                      30 North Gould Street, Sheridan, WY 82801
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href="https://wa.me/12025550130"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#25D366] font-sora text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-[#161B26] border border-white/15 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-sora text-2xl font-medium text-white">Thank You!</h3>
                <p className="text-sm text-white/60 max-w-sm mx-auto">
                  Your message has been sent to the Sincweb Infotech team. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-ibm-plex-mono hover:bg-white/20 transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-ibm-plex-mono text-white/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full h-12 rounded-xl bg-[#0D1017] border border-white/15 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#5A9FFF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-ibm-plex-mono text-white/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      className="w-full h-12 rounded-xl bg-[#0D1017] border border-white/15 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#5A9FFF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-ibm-plex-mono text-white/60 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-12 rounded-xl bg-[#0D1017] border border-white/15 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#5A9FFF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-ibm-plex-mono text-white/60 mb-2">
                      Service Interested In
                    </label>
                    <select
                      className="w-full h-12 rounded-xl bg-[#0D1017] border border-white/15 px-4 text-sm text-white focus:outline-none focus:border-[#5A9FFF] transition-colors"
                    >
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="web-design">Website Designing</option>
                      <option value="web-development">Website Development</option>
                      <option value="app-development">Mobile App Development</option>
                      <option value="ai-automation">AI & Automation Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-ibm-plex-mono text-white/60 mb-2">
                    Project Details / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    className="w-full rounded-xl bg-[#0D1017] border border-white/15 p-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#5A9FFF] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-13 rounded-full bg-gradient-to-r from-[#5A9FFF] via-[#5DDCF6] to-[#FFFA6B] text-[#0D1017] font-sora font-semibold text-sm hover:brightness-110 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(90,159,255,0.4)] cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
