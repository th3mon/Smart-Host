import { isEconomy } from '@/app/utils';

export const pickEconomyGuests = (guests: number[]): number[] =>
  guests.filter(isEconomy);
