"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarIcon,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import Link from "next/link";

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  time?: string;
  location?: string;
  description?: string;
  category?: string;
  url?: string;
  attendees?: number;
}

interface EventCalendarProps {
  events: CalendarEvent[];
  initialDate?: Date;
}

export default function EventCalendar({
  events,
  initialDate = new Date(),
}: EventCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<"month" | "week" | "day">("month");

  // Funções para navegação do calendário
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  // Função para obter o nome do mês
  const getMonthName = (date: Date) => {
    return date.toLocaleString("pt-BR", { month: "long" });
  };

  // Função para obter o nome do dia da semana
  const getDayOfWeekName = (date: Date) => {
    return date.toLocaleString("pt-BR", { weekday: "short" });
  };

  // Função para verificar se uma data tem eventos
  const hasEvents = (date: Date) => {
    return events.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    );
  };

  // Função para obter eventos de uma data específica
  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    );
  };

  // Função para gerar os dias do mês atual
  const generateDaysForMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Primeiro dia do mês
    const firstDayOfMonth = new Date(year, month, 1);
    // Último dia do mês
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Dia da semana do primeiro dia (0 = Domingo, 1 = Segunda, etc.)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Total de dias no mês
    const daysInMonth = lastDayOfMonth.getDate();

    // Array para armazenar todos os dias que serão exibidos
    const days = [];

    // Adicionar dias do mês anterior para completar a primeira semana
    const daysFromPrevMonth = firstDayOfWeek;
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const day = new Date(year, month, -i);
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: isSameDay(day, new Date()),
        hasEvents: hasEvents(day),
      });
    }

    // Adicionar dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(year, month, i);
      days.push({
        date: day,
        isCurrentMonth: true,
        isToday: isSameDay(day, new Date()),
        hasEvents: hasEvents(day),
      });
    }

    // Adicionar dias do próximo mês para completar a última semana
    const totalDaysDisplayed = Math.ceil(days.length / 7) * 7;
    const daysFromNextMonth = totalDaysDisplayed - days.length;
    for (let i = 1; i <= daysFromNextMonth; i++) {
      const day = new Date(year, month + 1, i);
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: isSameDay(day, new Date()),
        hasEvents: hasEvents(day),
      });
    }

    return days;
  };

  // Função para verificar se duas datas são o mesmo dia
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Função para formatar a data
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Gerar dias para o mês atual
  const days = generateDaysForMonth();

  // Eventos para a data selecionada
  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cabeçalho do calendário */}
      <div className="p-4 border-b flex items-center justify-between bg-primary text-white">
        <div className="flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2" />
          <h2 className="text-xl font-bold">Calendário de Eventos</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode("month")}
            className={`px-3 py-1 rounded-md ${
              viewMode === "month"
                ? "bg-white text-primary"
                : "bg-primary-dark text-white"
            }`}
          >
            Mês
          </button>
          <button
            onClick={() => setViewMode("week")}
            className={`px-3 py-1 rounded-md ${
              viewMode === "week"
                ? "bg-white text-primary"
                : "bg-primary-dark text-white"
            }`}
          >
            Semana
          </button>
          <button
            onClick={() => setViewMode("day")}
            className={`px-3 py-1 rounded-md ${
              viewMode === "day"
                ? "bg-white text-primary"
                : "bg-primary-dark text-white"
            }`}
          >
            Dia
          </button>
        </div>
      </div>

      {/* Navegação do mês */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Mês anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h3 className="text-lg font-semibold mx-4">
            {getMonthName(currentDate).charAt(0).toUpperCase() +
              getMonthName(currentDate).slice(1)}{" "}
            {currentDate.getFullYear()}
          </h3>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Próximo mês"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <button
          onClick={goToToday}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-hover transition-colors"
        >
          Hoje
        </button>
      </div>

      {/* Calendário - Visualização de Mês */}
      {viewMode === "month" && (
        <div className="p-4">
          {/* Dias da semana */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
              <div
                key={day}
                className="text-center font-medium text-gray-500 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Dias do mês */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(day.date)}
                className={`
                  h-14 p-1 rounded-md flex flex-col items-center justify-center relative
                  ${
                    day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-400"
                  }
                  ${day.isToday ? "border-2 border-primary" : ""}
                  ${
                    selectedDate && isSameDay(day.date, selectedDate)
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }
                  ${
                    day.hasEvents &&
                    selectedDate &&
                    !isSameDay(day.date, selectedDate)
                      ? "font-bold"
                      : ""
                  }

                `}
              >
                <span>{day.date.getDate()}</span>
                {day.hasEvents && (
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-1 ${
                      selectedDate && isSameDay(day.date, selectedDate)
                        ? "bg-white"
                        : "bg-primary"
                    }`}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lista de eventos para a data selecionada */}
      {selectedDate && (
        <div className="p-4 border-t">
          <h3 className="text-lg font-semibold mb-4">
            Eventos para {formatDate(selectedDate)}
            {selectedEvents.length === 0 && " - Nenhum evento"}
          </h3>

          <div className="space-y-3">
            {selectedEvents.map((event) => (
              <div
                key={event.id}
                className={`p-4 rounded-lg border-l-4 ${
                  event.category === "Especial"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-primary bg-primary/5"
                }`}
              >
                <h4 className="font-bold text-lg">{event.title}</h4>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  {event.time && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  {event.attendees && (
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{event.attendees} participantes</span>
                    </div>
                  )}
                </div>
                {event.description && (
                  <p className="mt-2 text-gray-700">{event.description}</p>
                )}
                {event.url && (
                  <div className="mt-3">
                    <Link
                      href={event.url}
                      className="text-primary hover:text-hover font-medium inline-flex items-center"
                    >
                      Mais informações
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
