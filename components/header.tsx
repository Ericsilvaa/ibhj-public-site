"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "../constants/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const pathname = usePathname();
  console.log("🚀 ~ Header ~ pathname:", pathname);

  // Detectar rolagem para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Detectar a rota atual
    setActivePath(pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/igreja/logo-ibhj.png"
              alt="Logo IBHJ"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <div className="hidden sm:flex flex-col leading-tight justify-center">
              <span className="text-sm font-bold text-primary">
                IGREJA BATISTA
              </span>
              <span className="text-xs text-gray-600">DE HENRIQUE JORGE</span>
            </div>
          </Link>
        </div>

        {/* Desktop menu - navegação em linha moderna */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {NAVIGATION.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activePath === item.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/membro"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-hover transition-colors shadow-sm"
          >
            Área do Membro
          </Link>

          {/* Mobile menu button - apenas visível em mobile */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menu principal</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu - slide down animation */}
      {mobileMenuOpen && (
        <div className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out">
          <div className="space-y-1 px-4 pb-3 pt-2 bg-white border-t">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md py-2 px-3 text-base font-medium ${
                  activePath === item.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:bg-surface hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
