import { pickHighestPayingGuests } from './pick-highest-paying-guests';
import { EmptyRooms } from '@/app/components/room-occupancy-optimization/calculate-empty-rooms';
import { Guests } from './pick-guests';

export type GetPremiumAndUpgradedEconomyGuestsProps = {
  guests: Guests;
  emptyRooms: EmptyRooms;
};

export const getPremiumAndUpgradedEconomyGuests = ({
  guests,
  emptyRooms,
}: GetPremiumAndUpgradedEconomyGuestsProps): number[] =>
  !emptyRooms.economy && emptyRooms.premium
    ? [
        ...guests.premium,
        ...pickHighestPayingGuests(guests.economy, emptyRooms.premium),
      ]
    : guests.premium;
