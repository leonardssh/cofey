import { ValueObject } from '../../../../src/lib/common/value-object';

class Name extends ValueObject<{ value: string }> {
  get value() {
    return this.props.value;
  }

  static create(props: { value: string }) {
    return new Name(props);
  }
}

describe('value-object', () => {
  describe('when invoking equals', () => {
    test('then it returns true when they are identical in value', () => {
      const n1 = Name.create({ value: 'name1' });
      const n2 = Name.create({ value: 'name1' });

      expect(n1.equals(n2)).toBeTruthy();
    });

    test('then it returns false when they are NOT identical in value', () => {
      const n1 = Name.create({ value: 'name1' });
      const n2 = Name.create({ value: 'name' });

      expect(n1.equals(n2)).toBeFalsy();
    });
  });
});
