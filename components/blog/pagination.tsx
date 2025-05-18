"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  // Não mostrar paginação se houver apenas uma página
  if (totalPages <= 1) return null

  // Função para gerar array de páginas a serem exibidas
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Se o total de páginas for menor que o máximo, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Sempre mostrar a primeira página
      pageNumbers.push(1)

      // Calcular páginas do meio
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)

      // Ajustar se estiver no início
      if (currentPage <= 2) {
        endPage = 4
      }

      // Ajustar se estiver no fim
      if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3
      }

      // Adicionar elipses se necessário
      if (startPage > 2) {
        pageNumbers.push("...")
      }

      // Adicionar páginas do meio
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      // Adicionar elipses se necessário
      if (endPage < totalPages - 1) {
        pageNumbers.push("...")
      }

      // Sempre mostrar a última página
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex justify-center items-center space-x-1 mt-8">
      {/* Botão Anterior */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}/${currentPage - 1}`}
          className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Página anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
      ) : (
        <button
          disabled
          className="px-3 py-2 rounded-md text-gray-300 cursor-not-allowed"
          aria-label="Não há página anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Números das Páginas */}
      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2">
              ...
            </span>
          )
        }

        return (
          <Link
            key={`page-${page}`}
            href={`${basePath}/${page}`}
            className={`px-3 py-2 rounded-md ${
              currentPage === page ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
            } transition-colors`}
          >
            {page}
          </Link>
        )
      })}

      {/* Botão Próximo */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}/${currentPage + 1}`}
          className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Próxima página"
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
      ) : (
        <button
          disabled
          className="px-3 py-2 rounded-md text-gray-300 cursor-not-allowed"
          aria-label="Não há próxima página"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
