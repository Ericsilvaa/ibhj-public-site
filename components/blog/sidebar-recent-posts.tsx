import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/types/blog"

interface SidebarRecentPostsProps {
  posts: BlogPost[]
  title?: string
}

export default function SidebarRecentPosts({ posts, title = "Posts Recentes" }: SidebarRecentPostsProps) {
  if (!posts.length) return null

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-bold text-primary text-lg mb-4">{title}</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.slug} className="flex items-start">
            <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-gray-800 line-clamp-2 text-sm">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
