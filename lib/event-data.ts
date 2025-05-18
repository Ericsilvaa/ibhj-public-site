import { CalendarEvent } from "../components/calendar/event-calendar";

// Função auxiliar para criar datas
const createDate = (year: number, month: number, day: number): Date => {
  return new Date(year, month, day);
};

// Obter o ano e mês atual
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// Dados de exemplo para eventos da igreja
export const churchEvents: CalendarEvent[] = [
  // Eventos regulares de domingo
  ...Array.from({ length: 5 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, (i + 1) * 7); // Domingos do mês atual
    return [
      {
        id: `ebd-${date.toISOString()}`,
        title: "Escola Bíblica Dominical",
        date: new Date(date.setHours(9, 0, 0, 0)),
        time: "09h00",
        location: "Salas de EBD",
        category: "Regular",
      },
      {
        id: `culto-dom-${date.toISOString()}`,
        title: "Culto de Adoração",
        date: new Date(date.setHours(18, 30, 0, 0)),
        time: "18h30",
        location: "Templo Principal",
        category: "Regular",
        description: "Culto de adoração dominical com toda a igreja.",
      },
    ];
  }).flat(),

  // Eventos regulares de quarta-feira
  ...Array.from({ length: 4 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, (i + 1) * 7 + 3); // Quartas-feiras do mês atual
    return {
      id: `culto-qua-${date.toISOString()}`,
      title: "Culto de Oração e Estudo",
      date: new Date(date.setHours(19, 30, 0, 0)),
      time: "19h30",
      location: "Templo Principal",
      category: "Regular",
    };
  }),

  // Eventos regulares de sábado
  ...Array.from({ length: 4 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, (i + 1) * 7 + 6); // Sábados do mês atual
    return [
      {
        id: `coral-${date.toISOString()}`,
        title: "Ensaio do Coral",
        date: new Date(date.setHours(16, 0, 0, 0)),
        time: "16h00",
        location: "Sala de Música",
        category: "Regular",
      },
      {
        id: `jovens-${date.toISOString()}`,
        title: "Encontro de Jovens",
        date: new Date(date.setHours(19, 0, 0, 0)),
        time: "19h00",
        location: "Salão Social",
        category: "Regular",
        description:
          "Encontro semanal dos jovens com louvor, estudo bíblico e comunhão.",
      },
    ];
  }).flat(),

  // Eventos especiais
  {
    id: "aniversario-igreja",
    title: "Celebração de Aniversário da Igreja",
    date: createDate(currentYear, currentMonth, 25),
    time: "19h00",
    location: "Templo Principal",
    description:
      "Celebração especial pelos 55 anos da Igreja Batista de Henrique Jorge.",
    category: "Especial",
    attendees: 350,
    url: "/eventos/aniversario-igreja",
  },
  {
    id: "conferencia-familia",
    title: "Conferência de Família",
    date: createDate(currentYear, currentMonth + 1, 15),
    time: "19h30",
    location: "Templo Principal",
    description:
      "Conferência com palestrantes convidados sobre temas relacionados à família cristã.",
    category: "Especial",
    attendees: 200,
    url: "/eventos/conferencia-familia",
  },
  {
    id: "evangelismo-praca",
    title: "Evangelismo na Praça",
    date: createDate(currentYear, currentMonth + 2, 20),
    time: "15h00",
    location: "Praça do Henrique Jorge",
    description:
      "Ação evangelística com distribuição de literatura, apresentações e testemunhos.",
    category: "Especial",
    attendees: 50,
    url: "/eventos/evangelismo-praca",
  },
  {
    id: "retiro-jovens",
    title: "Retiro de Jovens",
    date: createDate(currentYear, currentMonth, 18),
    endDate: createDate(currentYear, currentMonth, 20),
    time: "07h00",
    location: "Sítio Betel",
    description: "Retiro anual dos jovens com o tema 'Firmes na Fé'.",
    category: "Especial",
    attendees: 80,
    url: "/eventos/retiro-jovens",
  },
  {
    id: "culto-mulheres",
    title: "Culto das Mulheres",
    date: createDate(currentYear, currentMonth, 12),
    time: "19h00",
    location: "Templo Principal",
    description: "Culto especial organizado pelo ministério de mulheres.",
    category: "Especial",
    attendees: 120,
    url: "/eventos/culto-mulheres",
  },
];

// Função para obter eventos de um mês específico
export function getEventsByMonth(year: number, month: number): CalendarEvent[] {
  return churchEvents.filter(
    (event) =>
      event.date.getFullYear() === year && event.date.getMonth() === month,
  );
}

// Função para obter eventos de uma data específica
export function getEventsByDate(date: Date): CalendarEvent[] {
  return churchEvents.filter(
    (event) =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear(),
  );
}

// Função para obter eventos por categoria
export function getEventsByCategory(category: string): CalendarEvent[] {
  return churchEvents.filter((event) => event.category === category);
}

// Função para obter eventos futuros
export function getUpcomingEvents(limit = 5): CalendarEvent[] {
  const now = new Date();
  return churchEvents
    .filter((event) => event.date > now)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, limit);
}
