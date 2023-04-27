import { Guests } from './pick-guests';
import { EmptyRooms } from './calculate-empty-rooms';
import { dropUpgradedGuests } from './drop-upgraded-guests';

describe('dropUpgradedGuestsRooms', () => {
  it('should drop upgraded guests when there is upgraded to premium', () => {
    const guests: Guests = {
      premium: [55],
      economy: [11, 22, 33, 44, 55],
    };

    const emptyRooms: EmptyRooms = {
      premium: 3,
      economy: 3,
    };

    expect(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      })
    ).toEqual([11, 22, 33, 44]);
  });

  it('should drop upgraded guests when there is upgraded to premium', () => {
    const guests: Guests = {
      premium: [33, 44, 55],
      economy: [11, 22, 33, 44, 55],
    };

    const emptyRooms: EmptyRooms = {
      premium: 3,
      economy: 3,
    };

    expect(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      })
    ).toEqual([11, 22]);
  });

  it('should not change guests when there is not any', () => {
    const guests: Guests = {
      premium: [],
      economy: [],
    };

    const emptyRooms: EmptyRooms = {
      premium: 3,
      economy: 3,
    };

    expect(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      })
    ).toEqual([]);
  });

  it('should not change guests when there is no premium guests', () => {
    const guests: Guests = {
      premium: [],
      economy: [11, 22, 33, 44],
    };

    const emptyRooms: EmptyRooms = {
      premium: 3,
      economy: 3,
    };

    expect(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      })
    ).toEqual([11, 22, 33, 44]);
  });

  it('should not change guests when there is no economy guests', () => {
    const guests: Guests = {
      premium: [111],
      economy: [],
    };

    const emptyRooms: EmptyRooms = {
      premium: 3,
      economy: 3,
    };

    expect(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      })
    ).toEqual([]);
  });

  it('should not change guests when there is no upgraded guests', () => {
    const guests: Guests = {
      premium: [111, 222, 333, 444, 555],
      economy: [11, 22, 33, 44, 55],
    };

    const emptyRooms: EmptyRooms = {
      premium: 3,
      economy: 3,
    };

    expect(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      })
    ).toEqual([11, 22, 33, 44, 55]);
  });
});
