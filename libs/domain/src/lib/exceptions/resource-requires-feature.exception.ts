export class ResourceRequiresFeatureException extends Error {
  constructor(resourceName: string) {
    super(`The resource: ${resourceName} requires at least one Feature.`);
  }
}
