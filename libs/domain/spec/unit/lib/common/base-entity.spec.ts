import { BaseEntity } from '../../../../src/lib/common/base-entity';

export class Entity extends BaseEntity<any> {
  static create(props: any, id?: string) {
    return new Entity(props, id);
  }
}

describe('base entity', () => {
  describe('when creating an entity', () => {
    test('then it is defined', () => {
      const entity = Entity.create(null);

      expect(entity).toBeDefined();
    });

    test('then has an id', () => {
      const entity = Entity.create({});

      expect(entity.id).toBeDefined();
    });

    test('then it uses the given id', () => {
      const awesomeId = 'awesomeId';

      const entity = Entity.create({}, awesomeId);

      expect(entity.id).toBe(awesomeId);
    });
  });
});
