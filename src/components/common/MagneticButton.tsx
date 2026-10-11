"use client";

import * as React from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  buttonClass?: string;
  gradientClass?: string;
  fullWidth?: boolean;
}

export function MagneticButton({
  children,
  text = "Get Started",
  href,
  onClick,
  className = "",
  buttonClass = "",
  gradientClass = "",
  fullWidth = false,
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  // Exact Sincweb smooth spring physics for the magnetic glowing gradient halo
  const springX = useSpring(0, {
    stiffness: 160,
    damping: 22,
    mass: 0.1,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const gradientHalf = 41; // Exact Sincweb offset calculation
    const targetX = mouseX - rect.width + gradientHalf;
    springX.set(targetX);
  };

  const handleMouseLeave = () => {
    springX.set(0);
  };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-button group relative z-10 ${fullWidth ? "w-full" : "inline-block"} ${className}`}
    >
      {/* Pill Button Body */}
      <div
        className={`flex cursor-pointer items-center justify-center gap-[7px] rounded-full bg-gradient-to-r from-[#DBE2E6] via-[#F3F6F8] to-[#FFFFFF] px-6 py-[11px] md:py-[13px] shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-all duration-300 active:scale-[0.98] ${
          fullWidth ? "w-full" : ""
        } ${buttonClass}`}
      >
        <span className="font-ibm-plex-mono text-tagline-2 text-[#0D1017] inline-block leading-[1.4] font-medium select-none">
          {children || text}
        </span>
        <span className="inline-block transition-transform duration-500 ease-in-out group-hover:translate-x-1 text-[#0D1017]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M6.75 13.5L11.25 9L6.75 4.5"
              stroke="#0D1017"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* Sincweb Exact Dual Cyan/Yellow/Blue Magnetic Glowing Gradient Halo 1 */}
      <motion.span
        style={{ x: springX }}
        className={`magnetic-button-gradient pointer-events-none absolute top-1/2 right-0 z-[-1] h-[56px] w-[88px] -translate-y-1/2 rounded-full bg-gradient-to-l from-[#5A9FFF] via-[#5DDCF6]/80 to-[rgba(255,250,107,0.35)] blur-md transition-opacity duration-500 ease-in-out opacity-90 group-hover:opacity-100 ${gradientClass}`}
      />

      {/* Sincweb Exact Dual Cyan/Yellow/Blue Magnetic Glowing Gradient Halo 2 */}
      <motion.span
        style={{ x: springX }}
        className={`magnetic-button-gradient pointer-events-none absolute top-1/2 right-2 z-[-1] h-[60px] w-[82px] -translate-y-1/2 rounded-full bg-gradient-to-l from-[#5A9FFF] via-[#5DDCF6]/80 to-[rgba(255,250,107,0.35)] blur-[7px] transition-opacity duration-500 ease-in-out opacity-85 group-hover:opacity-100 ${gradientClass}`}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={fullWidth ? "w-full block" : "inline-block"}>
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={fullWidth ? "w-full block" : "inline-block"}>
      {content}
    </div>
  );
}
