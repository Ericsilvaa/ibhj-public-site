export interface BlogPost {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  content: string
  author?: string
  authorImage?: string
  category?: string
  tags?: string[]
  readingTime?: number
  featured?: boolean
}

export interface BlogCategory {
  name: string
  slug: string
  count: number
}
