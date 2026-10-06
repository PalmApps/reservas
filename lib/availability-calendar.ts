/** Día de disponibilidad (respuesta de GET /api/availability). */
export interface DayAvailability {
  date: string;
  slots: { time: string; available: boolean }[];
  isWorkingDay: boolean;
  clientHasBooking?: boolean;
}

export function dayHasOpenSlots(
  day: DayAvailability | undefined
): boolean {
  return !!(
    day &&
    day.isWorkingDay &&
    day.slots.some((slot) => slot.available)
  );
}

/** Mismas clases que el calendario público de reserva (CalendarPicker). */
export const calendarOpenDayClassName =
  "border-2 border-primary/30 bg-primary/5 text-foreground hover:border-primary/60 hover:bg-primary/10";

export function buildAvailabilityByDate(
  availability: DayAvailability[]
): Map<string, DayAvailability> {
  return new Map(availability.map((day) => [day.date, day]));
}
