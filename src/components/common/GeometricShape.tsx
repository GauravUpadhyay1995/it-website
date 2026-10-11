import * as React from "react";

export function GeometricShape({
  shape,
  className = "w-12 h-12",
}: {
  shape: number;
  className?: string;
}) {
  if (shape === 1) {
    // Exact Shape 1: 4-petal 3D isometric cross/clover cube
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} text-white stroke-white`}
      >
        <path
          d="M24 6L30 9.5V16.5L24 20L18 16.5V9.5L24 6Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M34 16L40 19.5V26.5L34 30L28 26.5V19.5L34 16Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 26L30 29.5V36.5L24 40L18 36.5V29.5L24 26Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 16L20 19.5V26.5L14 30L8 26.5V19.5L14 16Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 13V20M24 20L18 16.5M24 20L30 16.5"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M34 23V30M34 23L28 19.5M34 23L40 19.5"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M24 33V40M24 33L18 29.5M24 33L30 29.5"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M14 23V30M14 23L8 19.5M14 23L20 19.5"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (shape === 2) {
    // Exact Shape 2: Isometric 3D node block with extruded modules
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} text-white stroke-white`}
      >
        <path
          d="M24 4L38 12V28L24 36L10 28V12L24 4Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 4V36M10 12L24 20L38 12M10 28L24 20M38 28L24 20"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M18 16L24 12.5L30 16L24 19.5L18 16Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M18 16V23L24 26.5V19.5"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M30 16V23L24 26.5"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (shape === 3) {
    // Exact Shape 3: Isometric Mobius folded hexagon ribbon
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} text-white stroke-white`}
      >
        <path
          d="M24 4L38 12V20L24 28L14 22V14L24 8L34 14V22L24 28L10 20V12L24 4Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 28V44L10 36V28L24 36L38 28V36L24 44"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 36V20M38 20L24 28L10 20"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Exact Shape 4: Isometric 3D Cube with linear hatch stripes
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} text-white stroke-white`}
    >
      <path
        d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M24 4V44M6 14L24 24L42 14"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Top face hatch */}
      <path d="M15 9L33 19M19.5 6.5L37.5 16.5" strokeWidth="1.2" strokeLinecap="round" />
      {/* Left face hatch */}
      <path d="M12 18V30M18 21V33" strokeWidth="1.2" strokeLinecap="round" />
      {/* Right face hatch */}
      <path d="M30 21V33M36 18V30" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
