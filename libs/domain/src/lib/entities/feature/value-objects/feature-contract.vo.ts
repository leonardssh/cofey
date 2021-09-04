import { ValueObject } from '../../../common/value-object';
import { FeatureContractProps } from './feature-contract-vo.type';

export class FeatureContract extends ValueObject<FeatureContractProps> {
  get value(): unknown {
    return this.props.value;
  }

  static create(props: FeatureContractProps) {
    return new FeatureContract(props);
  }
}
