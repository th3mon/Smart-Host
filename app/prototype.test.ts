import {
  getUsage,
  isEconomy,
  isPremium,
  pickEconomyGuests,
  pickPremiumGuests,
  sortNumbersDescending,
} from './prototype';

const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
describe('Prototype', () => {
  it('should be an economy', () => {
    const guest = 56;

    expect(isEconomy(guest)).toBe(true);
  });

  it('should not be an economy guest', () => {
    const guest = 123;

    expect(isEconomy(guest)).toBe(false);
  });

  it('should be a premium guest', () => {
    const guest = 123;

    expect(isPremium(guest)).toBe(true);
  });

  it('should not be a premium guest', () => {
    const guest = 56;

    expect(isPremium(guest)).toBe(false);
  });

  it('should be pick economy quests', () => {
    const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
    const economyGuests = [23, 45, 22, 99];

    expect(pickEconomyGuests(guests)).toEqual(economyGuests);
  });

  it('should be pick premium quests', () => {
    const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
    const premiumGuests = [155, 374, 100, 101, 115, 209];

    expect(pickPremiumGuests(guests, premiumGuests.length)).toEqual(
      premiumGuests
    );
  });

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
