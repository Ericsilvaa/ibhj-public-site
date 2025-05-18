import { blogPosts } from "@/constants/blog";
import type { BlogPost, BlogCategory } from "@/types/blog";

// Função para obter posts por categoria
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "Todos") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
}

// Função para obter post por slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Função para obter posts relacionados
export function getRelatedPosts(
  currentSlug: string,
  category?: string,
  limit = 3,
): BlogPost[] {
  let related = category
    ? blogPosts.filter(
        (post) => post.category === category && post.slug !== currentSlug,
      )
    : blogPosts.filter((post) => post.slug !== currentSlug);

  // Embaralhar array para pegar posts aleatórios da mesma categoria
  related = related.sort(() => 0.5 - Math.random());

  return related.slice(0, limit);
}

// Função para obter posts em destaque
export function getFeaturedPosts(limit = 3): BlogPost[] {
  const featured = blogPosts.filter((post) => post.featured);
  const additional = blogPosts
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return [...featured, ...additional].slice(0, limit);
}

// Função para obter posts recentes
export function getRecentPosts(limit = 5): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Função para obter todas as categorias
export function getAllCategories(): BlogCategory[] {
  const categories = new Map<string, number>();

  // Contar posts por categoria
  blogPosts.forEach((post) => {
    if (post.category) {
      const count = categories.get(post.category) || 0;
      categories.set(post.category, count + 1);
    }
  });

  // Converter para array de objetos
  return Array.from(categories.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    count,
  }));
}

// Função para pesquisar posts
export function searchPosts(query: string): BlogPost[] {
  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0);

  if (searchTerms.length === 0) return [];

  return blogPosts.filter((post) => {
    const searchableText = `
      ${post.title.toLowerCase()}
      ${post.excerpt.toLowerCase()}
      ${post.content.toLowerCase()}
      ${post.category?.toLowerCase() || ""}
      ${post.tags?.join(" ").toLowerCase() || ""}
      ${post.author?.toLowerCase() || ""}
    `;

    return searchTerms.some((term) => searchableText.includes(term));
  });
}
