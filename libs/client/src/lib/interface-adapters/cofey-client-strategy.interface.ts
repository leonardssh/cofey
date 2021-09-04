import { Resource } from '@cofey/domain';

export interface CofeyClientStrategyInterface {
  generateApi(resources: Array<Resource>): Promise<string>;
}
