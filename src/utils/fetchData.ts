import { Result } from "../types/Types";
import { getRandomFromArray } from "./getRandomFromArray";

function createRFC3339DateString(
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  seconds: number
) {
  const dateString = new Date(
    Date.UTC(year, month - 1, day, hours, minutes, seconds)
  ).toISOString();
  return dateString;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export const fetchData = async (
  channelId: string,
  query: string,
  month: { begin: number; end: number },
  year: { begin: number; end: number },
  token: string
) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const tBegin = createRFC3339DateString(year.begin, month.begin, 1, 0, 0, 0);
  const tEnd = createRFC3339DateString(
    year.end,
    month.end,
    getDaysInMonth(year.end, month.end),
    24,
    59,
    59
  );
  const API_URI = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&channelId=${channelId}&maxResults=50&type=video&videoDuration=long&q=${query}&publishedAfter=${tBegin}&publishedBefore=${tEnd}&pageToken=${token}`;

  const res = await fetch(API_URI);
  const data = await res.json();
  return {
    token: data.nextPageToken,
    items: data.items,
  };
};
