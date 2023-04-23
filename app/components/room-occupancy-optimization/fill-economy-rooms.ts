import { fillPremiumRooms } from './fill-premium-rooms';
import { EmptyRooms } from '@/app/components/room-occupancy-optimization/calculate-empty-rooms';

export const fillEconomyRooms = ({
  economyGuests,
  premiumGuests,
  emptyRooms,
}: {
  economyGuests: number[];
  premiumGuests: number[];
  emptyRooms: EmptyRooms;
}) =>
  economyGuests.filter(
    (guest: number) =>
      !fillPremiumRooms({
        economyGuests,
        premiumGuests,
        emptyRooms,
      }).includes(guest)
  );
