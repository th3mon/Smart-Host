import { getRoomsUsage } from './get-rooms-usage';

describe('getRoomsUsage', () => {
  it('should get usage for the all guests', () => {
    const guests: number[] = [111, 222, 333];
    const rooms: number = 3;

    expect(getRoomsUsage(guests, rooms)).toEqual(666);
  });

  it('should get usage for a single guest', () => {
    const guests: number[] = [111];
    const rooms: number = 1;

    expect(getRoomsUsage(guests, rooms)).toEqual(111);
  });

  it('should not get usage', () => {
    const guests: number[] = [111, 222, 333];
    const rooms: number = 0;

    expect(getRoomsUsage(guests, rooms)).toEqual(0);
  });

  it('should not get usage when rooms count is below zero', () => {
    const guests: number[] = [111, 222, 333];
    const rooms: number = -1;

    expect(getRoomsUsage(guests, rooms)).toEqual(0);
  });

  it('should not get usage when there is no guests', () => {
    const guests: number[] = [];
    const rooms: number = 3;

    expect(getRoomsUsage(guests, rooms)).toEqual(0);
  });
});
