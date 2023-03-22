import Product from "./Product";
import User from "./User";

export default class Order {
  private products: Product[];
  private user: User;
  private discountCoupon: number | null;

  constructor(user: User) {
    user.validateCpf();
    this.user = user;
    this.products = [];
    this.discountCoupon = null;
  }

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public addDiscount(discount: number) {
    this.discountCoupon = discount;
  }

  public getTotal() {
    let total = 0;
    this.products.forEach((product) => {
      total = total + product.value * product.quantity;
    });
    if (this.discountCoupon) {
      total = total - total * (this.discountCoupon / 100);
    }
    return total;
  }
}
