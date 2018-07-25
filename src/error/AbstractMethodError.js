export default class AbstractMethodError extends Error {
  constructor() {
    super('Not implemented method');
  }
}