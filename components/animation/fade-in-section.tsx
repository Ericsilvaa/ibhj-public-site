"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export default function FadeInSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5, // Reduzido de 0.6 para 0.5 para animações mais rápidas
  threshold = 0.1,
  className = "",
  once = true,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold },
    )

    const { current } = domRef
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [once, threshold])

  // Definir a transformação inicial com base na direção
  let transform = "translate3d(0, 0, 0)"
  const distance = "30px" // Reduzido de 40px para 30px para um movimento mais sutil

  switch (direction) {
    case "up":
      transform = `translate3d(0, ${distance}, 0)`
      break
    case "down":
      transform = `translate3d(0, -${distance}, 0)`
      break
    case "left":
      transform = `translate3d(${distance}, 0, 0)`
      break
    case "right":
      transform = `translate3d(-${distance}, 0, 0)`
      break
    case "none":
      transform = "translate3d(0, 0, 0)"
      break
  }

  const animationStyle = {
    opacity: 0,
    transform,
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`,
  }

  const visibleStyle = {
    opacity: 1,
    transform: "translate3d(0, 0, 0)",
  }

  return (
    <div ref={domRef} className={className} style={isVisible ? { ...animationStyle, ...visibleStyle } : animationStyle}>
      {children}
    </div>
  )
}
