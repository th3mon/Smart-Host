import { isEconomy } from '../../utils';

export const pickEconomyGuests = (guests: number[]): number[] =>
  guests.filter(isEconomy);
