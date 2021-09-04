import { FeatureContract } from './value-objects/feature-contract.vo';
import { HttpMethod } from '../../enums';

export type FeatureProps = {
  name: string;
  path: string;
  method: HttpMethod;
  contracts: Array<FeatureContract>;
};
