"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage: string
  backgroundAlt?: string
  overlayColor?: string
  overlayOpacity?: number
  speed?: number
  height?: string
  className?: string
  priority?: boolean
  direction?: "up" | "down"
}

export default function ParallaxSection({
  children,
  backgroundImage,
  backgroundAlt = "Background image",
  overlayColor = "#000000",
  overlayOpacity = 0.5,
  speed = 0.5,
  height = "min-h-[500px]",
  className = "",
  priority = false,
  direction = "up",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    // Definir a altura da janela para cálculos
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    // Configurar o observer para detectar quando a seção está visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    // Função para calcular o efeito de paralaxe
    const handleScroll = () => {
      if (!isVisible || !section) return

      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height

      // Calcular o progresso da seção na viewport (0 quando o topo da seção está no fundo da viewport, 1 quando o fundo da seção está no topo da viewport)
      const progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight)

      // Limitar o progresso entre 0 e 1
      const clampedProgress = Math.max(0, Math.min(1, progress))

      // Calcular o deslocamento com base na direção
      const parallaxOffset =
        direction === "up" ? -speed * 100 * (clampedProgress - 0.5) : speed * 100 * (clampedProgress - 0.5)

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    // Chamar handleScroll inicialmente para definir a posição inicial
    handleScroll()

    return () => {
      if (section) {
        observer.unobserve(section)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isVisible, speed, windowHeight, direction])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${height} ${className}`}>
      {/* Imagem de fundo com efeito de paralaxe */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.05s ease-out", // Reduzido de 0.1s para 0.05s para uma resposta mais imediata
        }}
      >
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>

      {/* Overlay colorido */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      ></div>

      {/* Conteúdo da seção */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  )
}
