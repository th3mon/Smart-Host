import { sortNumbersDescending } from '@/app/utils';

const isGuestsEmpty = (guests: number[]): boolean => {
  return guests.length <= 0;
};

export const getRoomsUsage = (guests: number[], rooms: number): number => {
  if (rooms <= 0 || isGuestsEmpty(guests)) {
    return 0;
  }

  return guests
    .sort(sortNumbersDescending)
    .slice(0, rooms)
    .reduce((acc, guest) => acc + guest, 0);
};
