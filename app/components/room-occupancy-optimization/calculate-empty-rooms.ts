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
  const calEmptyRooms = (rooms: number, guests: number): number => {
    const emptyRooms: number = rooms - guests;

    return emptyRooms < 0 ? 0 : emptyRooms;
  };

  return {
    premium: calEmptyRooms(rooms.premium, guests.premium.length),
    economy: calEmptyRooms(rooms.economy, guests.economy.length),
  };
};
