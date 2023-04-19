export const isEconomy = (guest: number): boolean => guest < 100;
export const isPremium = (guest: number): boolean => guest >= 100;

export const pickEconomyGuests = (guests: number[]): number[] =>
  guests.filter(isEconomy);

export const pickPremiumGuests = (
  guests: number[],
  rooms: number
): number[] => {
  const premiumGuests = guests.filter(isPremium);
  const emptyPremiumRooms = rooms - premiumGuests.length;
  const upgradeGuestToPremium = (guests: number[]): number[] =>
    [...guests]
      .filter((guest) => {
        return !premiumGuests.includes(guest);
      })
      .sort(sortNumbersDescending)
      .slice(0, emptyPremiumRooms);

  if (emptyPremiumRooms > 0) {
    return [...premiumGuests, ...upgradeGuestToPremium(guests)];
  }

  return premiumGuests;
};

export const sortNumbersDescending = (a: number, b: number) => b - a;

export const getUsage = (guests: number[], rooms: number): number => {
  return guests
    .sort(sortNumbersDescending)
    .slice(0, rooms)
    .reduce((usage, guest) => usage + guest);
};
