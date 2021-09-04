import { CofeyClient } from '../../../src/lib/cofey-client';

describe('cofey client', () => {
  test('be defined', () => {
    const client = new CofeyClient({} as any);

    expect(client).toBeDefined();
    expect(client).toBeInstanceOf(CofeyClient);
  });
});
