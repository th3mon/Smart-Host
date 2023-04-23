import { fillPremiumRooms } from './fill-premium-rooms';
import { EmptyRooms } from '@/app/components/room-occupancy-optimization/calculate-empty-rooms';
import { Guests } from './pick-guests';

export const fillEconomyRooms = ({
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
