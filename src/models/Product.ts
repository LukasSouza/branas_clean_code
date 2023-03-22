export default class Product {
  public name: string;
  public quantity: number;
  public value: number;

  constructor(name: string, quantity: number, value: number) {
    this.name = name;
    this.quantity = quantity;
    this.value = value;
  }
}
