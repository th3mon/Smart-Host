import { fillPremiumRooms } from './fill-premium-rooms';
import { EmptyRooms } from './calculate-empty-rooms';
import { Guests } from './pick-guests';

export const dropUpgradedGuests = ({
  guests,
  emptyRooms,
}: {
  guests: Guests;
  emptyRooms: EmptyRooms;
}) =>
  guests.economy.filter(
    (guest: number) =>
      !fillPremiumRooms({
        guests,
        emptyRooms,
      }).includes(guest)
  );
