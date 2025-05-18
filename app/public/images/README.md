# Estrutura de Imagens da IBHJ

Esta pasta contém todas as imagens utilizadas no site da Igreja Batista de Henrique Jorge.

## Organização das Pastas:

- `/igreja`: Fotos do templo, fachada e instalações
- `/eventos`: Fotos de eventos especiais, cantatas, acampamentos
- `/ministerios`: Fotos dos diferentes ministérios da igreja
- `/pessoas`: Fotos dos pastores e líderes (com permissão)
- `/cultos`: Fotos dos cultos e celebrações
- `/banners`: Banners e imagens para o hero section

## Recomendações:

1. Use imagens otimizadas para web (formatos .jpg, .webp ou .png)
2. Mantenha uma proporção consistente para cada tipo de imagem
3. Nomeie os arquivos de forma descritiva (ex: "culto-domingo-maio-2025.jpg")
\`\`\`

```typescriptreact file="components/hero-section.tsx"
[v0-no-op-code-block-prefix]import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banners/igreja-fachada-wide.jpg"
          alt="Igreja Batista de Henrique Jorge"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Igreja Batista de Henrique Jorge</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">55 anos cuidando de vidas em amor</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="btn-primary bg-white text-primary hover:bg-surface">
              Visite-nos
            </Link>
            <Link href="/quem-somos" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Conheça nossa história
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
