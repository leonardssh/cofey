import { Feature } from '../feature';

export type ResourceProps = {
  name: string;
  plural: boolean;
  dto: Record<string, unknown>;
  features: Array<Feature>;
};
