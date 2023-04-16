const guests = [
  23,
  45,
  155,
  374,
  22,
  99,
  100,
  101,
  115,
  209
];
const isEconomy = (guest: number): boolean => guest < 100;
const isPremium = (guest: number): boolean => guest >= 100;

const pickEconomyGuests = (guests: number[]): number[] => guests.filter(isEconomy);

const pickPremiumGuests = (guests: number[]): number[] => guests.filter(isPremium);

const sortNumbersDescending = (a: number, b: number) => b - a;

const getUsage = (guests: number[], rooms: number): number => {
  return guests
    .sort(sortNumbersDescending)
    .slice(0, rooms)
    .reduce((usage, guest) => usage + guest);
};

console.log('Test :: Premium', {
  premium: {
    rooms: 3,
    pickedRooms: pickPremiumGuests(guests),
    expectedUsage: 738,
    actualUsage: getUsage(pickPremiumGuests(guests), 3)
  }
});

console.log('Test :: Economy', {
  economy: {
    rooms: 3,
    pickedRooms: pickEconomyGuests(guests),
    expectedUsage: 167,
    actualUsage: getUsage(pickEconomyGuests(guests), 3)
  }
});
