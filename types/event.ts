export type CalendarCategory = "Regular" | "Especial";

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  time: string;
  location: string;
  description?: string;
  category: CalendarCategory;
  attendees?: number;
  url?: string;
}
