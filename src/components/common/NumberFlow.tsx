"use client";

import * as React from "react";
import NumberFlowOriginal from "@number-flow/react";

interface NumberFlowProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function NumberFlow({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: NumberFlowProps) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      {prefix && <span>{prefix}</span>}
      <NumberFlowOriginal
        value={value}
        trend={0}
        spinTiming={{ duration: 750, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        opacityTiming={{ duration: 350, easing: "ease-out" }}
        transformTiming={{ duration: 750, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      />
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
