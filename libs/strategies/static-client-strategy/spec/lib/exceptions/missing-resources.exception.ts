export class MissingResourcesException extends Error {
  constructor() {
    super('You cannot provide an empty array.');
  }
}
