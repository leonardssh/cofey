import { v4 } from 'uuid';

export abstract class BaseEntity<T extends Record<string, unknown>> {
  protected constructor(
    protected readonly props: T,
    public readonly id: string = v4()
  ) {}
}
