"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Foto {
  id: number
  src: string
  alt: string
  categoria: string
}

export default function Galeria() {
  const categorias = ["Todos", "Cantata", "Acampamento", "Aniversário", "Cultos"]
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")
  const [fotoModal, setFotoModal] = useState<Foto | null>(null)

  // Dados de exemplo para a galeria
  const fotos: Foto[] = [
    { id: 1, src: "/images/eventos/cantata-natal-2024.jpg", alt: "Cantata de Natal 2024", categoria: "Cantata" },
    {
      id: 2,
      src: "/images/eventos/acampamento-jovens-2024.jpg",
      alt: "Acampamento de Jovens 2024",
      categoria: "Acampamento",
    },
    {
      id: 3,
      src: "/images/eventos/aniversario-igreja-2024.jpg",
      alt: "Aniversário da Igreja 2024",
      categoria: "Aniversário",
    },
    { id: 4, src: "/images/cultos/culto-pascoa-2024.jpg", alt: "Culto de Páscoa 2024", categoria: "Cultos" },
    { id: 5, src: "/images/eventos/cantata-pascoa-2024.jpg", alt: "Cantata de Páscoa 2024", categoria: "Cantata" },
    {
      id: 6,
      src: "/images/eventos/acampamento-adolescentes-2024.jpg",
      alt: "Acampamento de Adolescentes 2024",
      categoria: "Acampamento",
    },
    {
      id: 7,
      src: "/images/eventos/aniversario-pastor-2024.jpg",
      alt: "Aniversário do Pastor 2024",
      categoria: "Aniversário",
    },
    { id: 8, src: "/images/cultos/culto-adoracao.jpg", alt: "Culto de Adoração", categoria: "Cultos" },
    { id: 9, src: "/images/eventos/cantata-infantil-2024.jpg", alt: "Cantata Infantil 2024", categoria: "Cantata" },
    {
      id: 10,
      src: "/images/eventos/acampamento-casais-2024.jpg",
      alt: "Acampamento de Casais 2024",
      categoria: "Acampamento",
    },
    {
      id: 11,
      src: "/images/eventos/aniversario-coral-2024.jpg",
      alt: "Aniversário do Coral 2024",
      categoria: "Aniversário",
    },
    { id: 12, src: "/images/cultos/culto-jovens.jpg", alt: "Culto de Jovens", categoria: "Cultos" },
  ]

  const fotosFiltradas = categoriaAtiva === "Todos" ? fotos : fotos.filter((foto) => foto.categoria === categoriaAtiva)

  return (
    <div>
      {/* Hero da página */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h1>
          <p className="text-xl max-w-3xl mx-auto">Momentos especiais da nossa comunidade</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-surface">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  categoriaAtiva === categoria ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fotosFiltradas.map((foto) => (
              <div
                key={foto.id}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setFotoModal(foto)}
              >
                <Image src={foto.src || "/placeholder.svg"} alt={foto.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="w-full p-4 bg-black bg-opacity-60 text-white">
                    <p className="text-sm">{foto.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {fotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setFotoModal(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fechar"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative aspect-video">
              <Image src={fotoModal.src || "/placeholder.svg"} alt={fotoModal.alt} fill className="object-contain" />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{fotoModal.alt}</h3>
              <p className="text-gray-300">Categoria: {fotoModal.categoria}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
