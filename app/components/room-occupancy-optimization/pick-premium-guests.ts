import { isPremium } from '../../utils';

export const pickPremiumGuests = (guests: number[]): number[] =>
  guests.filter(isPremium);
