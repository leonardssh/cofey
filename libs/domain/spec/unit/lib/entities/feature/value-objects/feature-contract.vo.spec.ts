import { createFeatureContractStub } from '../../../../../utils/stubs/feature-contract.stub';

describe('feature contract value object', () => {
  test('should be defined', () => {
    const featureContract = createFeatureContractStub();

    expect(featureContract).toBeDefined();
  });
});
