import { isPremium } from './utils';

export const pickPremiumGuests = (guests: number[]): number[] =>
  guests.filter(isPremium);
export const sortNumbersDescending = (a: number, b: number) => b - a;

export const getUsage = (guests: number[], rooms: number): number => {
  return guests
    .sort(sortNumbersDescending)
    .slice(0, rooms)
    .reduce((usage, guest) => usage + guest);
};
