"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ParallaxBackground from "./parallax/parallax-background";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno atraso para garantir que a animação ocorra após o carregamento da página
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Reduzido de 100 para 50ms para iniciar mais rápido

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-primary text-white overflow-hidden h-[90vh] min-h-[600px]">
      {/* Imagem de fundo com efeito de paralaxe */}
      <ParallaxBackground
        src="/images/banners/igreja-fachada-wide.jpg"
        alt="Igreja Batista de Henrique Jorge"
        speed={0.3}
        overlayColor="#21477a"
        overlayOpacity={0.7}
        priority
      />

      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            Igreja Batista de Henrique Jorge
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 font-light transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            55 anos cuidando de vidas em amor
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            <Link
              href="/contato"
              className="btn-primary bg-white text-primary hover:bg-surface"
            >
              Visite-nos
            </Link>
            <Link
              href="/quem-somos"
              className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
