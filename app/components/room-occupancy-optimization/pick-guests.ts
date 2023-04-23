import { pickEconomyGuests } from './pick-economy-guests';
import { pickPremiumGuests } from './pick-premium-guests';

export type Guests = {
  economy: number[];
  premium: number[];
};

export const pickGuests = (guests: number[]): Guests => {
  return {
    economy: pickEconomyGuests(guests),
    premium: pickPremiumGuests(guests),
  };
};
