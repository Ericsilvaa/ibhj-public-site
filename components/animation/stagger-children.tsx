"use client";

import { type ReactNode, Children, isValidElement } from "react";
import FadeInSection from "./fade-in-section";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerAmount?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  baseDelay?: number;
  className?: string;
}

export default function StaggerChildren({
  children,
  staggerAmount = 0.08, // Reduzido de 0.1 para 0.08 para um escalonamento mais rápido
  direction = "up",
  baseDelay = 0,
  className = "",
}: StaggerChildrenProps) {
  const childrenArray = Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return (
            <FadeInSection
              key={index}
              direction={direction}
              delay={baseDelay + index * staggerAmount}
            >
              {child}
            </FadeInSection>
          );
        }
        return child;
      })}
    </div>
  );
}
