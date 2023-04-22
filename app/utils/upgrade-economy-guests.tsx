import { sortNumbersDescending } from './index';

export const upgradeEconomyGuests = (
  economyGuests: number[],
  emptyEconomyRooms: number
): number[] => {
  return economyGuests.sort(sortNumbersDescending).slice(0, emptyEconomyRooms);
};
