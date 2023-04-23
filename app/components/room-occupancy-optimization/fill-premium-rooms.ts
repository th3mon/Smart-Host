import { upgradeEconomyGuests } from './upgrade-economy-guests';
import { EmptyRooms } from '@/app/components/room-occupancy-optimization/calculate-empty-rooms';
import { Guests } from './pick-guests';

export const fillPremiumRooms = ({
  guests,
  emptyRooms,
}: {
  guests: Guests;
  emptyRooms: EmptyRooms;
}): number[] => {
  const filledEconomyRooms: boolean = emptyRooms.economy <= 0;

  return filledEconomyRooms && emptyRooms.premium > 0
    ? [
        ...guests.premium,
        ...upgradeEconomyGuests(guests.economy, emptyRooms.premium),
      ]
    : guests.premium;
};
