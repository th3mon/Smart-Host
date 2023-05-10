import { getPremiumAndUpgradedEconomyGuests } from './get-premium-and-upgraded-economy-guests';
import { EmptyRooms } from './calculate-empty-rooms';
import { Guests } from './pick-guests';

export type DropUpgradeProps = {
  guests: Guests;
  emptyRooms: EmptyRooms;
};

export const dropUpgradedGuests = ({ guests, emptyRooms }: DropUpgradeProps) =>
  guests.economy.filter(
    (guest: number) =>
      !getPremiumAndUpgradedEconomyGuests({
        guests,
        emptyRooms,
      }).includes(guest)
  );
