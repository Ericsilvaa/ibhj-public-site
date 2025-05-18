import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  description: string
  imageUrl: string
  link: string
}

export default function EventCard({ title, date, description, imageUrl, link }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href={link} className="text-primary font-medium hover:text-hover transition-colors">
          Saiba mais →
        </Link>
      </div>
    </div>
  )
}
