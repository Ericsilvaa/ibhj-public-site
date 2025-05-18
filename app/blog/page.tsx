"use client";

import { useState } from "react";
import {
  getAllCategories,
  getFeaturedPosts,
  getPostsByCategory,
  searchPosts,
} from "@/lib/blog-data";
import PostCard from "@/components/blog/post-card";
import CategoryFilter from "@/components/blog/category-filter";
import SearchBar from "@/components/blog/search-bar";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchResults, setSearchResults] = useState<null | any[]>(null);

  const categories = ["Todos", ...getAllCategories().map((cat) => cat.name)];
  const featuredPost = getFeaturedPosts(1)[0];
  const posts = searchResults || getPostsByCategory(activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchResults(null);
  };

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    const results = searchPosts(query);
    setSearchResults(results);
  };

  return (
    <div>
      {/* Hero da página */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog da IBHJ</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Devocionais, estudos bíblicos e reflexões para edificação espiritual
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="py-16">
        <div className="container-custom">
          {/* Barra de pesquisa */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Filtro de categorias */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onChange={handleCategoryChange}
          />

          {/* Resultados da pesquisa ou posts filtrados */}
          {searchResults !== null && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {searchResults.length === 0
                  ? "Nenhum resultado encontrado"
                  : `${searchResults.length} resultado(s) encontrado(s)`}
              </h2>
            </div>
          )}

          {/* Post em destaque (apenas na visualização "Todos" e sem pesquisa) */}
          {activeCategory === "Todos" && !searchResults && featuredPost && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Em Destaque
              </h2>
              <PostCard post={featuredPost} featured={true} />
            </div>
          )}

          {/* Lista de posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {searchResults
                ? "Resultados da Pesquisa"
                : activeCategory === "Todos"
                ? "Artigos Recentes"
                : `Artigos em ${activeCategory}`}
            </h2>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum artigo encontrado.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA - Inscrição na newsletter */}
      <section className="py-16 bg-surface">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Receba nossos artigos por e-mail
            </h2>
            <p className="text-gray-700 mb-6">
              Inscreva-se em nossa newsletter para receber os novos artigos,
              devocionais e estudos bíblicos diretamente em seu e-mail.
            </p>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-hover transition-colors"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
