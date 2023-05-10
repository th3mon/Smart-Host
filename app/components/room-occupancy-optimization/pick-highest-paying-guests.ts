import { sortNumbersDescending } from '@/app/utils';

export const pickHighestPayingGuests = (
  economyGuests: number[],
  emptyEconomyRooms: number
): number[] => {
  return economyGuests.sort(sortNumbersDescending).slice(0, emptyEconomyRooms);
};
