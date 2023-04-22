import { upgradeEconomyGuests } from './upgrade-economy-guests';

export const fillPremiumRooms = ({
  emptyEconomyRooms,
  emptyPremiumRooms,
  economyGuests,
  premiumGuests,
}: {
  emptyEconomyRooms: number;
  emptyPremiumRooms: number;
  economyGuests: number[];
  premiumGuests: number[];
}): number[] => {
  const filledEconomyRooms: boolean = emptyEconomyRooms <= 0;

  return filledEconomyRooms && emptyPremiumRooms > 0
    ? [
        ...premiumGuests,
        ...upgradeEconomyGuests(economyGuests, emptyPremiumRooms),
      ]
    : premiumGuests;
};
