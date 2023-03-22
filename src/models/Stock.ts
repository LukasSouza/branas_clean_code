import Product from "./Product";

export default class Stock {
  private stockProducts: {
    product: Product;
    quantity: number;
  }[] = [];

  constructor(product: Product, quantity: number) {}
}
