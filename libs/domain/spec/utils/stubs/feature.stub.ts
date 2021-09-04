import { Feature, FeatureProps, HttpMethod } from '@cofey/domain';

const initialProps: FeatureProps = {
  name: 'getFeature',
  contracts: [],
  method: HttpMethod.GET,
  path: '/',
};

export function createFeatureStub(props: FeatureProps = initialProps): Feature {
  return Feature.create({ ...initialProps, ...props });
}
