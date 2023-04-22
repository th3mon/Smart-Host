import { isPremium } from './is-premium';

describe('isPremium', () => {
  it('should be a premium guest', () => {
    const guest = 123;

    expect(isPremium(guest)).toBe(true);
  });

  it('should not be a premium guest', () => {
    const guest = 56;

    expect(isPremium(guest)).toBe(false);
  });
});
