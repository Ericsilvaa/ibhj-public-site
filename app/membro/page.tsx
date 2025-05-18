"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, User, Eye, EyeOff, ArrowRight, ChevronLeft } from "lucide-react";

export default function AreaMembro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setErro("");

    // Simulação de login
    setTimeout(() => {
      setEnviando(false);
      // Simulando erro para demonstração
      setErro(
        "Área em desenvolvimento. Por favor, entre em contato com a secretaria.",
      );
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 py-16">
      <div className="container-custom">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-hover mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span>Voltar para o site</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Coluna da esquerda - Imagem e informações */}
          <div className="relative bg-primary text-white p-8 flex flex-col justify-between">
            <div className="absolute inset-0 z-0 opacity-20">
              <Image
                src="/images/igreja/interior-igreja.jpg"
                alt="Interior da Igreja"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/igreja/logo-ibhj.png"
                  alt="IBHJ Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto mr-3"
                />
                <h1 className="text-2xl font-bold">
                  Igreja Batista de Henrique Jorge
                </h1>
              </div>
              <h2 className="text-3xl font-bold mb-4">Área do Membro</h2>
              <p className="text-white/80 mb-6">
                Acesse conteúdos exclusivos, acompanhe eventos e participe da
                nossa comunidade online.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <h3 className="font-semibold text-xl">Benefícios do acesso:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                  <span>Acesso a estudos bíblicos exclusivos</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                  <span>Calendário de eventos e compromissos</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                  <span>Comunicação direta com a liderança</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                  <span>Materiais de estudo e devocionais</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna da direita - Formulário de login */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Bem-vindo(a) de volta!
              </h2>
              <p className="text-gray-600 mb-8">
                Entre com suas credenciais para acessar sua conta
              </p>

              {erro && (
                <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded mb-6">
                  <p>{erro}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-mail
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="senha"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Senha
                    </label>
                    <Link
                      href="#"
                      className="text-sm text-primary hover:text-hover"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={mostrarSenha ? "text" : "password"}
                      id="senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {mostrarSenha ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="lembrar"
                    type="checkbox"
                    checked={lembrar}
                    onChange={() => setLembrar(!lembrar)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label
                    htmlFor="lembrar"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Lembrar de mim
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full flex items-center justify-center bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-hover transition-colors shadow-sm"
                >
                  {enviando ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Entrando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Entrar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Não tem uma conta?{" "}
                  <Link
                    href="/contato"
                    className="text-primary hover:text-hover font-medium"
                  >
                    Entre em contato
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
