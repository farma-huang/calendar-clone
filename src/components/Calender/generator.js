import { chunk } from "lodash";
import { addDays, startOfWeek } from "date-fns";

export function buildWeeks (year, monthIndex) {
    const firstDayOfMonth = new Date(year, monthIndex);
    const firstDayOfCanlendar = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });
    const weeks = new Array(5*7)
        .fill(0)
        .map((_, i) => addDays(firstDayOfCanlendar, i));
    return chunk(weeks, 7);
};

export default { buildWeeks };