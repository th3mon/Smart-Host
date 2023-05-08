import { getRoomsUsage } from './get-rooms-usage';

describe('getRoomsUsage', () => {
  it('should get usage for the all guests', () => {
    const guests = [111, 222, 333];
    const rooms = 3;

    expect(getRoomsUsage(guests, rooms)).toEqual(666);
  });

  it('should get usage for a single guest', () => {
    const guests = [111];
    const rooms = 1;

    expect(getRoomsUsage(guests, rooms)).toEqual(111);
  });

  it('should not get usage', () => {
    const guests = [111, 222, 333];
    const rooms = 0;

    expect(getRoomsUsage(guests, rooms)).toEqual(0);
  });

  it('should not get usage when rooms count is below zero', () => {
    const guests = [111, 222, 333];
    const rooms = -1;

    expect(getRoomsUsage(guests, rooms)).toEqual(0);
  });

  it('should not get usage when there is no guests', () => {
    const guests = [];
    const rooms = 3;

    expect(getRoomsUsage(guests, rooms)).toEqual(0);
  });
});
