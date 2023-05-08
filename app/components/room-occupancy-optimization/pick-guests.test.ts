import { pickGuests } from './pick-guests';

describe('pickGuests', () => {
  it('should pick guests', () => {
    const guests: number[] = [111, 222, 333, 11, 22, 33];

    expect(pickGuests(guests)).toEqual({
      premium: [111, 222, 333],
      economy: [11, 22, 33],
    });
  });

  it('should be empty when there is no guests to pick', () => {
    const guests: number[] = [];

    expect(pickGuests(guests)).toEqual({
      premium: [],
      economy: [],
    });
  });
});
