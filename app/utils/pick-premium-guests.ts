import { isPremium } from './is-premium';

export const pickPremiumGuests = (guests: number[]): number[] =>
  guests.filter(isPremium);
