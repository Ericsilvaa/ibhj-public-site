"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxDividerProps {
  backgroundImage: string
  height?: string
  overlayColor?: string
  overlayOpacity?: number
  speed?: number
  className?: string
}

export default function ParallaxDivider({
  backgroundImage,
  height = "h-48 md:h-64",
  overlayColor = "#000000",
  overlayOpacity = 0.5,
  speed = 0.3,
  className = "",
}: ParallaxDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current) return

      const rect = dividerRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Calcular a posição relativa do elemento na viewport
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter

      // Calcular o deslocamento com base na distância do centro
      const parallaxOffset = distanceFromCenter * speed

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Chamar handleScroll inicialmente para definir a posição inicial
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <div ref={dividerRef} className={`relative overflow-hidden ${height} ${className}`}>
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <Image src={backgroundImage || "/placeholder.svg"} alt="Divider background" fill className="object-cover" />
      </div>

      {/* Overlay colorido */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      ></div>
    </div>
  )
}
