import { upgradeEconomyGuests } from './upgrade-economy-guests';
import { EmptyRooms } from '@/app/components/room-occupancy-optimization/calculate-empty-rooms';
import { Guests } from './pick-guests';

export const fillPremiumRooms = ({
  guests,
  emptyRooms,
}: {
  guests: Guests;
  emptyRooms: EmptyRooms;
}): number[] =>
  !emptyRooms.economy && emptyRooms.premium
    ? [
        ...guests.premium,
        ...upgradeEconomyGuests(guests.economy, emptyRooms.premium),
      ]
    : guests.premium;
