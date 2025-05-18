"use client"

/**
 * Utilitário para otimização de imagens
 *
 * Este arquivo contém funções úteis para trabalhar com imagens no site da IBHJ
 */

import { useState, useEffect } from "react"

/**
 * Hook para verificar se uma imagem está carregada
 * Útil para mostrar placeholders enquanto a imagem carrega
 */
export function useImageLoaded(src: string) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setLoaded(true)
    }
  }, [src])

  return loaded
}

/**
 * Função para obter URL de imagem responsiva baseada no tamanho da tela
 * Útil quando você tem múltiplas versões da mesma imagem para diferentes tamanhos de tela
 */
export function getResponsiveImageUrl(basePath: string, fileName: string) {
  // Exemplo de uso:
  // getResponsiveImageUrl('/images/banners', 'hero') retornará:
  // - /images/banners/hero-mobile.jpg para dispositivos móveis
  // - /images/banners/hero-tablet.jpg para tablets
  // - /images/banners/hero.jpg para desktop

  if (typeof window === "undefined") {
    return `${basePath}/${fileName}.jpg` // Fallback para SSR
  }

  const width = window.innerWidth

  if (width < 640) {
    return `${basePath}/${fileName}-mobile.jpg`
  } else if (width < 1024) {
    return `${basePath}/${fileName}-tablet.jpg`
  } else {
    return `${basePath}/${fileName}.jpg`
  }
}

/**
 * Função para gerar um placeholder de cor sólida enquanto a imagem carrega
 */
export function getColorPlaceholder(color = "#21477a") {
  // Retorna um data URI de uma imagem de 1x1 pixel com a cor especificada
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' width='1' height='1'%3E%3Crect width='1' height='1' fill='${color.replace("#", "%23")}' /%3E%3C/svg%3E`
}
