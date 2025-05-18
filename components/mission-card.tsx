import type React from "react"
import { Heart } from "lucide-react"

interface MissionCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function MissionCard({ title, description, icon }: MissionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon || <Heart className="h-8 w-8 text-primary" />}
        <h3 className="text-xl font-bold ml-3 text-primary">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
