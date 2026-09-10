export type Attendee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  organisation: string;
  jobTitle: string;
  dietaryRequirements: string;
  accessibilityRequirements: string;
  consentedAt: string;
  createdAt: string;
};

export type CheckIn = {
  attendeeId: string;
  date: string;
  checkedInAt: string;
};

export const demoAttendees: Attendee[] = [
  {
    id: "oak-2026-mschmidt",
    name: "Maria Schmidt",
    email: "m.schmidt@example.org",
    phone: "+41 79 555 0123",
    organisation: "Open Society Foundations",
    jobTitle: "Programme Director",
    dietaryRequirements: "Vegetarian",
    accessibilityRequirements: "None",
    consentedAt: "2026-08-18T10:00:00.000Z",
    createdAt: "2026-08-18T10:00:00.000Z",
  },
];

const attendeesKey = "oak-attendees-v1";
const checkInsKey = "oak-checkins-v1";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getAttendees(): Attendee[] {
  return read(attendeesKey, demoAttendees);
}

export function saveAttendee(attendee: Attendee): void {
  const attendees = getAttendees().filter((item) => item.id !== attendee.id);
  write(attendeesKey, [attendee, ...attendees]);
}

export function getCheckIns(): CheckIn[] {
  return read(checkInsKey, []);
}

export function recordCheckIn(attendeeId: string, date = new Date().toISOString().slice(0, 10)): { added: boolean; checkIn: CheckIn } {
  const checkIns = getCheckIns();
  const existing = checkIns.find((item) => item.attendeeId === attendeeId && item.date === date);
  if (existing) return { added: false, checkIn: existing };
  const checkIn = { attendeeId, date, checkedInAt: new Date().toISOString() };
  write(checkInsKey, [checkIn, ...checkIns]);
  return { added: true, checkIn };
}

export function makeAttendeeId(name: string): string {
  const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `oak-2026-${slug}-${crypto.randomUUID().slice(0, 8)}`;
}
