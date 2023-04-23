import { Rooms } from './room-occupancy-optimization';
import { Guests } from './pick-guests';

export type EmptyRooms = {
  premium: number;
  economy: number;
};
export const calculateEmptyRooms = (
  guests: Guests,
  rooms: Rooms
): EmptyRooms => {
  return {
    premium: rooms.premium - guests.premium.length,
    economy: rooms.economy - guests.economy.length,
  };
};
