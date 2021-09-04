import { BaseEntity } from '../../common/base-entity';
import { FeatureContract } from './value-objects/feature-contract.vo';
import { FeatureProps } from './feature.type';
import { HttpMethod } from '../../enums';

export class Feature extends BaseEntity<FeatureProps> {
  get name(): string {
    return this.props.name;
  }

  get path(): string {
    return this.props.path;
  }

  get method(): HttpMethod {
    return this.props.method;
  }

  get contracts(): Array<FeatureContract> {
    return this.props.contracts;
  }

  static create(props: FeatureProps, id?: string) {
    return new Feature(props, id);
  }
}
