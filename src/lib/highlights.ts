import type { Highlight } from "@/content/highlights";

const MAX_HERO_HIGHLIGHTS = 3;

function dateHasArrived(date: string | undefined, now: Date): boolean {
  if (!date) {
    return true;
  }

  return new Date(`${date}T00:00:00`).getTime() <= now.getTime();
}

function dateHasNotPassed(date: string | undefined, now: Date): boolean {
  if (!date) {
    return true;
  }

  return now.getTime() <= new Date(`${date}T23:59:59`).getTime();
}

export function getActiveHighlights(
  highlights: readonly Highlight[],
  now = new Date(),
): Highlight[] {
  return highlights
    .filter(
      (highlight) =>
        highlight.enabled &&
        dateHasArrived(highlight.startDate, now) &&
        dateHasNotPassed(highlight.endDate, now),
    )
    .sort((first, second) => first.order - second.order)
    .slice(0, MAX_HERO_HIGHLIGHTS);
}
