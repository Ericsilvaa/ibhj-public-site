import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  imageUrl?: string
}

export default function TestimonialCard({ quote, author, role, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-6">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.25 19.5H9C8.175 19.5 7.5 18.825 7.5 18V13.5C7.5 12.675 8.175 12 9 12H12.75C13.575 12 14.25 12.675 14.25 13.5V24C14.25 24.825 13.575 25.5 12.75 25.5H9.75C8.925 25.5 8.25 24.825 8.25 24V22.5"
            stroke="#21477A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.5 19.5H23.25C22.425 19.5 21.75 18.825 21.75 18V13.5C21.75 12.675 22.425 12 23.25 12H27C27.825 12 28.5 12.675 28.5 13.5V24C28.5 24.825 27.825 25.5 27 25.5H24C23.175 25.5 22.5 24.825 22.5 24V22.5"
            stroke="#21477A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-gray-700 text-center mb-6 italic">{quote}</p>
      <div className="flex items-center justify-center">
        {imageUrl && (
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
            <Image src={imageUrl || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
        )}
        <div className="text-center">
          <h4 className="font-bold text-gray-800">{author}</h4>
          {role && <p className="text-gray-500 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  )
}
