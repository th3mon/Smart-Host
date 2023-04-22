import { fillPremiumRooms } from './fill-premium-rooms';

export const fillEconomyRooms = ({
  economyGuests,
  premiumGuests,
  emptyEconomyRooms,
  emptyPremiumRooms,
}: {
  economyGuests: number[];
  premiumGuests: number[];
  emptyEconomyRooms: number;
  emptyPremiumRooms: number;
}) =>
  economyGuests.filter(
    (guest: number) =>
      !fillPremiumRooms({
        economyGuests,
        premiumGuests,
        emptyEconomyRooms,
        emptyPremiumRooms,
      }).includes(guest)
  );
