import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types/blog"

interface RelatedPostsProps {
  posts: BlogPost[]
  title?: string
}

export default function RelatedPosts({ posts, title = "Posts Relacionados" }: RelatedPostsProps) {
  if (!posts.length) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-primary mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-40">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-primary mb-2 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-hover transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-700 text-sm line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
