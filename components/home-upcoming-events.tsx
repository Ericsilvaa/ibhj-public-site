import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import { getUpcomingEvents } from "@/lib/event-data";
import { formatDate } from "@/lib/utils";

export default function HomeUpcomingEvents() {
  const upcomingEvents = getUpcomingEvents(3);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-primary">Próximos Eventos</h3>
        <Link
          href="/programacao"
          className="text-primary hover:text-hover text-sm font-medium"
        >
          Ver todos
        </Link>
      </div>

      {upcomingEvents.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          Nenhum evento programado.
        </p>
      ) : (
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <h4 className="font-bold text-gray-800">{event.title}</h4>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  <span>{formatDate(event.date.toString())}</span>
                </div>
                {event.time && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    <span>{event.time}</span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
              {event.url && (
                <Link
                  href={event.url}
                  className="text-primary hover:text-hover text-sm font-medium inline-block mt-2"
                >
                  Mais informações →
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
