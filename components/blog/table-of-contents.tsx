"use client"

import { useState, useEffect } from "react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [items])

  if (!items.length) return null

  return (
    <div className="bg-surface p-4 rounded-lg sticky top-24">
      <h3 className="text-lg font-bold text-primary mb-3">Índice</h3>
      <nav>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 0.75}rem` }}>
              <a
                href={`#${item.id}`}
                className={`block py-1 text-sm hover:text-primary transition-colors ${
                  activeId === item.id ? "text-primary font-medium" : "text-gray-600"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
