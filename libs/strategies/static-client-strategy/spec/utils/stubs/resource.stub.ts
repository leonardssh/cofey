import { createFeatureStub } from './feature.stub';
import { Resource, ResourceProps } from '@cofey/domain';

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
