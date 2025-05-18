import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import EventCalendar from "@/components/calendar/event-calendar";
import { churchEvents } from "@/lib/event-data";

interface EventoProps {
  dia: string;
  atividade: string;
  horario: string;
  local?: string;
  destaque?: boolean;
}

function Evento({
  dia,
  atividade,
  horario,
  local = "Templo Principal",
  destaque = false,
}: EventoProps) {
  return (
    <div
      className={`p-6 rounded-lg ${
        destaque ? "bg-accent/20 border border-accent" : "bg-white"
      } shadow-md mb-4`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center mb-3 md:mb-0">
          <Calendar className="h-5 w-5 text-primary mr-2" />
          <span className="font-medium">{dia}</span>
        </div>
        <div className="flex-1 md:ml-6">
          <h3
            className={`text-lg font-bold ${
              destaque ? "text-primary" : "text-gray-800"
            }`}
          >
            {atividade}
          </h3>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <Clock className="h-5 w-5 text-gray-600 mr-2" />
          <span>{horario}</span>
        </div>
      </div>
      {local && (
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{local}</span>
        </div>
      )}
    </div>
  );
}

export default function Programacao() {
  const eventosRegulares = [
    {
      dia: "Domingo",
      atividade: "Escola Bíblica Dominical",
      horario: "09h00",
      local: "Salas de EBD",
    },
    {
      dia: "Domingo",
      atividade: "Culto de Adoração",
      horario: "18h30",
      destaque: true,
    },
    {
      dia: "Quarta-feira",
      atividade: "Culto de Oração e Estudo",
      horario: "19h30",
    },
    { dia: "Sábado", atividade: "Ensaio do Coral", horario: "16h00" },
    {
      dia: "Sábado",
      atividade: "Encontro de Jovens",
      horario: "19h00",
      local: "Salão Social",
    },
  ];

  const eventosEspeciais = [
    {
      dia: "25/05/2025",
      atividade: "Celebração de Aniversário da Igreja",
      horario: "19h00",
      destaque: true,
    },
    {
      dia: "15/06/2025",
      atividade: "Conferência de Família",
      horario: "19h30",
    },
    {
      dia: "20/07/2025",
      atividade: "Evangelismo na Praça",
      horario: "15h00",
      local: "Praça do Henrique Jorge",
    },
  ];

  return (
    <div>
      {/* Hero da página */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programação</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Confira nossos horários de cultos e atividades
          </p>
        </div>
      </section>

      {/* Programação Regular */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title mb-8">Programação Regular</h2>

          <div className="mb-12">
            {eventosRegulares.map((evento, index) => (
              <Evento
                key={index}
                dia={evento.dia}
                atividade={evento.atividade}
                horario={evento.horario}
                local={evento.local}
                destaque={evento.destaque}
              />
            ))}
          </div>

          <div className="bg-surface p-6 rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold">Nota:</span> Todas as atividades são
              abertas ao público. Venha nos visitar e participar de nossos
              cultos e estudos bíblicos.
            </p>
          </div>
        </div>
      </section>

      {/* Calendário Interativo */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <h2 className="section-title mb-8">Calendário de Eventos</h2>

          <EventCalendar events={churchEvents} />

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Fique por dentro de todos os nossos eventos e atividades através
              do nosso calendário interativo.
            </p>
            <Link href="/contato" className="btn-primary">
              Entre em contato para mais informações
            </Link>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">
                Localização
              </h3>
              <p className="mb-4">
                Estamos localizados na Rua Porto Alegre, 997 - Henrique Jorge,
                Fortaleza/CE.
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg">
                {/* Aqui seria inserido um mapa do Google Maps */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Mapa do Google Maps
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">
                Informações Importantes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>Temos estacionamento próprio com segurança.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>
                    Disponibilizamos classes especiais para crianças durante os
                    cultos.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>
                    Oferecemos tradução em Libras nos cultos de domingo à noite.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>
                    Transmitimos nossos cultos ao vivo pelo nosso canal no
                    YouTube.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
