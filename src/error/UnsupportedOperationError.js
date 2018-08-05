export default class UnsupportedOperationError extends Error {
  constructor() {
    super('Unsupported Operation');
  }
}