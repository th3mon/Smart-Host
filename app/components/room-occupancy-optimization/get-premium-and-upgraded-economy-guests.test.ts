import { getPremiumAndUpgradedEconomyGuests } from './get-premium-and-upgraded-economy-guests';
import { EmptyRooms } from './calculate-empty-rooms';
import { Guests } from './pick-guests';

describe('fillPremiumRooms', () => {
  it('should contain only given premium guests', () => {
    const guests: Guests = {
      premium: [111, 222, 333],
      economy: [11, 22, 33],
    };

    const emptyRooms: EmptyRooms = {
      premium: 3,
      economy: 3,
    };

    expect(
      getPremiumAndUpgradedEconomyGuests({
        guests,
        emptyRooms,
      })
    ).toEqual([111, 222, 333]);
  });

  it('should include economy guests, when there is no empty economy room', () => {
    const guests: Guests = {
      premium: [111],
      economy: [11, 22, 33],
    };

    const emptyRooms: EmptyRooms = {
      premium: 10,
      economy: 0,
    };

    expect(
      getPremiumAndUpgradedEconomyGuests({
        guests,
        emptyRooms,
      })
    ).toEqual(expect.arrayContaining([111, 11, 22, 33]));
  });

  it('should include only one of the economy guests, when there is no empty economy room', () => {
    const guests: Guests = {
      premium: [111],
      economy: [11, 22, 33],
    };

    const emptyRooms: EmptyRooms = {
      premium: 2,
      economy: 0,
    };

    expect(
      getPremiumAndUpgradedEconomyGuests({
        guests,
        emptyRooms,
      })
    ).toEqual(expect.arrayContaining([111, 33]));
  });
});
