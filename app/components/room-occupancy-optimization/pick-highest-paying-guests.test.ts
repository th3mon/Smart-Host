import { pickHighestPayingGuests } from './pick-highest-paying-guests';

describe('upgradeEconomyGuests', () => {
  it('should pick highest paying guests', () => {
    const guests: number[] = [11, 22, 33, 44, 55];
    const emptyRooms: number = 3;

    expect(pickHighestPayingGuests(guests, emptyRooms)).toEqual(
      expect.arrayContaining([33, 44, 55])
    );
  });

  it('should pick highest paying guests when there is 3 empty rooms and clients pays same price', () => {
    const guests: number[] = [111, 111, 111, 111];
    const emptyRooms: number = 3;

    expect(pickHighestPayingGuests(guests, emptyRooms)).toEqual([
      111, 111, 111,
    ]);
    expect(pickHighestPayingGuests(guests, emptyRooms).length).toEqual(3);
  });

  it('should not pick guests when there is no empty rooms', () => {
    const guests: number[] = [111, 111, 111, 111];
    const emptyRooms: number = 0;

    expect(pickHighestPayingGuests(guests, emptyRooms)).toEqual([]);
  });
});
