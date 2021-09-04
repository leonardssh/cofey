import { FeatureContract, FeatureContractProps } from '@cofey/domain';

const initialProps: FeatureContractProps = {
  value: null,
};

export function createFeatureContractStub(
  props: FeatureContractProps = initialProps
) {
  return FeatureContract.create({ ...initialProps, ...props });
}
