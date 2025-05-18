"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxBackgroundProps {
  src: string
  alt?: string
  speed?: number
  overlayColor?: string
  overlayOpacity?: number
  className?: string
  priority?: boolean
}

export default function ParallaxBackground({
  src,
  alt = "Background image",
  speed = 0.2,
  overlayColor = "#000000",
  overlayOpacity = 0,
  className = "",
  priority = false,
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const newOffset = scrollY * speed

      // Usar requestAnimationFrame para otimizar a performance
      requestAnimationFrame(() => {
        setOffset(newOffset)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Chamar handleScroll inicialmente para definir a posição inicial
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority={priority} />
      </div>

      {/* Overlay colorido */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        ></div>
      )}
    </div>
  )
}
