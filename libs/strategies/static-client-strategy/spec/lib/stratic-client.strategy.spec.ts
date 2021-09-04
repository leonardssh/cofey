import { StaticClientStrategy } from '../../src/lib/static-client.strategy';
import { MissingResourcesException } from './exceptions/missing-resources.exception';
import { createResourceStub } from '../utils/stubs/resource.stub';

describe('static-client-strategy', () => {
  let strategy: StaticClientStrategy;

  beforeEach(() => {
    strategy = new StaticClientStrategy();
  });

  test('be defined', () => {
    const strategy = new StaticClientStrategy();

    expect(strategy).toBeDefined();
  });

  describe('when invoking generateApi()', () => {
    test('we throw when it has no resources', () => {
      const resourceStub = createResourceStub();

      const failed = () => strategy.generateApi([]);
      const success = () => strategy.generateApi([resourceStub]);

      expect(failed).toThrowError(MissingResourcesException);
      expect(success).not.toThrowError(MissingResourcesException);
    });

    test.todo('we expect a generated api layer');
  });
});
