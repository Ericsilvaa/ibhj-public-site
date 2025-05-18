"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import {
  CONTACT_INFOS,
  OPERATING_HOURS,
  SOCIAL_PROFILES,
} from "@/constants/midias";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    // Simulação de envio
    setTimeout(() => {
      setEnviando(false);
      setMensagemEnviada(true);
      setFormData({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });

      // Reset da mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setMensagemEnviada(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero da página */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Entre em contato conosco e venha nos visitar
          </p>
        </div>
      </section>

      {/* Informações de Contato e Mapa */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-8">Informações de Contato</h2>

              <div className="space-y-6">
                {CONTACT_INFOS.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{label}</h3>
                      <p className="text-gray-700 whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-primary mt-12 mb-4">
                Redes Sociais
              </h3>
              {/* <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-medium w-24">Instagram:</span>
                  <a
                    href="https://www.instagram.com/ibhenriquejorge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @ibhenriquejorge
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-24">Facebook:</span>
                  <a
                    href="https://www.facebook.com/IB.Henrique.Jorge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    fb.com/IB.Henrique.Jorge
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-24">YouTube:</span>
                  <a
                    href="https://www.youtube.com/channel/IBHJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Canal da IBHJ
                  </a>
                </p>
              </div> */}

              <div className="space-y-2">
                {SOCIAL_PROFILES.map(({ label, url, display }) => (
                  <p key={label} className="flex items-center">
                    <span className="font-medium w-24">{label}:</span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {display}
                    </a>
                  </p>
                ))}
              </div>

              <h3 className="text-xl font-bold text-primary mt-12 mb-4">
                Horários de Funcionamento
              </h3>

              <div className="space-y-2">
                {OPERATING_HOURS.map(({ day, time }) => (
                  <p key={day} className="flex items-center">
                    <span className="font-medium w-24">{day}:</span>
                    <span>{time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-title mb-8">Envie uma Mensagem</h2>

              {mensagemEnviada ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>
                    Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Informações">Informações</option>
                    <option value="Visita">Quero visitar a igreja</option>
                    <option value="Oração">Pedido de oração</option>
                    <option value="Ministérios">
                      Informações sobre ministérios
                    </option>
                    <option value="Outro">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="btn-primary flex items-center justify-center"
                >
                  {enviando ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Como Chegar</h2>
          <div className="aspect-video bg-white rounded-lg shadow-md overflow-hidden">
            {/* Aqui seria inserido o mapa do Google Maps */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.221389633705!2d-38.59019672627117!3d-3.761930743341028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74bf507396b11%3A0xca2495c0615737df!2sIgreja%20Batista%20-%20Henrique%20Jorge!5e0!3m2!1spt-BR!2sbr!4v1747556033112!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização da Igreja Batista de Henrique Jorge"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
