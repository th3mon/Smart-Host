import { sortNumbersDescending } from '@/app/utils';

export const getRoomsUsage = (guests: number[], rooms: number): number => {
  return guests
    .sort(sortNumbersDescending)
    .slice(0, rooms)
    .reduce((acc, guest) => acc + guest, 0);
};
