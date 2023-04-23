import { calculateEmptyRooms, EmptyRooms } from './calculate-empty-rooms';
import { Guests } from './pick-guests';
import { Rooms } from './room-occupancy-optimization';

describe('calculateEmptyRooms', () => {
  describe('when there are no guests', () => {
    it('should have empty premium rooms', () => {
      const guests: Guests = {
        premium: [],
        economy: [],
      };
      const rooms: Rooms = {
        premium: 3,
        economy: 0,
      };

      const expected: EmptyRooms = {
        premium: 3,
        economy: 0,
      };

      expect(calculateEmptyRooms(guests, rooms)).toEqual(expected);
    });

    it('should have empty economy rooms', () => {
      const guests: Guests = {
        premium: [],
        economy: [],
      };
      const rooms: Rooms = {
        premium: 0,
        economy: 3,
      };

      const expected: EmptyRooms = {
        premium: 0,
        economy: 3,
      };

      expect(calculateEmptyRooms(guests, rooms)).toEqual(expected);
    });

    it('should have no empty rooms', () => {
      const guests: Guests = {
        premium: [],
        economy: [],
      };
      const rooms: Rooms = {
        premium: 0,
        economy: 0,
      };

      const expected: EmptyRooms = {
        premium: 0,
        economy: 0,
      };

      expect(calculateEmptyRooms(guests, rooms)).toEqual(expected);
    });

    it('should have empty rooms for each type', () => {
      const guests: Guests = {
        premium: [],
        economy: [],
      };
      const rooms: Rooms = {
        premium: 3,
        economy: 3,
      };

      const expected: EmptyRooms = {
        premium: 3,
        economy: 3,
      };

      expect(calculateEmptyRooms(guests, rooms)).toEqual(expected);
    });
  });

  describe('when there are guests', () => {
    it('should have no empty rooms', () => {
      const guests: Guests = {
        premium: [111, 222, 333],
        economy: [11, 22, 33],
      };
      const rooms: Rooms = {
        premium: 3,
        economy: 3,
      };
      const expected: EmptyRooms = {
        premium: 0,
        economy: 0,
      };
      expect(calculateEmptyRooms(guests, rooms)).toEqual(expected);
    });

    it('should have empty rooms', () => {
      const guests: Guests = {
        premium: [111, 222, 333],
        economy: [11, 22, 33],
      };
      const rooms: Rooms = {
        premium: 6,
        economy: 6,
      };

      const expected: EmptyRooms = {
        premium: 3,
        economy: 3,
      };

      expect(calculateEmptyRooms(guests, rooms)).toEqual(expected);
    });
  });

  it('should have no empty rooms for each type when there are too many guests', () => {
    const guests: Guests = {
      premium: [111, 222, 333, 444, 555],
      economy: [11, 22, 33, 44, 55],
    };

    const rooms: Rooms = {
      premium: 3,
      economy: 3,
    };

    const expected: EmptyRooms = {
      premium: 0,
      economy: 0,
    };

    expect(calculateEmptyRooms(guests, rooms)).toEqual(expected);
  });
});
