import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/types/blog"

interface PostCardProps {
  post: BlogPost
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
        featured ? "md:flex" : ""
      }`}
    >
      <div className={`relative ${featured ? "md:w-1/2 h-60 md:h-auto" : "h-48"}`}>
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        {post.category && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
          </div>
        )}
      </div>
      <div className={`p-6 ${featured ? "md:w-1/2" : ""}`}>
        <h3 className={`font-bold text-primary mb-2 ${featured ? "text-2xl" : "text-xl"}`}>
          <Link href={`/blog/${post.slug}`} className="hover:text-hover transition-colors">
            {post.title}
          </Link>
        </h3>

        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          {post.readingTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min de leitura</span>
            </div>
          )}
          {post.author && (
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
          )}
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-primary font-medium hover:text-hover transition-colors inline-flex items-center"
        >
          Ler mais
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
