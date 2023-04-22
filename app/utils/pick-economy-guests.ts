import { isEconomy } from './is-economy';

export const pickEconomyGuests = (guests: number[]): number[] =>
  guests.filter(isEconomy);
