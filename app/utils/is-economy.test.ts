import { isEconomy } from './is-economy';

describe('isEconomy', () => {
  it('should be an economy', () => {
    const guest = 56;

    expect(isEconomy(guest)).toBe(true);
  });

  it('should not be an economy guest', () => {
    const guest = 123;

    expect(isEconomy(guest)).toBe(false);
  });
});
