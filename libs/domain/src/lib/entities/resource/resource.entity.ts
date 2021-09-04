import { BaseEntity } from '../../common/base-entity';
import { ResourceProps } from './resource.type';
import { Feature } from '../feature';
import { ResourceRequiresFeatureException } from '../../exceptions/resource-requires-feature.exception';

export class Resource extends BaseEntity<ResourceProps> {
  get name(): string {
    return this.props.name;
  }

  get plural(): boolean {
    return this.props.plural;
  }

  get dto(): Record<string, unknown> {
    return this.props.dto;
  }

  get features(): Array<Feature> {
    return this.props.features;
  }

  public addFeature(feature: Feature) {
    this.props.features.push(feature);
  }

  static create(props: ResourceProps, id?: string) {
    if (!props.features.length) {
      throw new ResourceRequiresFeatureException(this.name);
    }

    return new Resource(props, id);
  }
}
