import {
  EVENT_CATEGORIES,
  EVENT_LABELS,
  EVENT_TIMES,
  EVENT_LOCATIONS,
} from "./events";
import type { CalendarEvent } from "@/types/event";

// Helpers
const createDate = (year: number, month: number, day: number): Date =>
  new Date(year, month, day);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// Dados principais
export const churchEvents: CalendarEvent[] = [
  // Regulares - domingo
  ...Array.from({ length: 5 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, (i + 1) * 7);
    return [
      {
        id: `ebd-${date.toISOString()}`,
        title: EVENT_LABELS.EBD,
        date: new Date(date.setHours(9, 0, 0, 0)),
        time: EVENT_TIMES.EBD,
        location: EVENT_LOCATIONS.SALAS_EBD,
        category: EVENT_CATEGORIES.REGULAR,
      },
      {
        id: `culto-dom-${date.toISOString()}`,
        title: EVENT_LABELS.CULTO_DOM,
        date: new Date(date.setHours(18, 30, 0, 0)),
        time: EVENT_TIMES.CULTO_DOM,
        location: EVENT_LOCATIONS.TEMPLO,
        category: EVENT_CATEGORIES.REGULAR,
        description: "Culto de adoração dominical com toda a igreja.",
      },
    ];
  }).flat(),

  // Quartas-feiras
  ...Array.from({ length: 4 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, (i + 1) * 7 + 3);
    return {
      id: `culto-qua-${date.toISOString()}`,
      title: EVENT_LABELS.CULTO_QUA,
      date: new Date(date.setHours(19, 30, 0, 0)),
      time: EVENT_TIMES.CULTO_QUA,
      location: EVENT_LOCATIONS.TEMPLO,
      category: EVENT_CATEGORIES.REGULAR,
    };
  }),

  // Sábados
  ...Array.from({ length: 4 }, (_, i) => {
    const date = new Date(currentYear, currentMonth, (i + 1) * 7 + 6);
    return [
      {
        id: `coral-${date.toISOString()}`,
        title: EVENT_LABELS.CORAL,
        date: new Date(date.setHours(16, 0, 0, 0)),
        time: EVENT_TIMES.CORAL,
        location: EVENT_LOCATIONS.SALA_MUSICA,
        category: EVENT_CATEGORIES.REGULAR,
      },
      {
        id: `jovens-${date.toISOString()}`,
        title: EVENT_LABELS.JOVENS,
        date: new Date(date.setHours(19, 0, 0, 0)),
        time: EVENT_TIMES.JOVENS,
        location: EVENT_LOCATIONS.SALAO_SOCIAL,
        category: EVENT_CATEGORIES.REGULAR,
        description:
          "Encontro semanal dos jovens com louvor, estudo bíblico e comunhão.",
      },
    ];
  }).flat(),

  // Especiais
  {
    id: "aniversario-igreja",
    title: EVENT_LABELS.ANIVERSARIO,
    date: createDate(currentYear, currentMonth, 25),
    time: EVENT_TIMES.CULTO_MULHERES,
    location: EVENT_LOCATIONS.TEMPLO,
    description: "Celebração especial pelos 55 anos da igreja.",
    category: EVENT_CATEGORIES.ESPECIAL,
    attendees: 350,
    url: "/eventos/aniversario-igreja",
  },
  {
    id: "conferencia-familia",
    title: EVENT_LABELS.CONFERENCIA,
    date: createDate(currentYear, currentMonth + 1, 15),
    time: EVENT_TIMES.CONFERENCIA,
    location: EVENT_LOCATIONS.TEMPLO,
    description: "Conferência com temas sobre a família cristã.",
    category: EVENT_CATEGORIES.ESPECIAL,
    attendees: 200,
    url: "/eventos/conferencia-familia",
  },
  {
    id: "evangelismo-praca",
    title: EVENT_LABELS.EVANGELISMO,
    date: createDate(currentYear, currentMonth + 2, 20),
    time: EVENT_TIMES.EVANGELISMO,
    location: EVENT_LOCATIONS.PRACA,
    description: "Evangelismo com distribuição de literatura e apresentações.",
    category: EVENT_CATEGORIES.ESPECIAL,
    attendees: 50,
    url: "/eventos/evangelismo-praca",
  },
  {
    id: "retiro-jovens",
    title: EVENT_LABELS.RETIRO_JOVENS,
    date: createDate(currentYear, currentMonth, 18),
    endDate: createDate(currentYear, currentMonth, 20),
    time: EVENT_TIMES.RETIRO,
    location: EVENT_LOCATIONS.SITIO_BETEL,
    description: "Retiro anual dos jovens com o tema 'Firmes na Fé'.",
    category: EVENT_CATEGORIES.ESPECIAL,
    attendees: 80,
    url: "/eventos/retiro-jovens",
  },
  {
    id: "culto-mulheres",
    title: EVENT_LABELS.CULTO_MULHERES,
    date: createDate(currentYear, currentMonth, 12),
    time: EVENT_TIMES.CULTO_MULHERES,
    location: EVENT_LOCATIONS.TEMPLO,
    description: "Culto especial do ministério de mulheres.",
    category: EVENT_CATEGORIES.ESPECIAL,
    attendees: 120,
    url: "/eventos/culto-mulheres",
  },
];

// Funções auxiliares
export function getEventsByMonth(year: number, month: number): CalendarEvent[] {
  return churchEvents.filter(
    (event) =>
      event.date.getFullYear() === year && event.date.getMonth() === month,
  );
}

export function getEventsByDate(date: Date): CalendarEvent[] {
  return churchEvents.filter(
    (event) =>
      event.date.getFullYear() === date.getFullYear() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getDate() === date.getDate(),
  );
}

export function getEventsByCategory(category: string): CalendarEvent[] {
  return churchEvents.filter((event) => event.category === category);
}

export function getUpcomingEvents(limit = 5): CalendarEvent[] {
  const now = new Date();
  return churchEvents
    .filter((event) => event.date > now)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, limit);
}
