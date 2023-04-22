import { pickEconomyGuests } from './pick-economy-guests';

describe('pickEconomyGuests', () => {
  it('should be pick economy quests', () => {
    const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
    const economyGuests = [23, 45, 22, 99];

    expect(pickEconomyGuests(guests)).toEqual(economyGuests);
  });
});
