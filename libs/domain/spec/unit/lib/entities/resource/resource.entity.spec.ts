import { BaseEntity } from '../../../../../src/lib/common/base-entity';
import { createResourceStub } from '../../../../utils/stubs/resource.stub';
import { createFeatureStub } from '../../../../utils/stubs/feature.stub';

describe('resource entity', () => {
  test('it should be inherited from BaseEntity', () => {
    const resource = createResourceStub();

    expect(resource).toBeDefined();
    expect(resource).toBeInstanceOf(BaseEntity);
  });

  test('it should add a feature', () => {
    const resource = createResourceStub();
    const feature = createFeatureStub();

    resource.addFeature(feature);

    expect(resource.features).toBeDefined();
    // A stubbed resource has one feature already
    expect(resource.features).toHaveLength(2);
  });
});
