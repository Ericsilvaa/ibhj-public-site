import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Igreja Batista de Henrique Jorge",
  description: "Devocionais, estudos bíblicos e reflexões para edificação espiritual",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
