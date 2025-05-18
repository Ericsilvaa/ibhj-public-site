"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";
import ShareButtons from "@/components/blog/share-buttons";
import TableOfContents from "@/components/blog/table-of-contents";
import RelatedPosts from "@/components/blog/related-posts";
import type { BlogPost } from "@/types/blog";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchedPost = getPostBySlug(slug);
      if (fetchedPost) {
        setPost(fetchedPost);
        setRelatedPosts(getRelatedPosts(slug, fetchedPost.category));

        // Extrair cabeçalhos para o índice
        const headings = fetchedPost.content.match(/^#{2,3} (.+)$/gm) || [];
        const items = headings.map((heading) => {
          const level = (heading.match(/^#+/) || [""])[0].length;
          const text = heading.replace(/^#+\s+/, "");
          const id = text
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .replace(/\s+/g, "-");

          return { id, text, level };
        });

        setTocItems(items);
      }
      setIsLoading(false);
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-gray-700 mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link href="/blog" className="btn-primary">
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Processar o conteúdo Markdown para HTML
  const processContent = () => {
    let content = post.content;

    // Processar cabeçalhos e adicionar IDs para o índice
    tocItems.forEach((item) => {
      const headingRegex = new RegExp(`(^#{${item.level}} ${item.text}$)`, "m");
      content = content.replace(headingRegex, `$1 {#${item.id}}`);
    });

    // Dividir o conteúdo em linhas
    const lines = content.split("\n");

    // Processar cada linha
    const processedLines = lines.map((line) => {
      // Processar cabeçalhos
      if (line.startsWith("#")) {
        const level = (line.match(/^#+/) || [""])[0].length;
        const text = line.replace(/^#+\s+/, "").replace(/ {#.+}$/, "");
        const idMatch = line.match(/ {#(.+)}$/);
        const id = idMatch ? idMatch[1] : "";

        return `<h${level} id="${id}" class="text-${
          level === 1 ? "3xl" : level === 2 ? "2xl" : "xl"
        } font-bold text-primary my-4">
            ${text}
          </h${level}>`;
      }

      // Processar parágrafos
      if (
        line.trim() &&
        !line.startsWith(">") &&
        !line.startsWith("-") &&
        !line.startsWith("*")
      ) {
        return `<p class="mb-4 text-gray-700">${line}</p>`;
      }

      // Processar citações
      if (line.startsWith(">")) {
        const text = line.replace(/^>\s+/, "");
        return `<blockquote class="border-l-4 border-primary pl-4 italic my-4 text-gray-600">${text}</blockquote>`;
      }

      // Processar listas
      if (line.startsWith("-") || line.startsWith("*")) {
        const text = line.replace(/^[-*]\s+/, "");
        return `<li class="ml-6 mb-2">${text}</li>`;
      }

      return line;
    });

    // Juntar as linhas processadas
    let processedContent = processedLines.join("\n");

    // Envolver listas em <ul>
    processedContent = processedContent.replace(
      /<li class="ml-6 mb-2">(.*?)<\/li>\n(?!<li)/g,
      '<li class="ml-6 mb-2">$1</li></ul>\n',
    );
    processedContent = processedContent.replace(
      /(?<!<\/ul>\n)(<li class="ml-6 mb-2">)/g,
      '<ul class="list-disc mb-4">\n$1',
    );

    return processedContent;
  };

  return (
    <div>
      {/* Hero do post */}
      <section className="relative bg-primary text-white py-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Voltar para o Blog</span>
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center text-sm text-white/80 gap-6">
            {post.category && (
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
            )}

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
        </div>
      </section>

      {/* Conteúdo do post */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Autor */}
                {post.author && post.authorImage && (
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {post.author}
                        </h3>
                        <p className="text-sm text-gray-500">Autor</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Índice */}
                {tocItems.length > 0 && <TableOfContents items={tocItems} />}

                {/* Compartilhar */}
                <ShareButtons
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                  title={post.title}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-3">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Conteúdo principal */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Imagem de capa */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo do artigo */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: processContent() }}
              />

              {/* Posts relacionados */}
              {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
