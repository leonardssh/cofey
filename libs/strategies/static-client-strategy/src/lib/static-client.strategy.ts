import { CofeyClientStrategyInterface } from '@cofey/client';
import { Resource } from '@cofey/domain';
import { MissingResourcesException } from '../../spec/lib/exceptions/missing-resources.exception';

/**
 * @Description
 * Creates an API layer based on the given Resources, but does not use a server under the hood. Instead it will
 * generate static data for every feature and use those as return values when invoking a API action.
 */
export class StaticClientStrategy implements CofeyClientStrategyInterface {
  generateApi(resources: Array<Resource>): Promise<string> {
    if (resources.length <= 0) {
      throw new MissingResourcesException();
    }

    return Promise.resolve('');
  }
}
