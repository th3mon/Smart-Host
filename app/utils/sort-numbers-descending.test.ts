import { sortNumbersDescending } from './sort-numbers-descending';

describe('sortNumbersDescending', () => {
  it('should sort numbers descending', () => {
    const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
    const sortedGuests = [374, 209, 155, 115, 101, 100, 99, 45, 23, 22];

    expect(guests.sort(sortNumbersDescending)).toEqual(sortedGuests);
  });
});
