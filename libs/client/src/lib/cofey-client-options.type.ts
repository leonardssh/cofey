import { Resource } from '@cofey/domain';
import { CofeyClientStrategyInterface } from './interface-adapters/cofey-client-strategy.interface';

export type CofeyClientOptions = {
  strategy: CofeyClientStrategyInterface;
  resources: Array<Resource>;
};
