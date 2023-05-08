import { pickHighestPayingGuests } from './pick-highest-paying-guests';
import { EmptyRooms } from '@/app/components/room-occupancy-optimization/calculate-empty-rooms';
import { Guests } from './pick-guests';

export const getPremiumAndUpgradedEconomyGuests = ({
  guests,
  emptyRooms,
}: {
  guests: Guests;
  emptyRooms: EmptyRooms;
}): number[] =>
  !emptyRooms.economy && emptyRooms.premium
    ? [
        ...guests.premium,
        ...pickHighestPayingGuests(guests.economy, emptyRooms.premium),
      ]
    : guests.premium;
