import { isPremium } from '@/app/utils';

export const pickPremiumGuests = (guests: number[]): number[] =>
  guests.filter(isPremium);
