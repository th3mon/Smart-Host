import { pickEconomyGuests } from './pick-economy-guests';
import { pickPremiumGuests } from './pick-premium-guests';

export const pickGuests = (
  guests: number[]
): { economyGuests: number[]; premiumGuests: number[] } => {
  return {
    economyGuests: pickEconomyGuests(guests),
    premiumGuests: pickPremiumGuests(guests),
  };
};
