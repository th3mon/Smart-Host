import { pickPremiumGuests } from './pick-premium-guests';

describe('pickPremiumGuests', () => {
  it('should be pick premium quests', () => {
    const guests: number[] = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
    const premiumGuests: number[] = [155, 374, 100, 101, 115, 209];

    expect(pickPremiumGuests(guests)).toEqual(premiumGuests);
  });
});
