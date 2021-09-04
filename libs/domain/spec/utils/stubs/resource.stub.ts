import { Resource, ResourceProps } from '../../../src/lib/entities/resource';
import { createFeatureStub } from './feature.stub';

const initialProps: ResourceProps = {
  name: 'User',
  dto: {},
  features: [createFeatureStub()],
  plural: true,
};

export function createResourceStub(
  props: ResourceProps = initialProps,
  id?: string
): Resource {
  return Resource.create({ ...initialProps, ...props }, id);
}
