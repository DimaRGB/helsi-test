export default class Car {

  static types = ['sedan', 'disabled', 'truck'];

  constructor(type) {
    if (typeof type === 'string') {
      type = type.toLowerCase();
      if (Car.types.includes(type)) {
        this.type = type;
        return;
      }
    }
    throw new Error(`\n\tCan't create Car with invalid type: ${type}\n\tValid types: ${Car.types}`);
  }
}
