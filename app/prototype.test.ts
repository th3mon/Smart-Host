import { getUsage, sortNumbersDescending } from './prototype';
import { pickEconomyGuests, pickPremiumGuests } from './utils';

const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
describe('Prototype', () => {
  it('should sort numbers descending', () => {
    const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
    const sortedGuests = [374, 209, 155, 115, 101, 100, 99, 45, 23, 22];

    expect(guests.sort(sortNumbersDescending)).toEqual(sortedGuests);
  });

  it('should get usage for the economy guests', () => {
    const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
    const economyGuests = pickEconomyGuests(guests);
    const expectedUsage = 167;

    expect(getUsage(economyGuests, 3)).toBe(expectedUsage);
  });

  it('should get usage for the premium guests', () => {
    const premiumGuests = pickPremiumGuests(guests, 3);
    const expectedUsage = 738;

    expect(getUsage(premiumGuests, 3)).toBe(expectedUsage);
  });
});
