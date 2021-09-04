import { BaseEntity } from '../../../../../src/lib/common/base-entity';
import { createFeatureStub } from '../../../../utils/stubs/feature.stub';

describe('feature entity', () => {
  test('should be inherited from BaseEntity', () => {
    const feature = createFeatureStub();

    expect(feature).toBeDefined();
    expect(feature).toBeInstanceOf(BaseEntity);
  });
});
