export const isEconomy = (guest: number): boolean => guest < 100;
export const isPremium = (guest: number): boolean => guest >= 100;

export const pickEconomyGuests = (guests: number[]): number[] =>
  guests.filter(isEconomy);

export const pickPremiumGuests = (guests: number[]): number[] =>
  guests.filter(isPremium);

export const upgradeGuestToPremium = (
  guests: number[],
  premiumGuests: number[],
  rooms: number
): number[] => {
  const emptyPremiumRooms = rooms - premiumGuests.length;

  if (emptyPremiumRooms > 0) {
    return [...guests]
      .filter((guest) => {
        return !premiumGuests.includes(guest);
      })
      .sort(sortNumbersDescending)
      .slice(0, emptyPremiumRooms);
  }

  return [...guests];
};

export const sortNumbersDescending = (a: number, b: number) => b - a;

export const getUsage = (guests: number[], rooms: number): number => {
  return guests
    .sort(sortNumbersDescending)
    .slice(0, rooms)
    .reduce((usage, guest) => usage + guest);
};
