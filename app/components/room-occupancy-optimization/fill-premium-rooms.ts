import { upgradeEconomyGuests } from './upgrade-economy-guests';
import { EmptyRooms } from '@/app/components/room-occupancy-optimization/calculate-empty-rooms';

export const fillPremiumRooms = ({
  economyGuests,
  premiumGuests,
  emptyRooms,
}: {
  economyGuests: number[];
  premiumGuests: number[];
  emptyRooms: EmptyRooms;
}): number[] => {
  const filledEconomyRooms: boolean = emptyRooms.economy <= 0;

  return filledEconomyRooms && emptyRooms.premium > 0
    ? [
        ...premiumGuests,
        ...upgradeEconomyGuests(economyGuests, emptyRooms.premium),
      ]
    : premiumGuests;
};
