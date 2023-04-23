import { Rooms } from './room-occupancy-optimization';

export type EmptyRooms = {
  premium: number;
  economy: number;
};
export const calculateEmptyRooms = (
  premiumGuests: number[],
  economyGuests: number[],
  rooms: Rooms
): EmptyRooms => {
  return {
    premium: rooms.premium - premiumGuests.length,
    economy: rooms.economy - economyGuests.length,
  };
};
