import Order from "../src/models/Order";
import Product from "../src/models/Product";
import User from "../src/models/User";

test("Deve criar um pedido com 3 produtos (com descrição, preço e quantidade) e calcular o valor total", () => {
  const product1 = new Product("Livro Senhor dos Aneis", 2, 50);
  const product2 = new Product('Mackbook 16"', 1, 20500);
  const product3 = new Product("SSD M.2 Gen4", 3, 500);
  const user = new User("Lucas", "049.280.355-26");
  const order = new Order(user);

  order.addProduct(product1);
  order.addProduct(product2);
  order.addProduct(product3);

  const total = order.getTotal();

  expect(total).toBe(22100);
});

test("Deve criar um pedido com 3 produtos, associar um cupom de desconto e calcular o total (percentual sobre o total do pedido)", () => {
  const product1 = new Product("Livro Senhor dos Aneis", 2, 50);
  const product2 = new Product('Mackbook 16"', 1, 20500);
  const product3 = new Product("SSD M.2 Gen4", 3, 500);
  const user = new User("Lucas", "049.280.355-26");
  const order = new Order(user);

  order.addProduct(product1);
  order.addProduct(product2);
  order.addProduct(product3);
  order.addDiscount(10);

  const total = order.getTotal();

  expect(total).toBe(19890);
});

test("Não deve criar um pedido com cpf inválido (lançar algum tipo de erro)", () => {
  const product1 = new Product("Livro Senhor dos Aneis", 2, 50);
  const product2 = new Product('Mackbook 16"', 1, 20500);
  const product3 = new Product("SSD M.2 Gen4", 3, 500);
  const user = new User("Lucas", "049.280.350-26");

  expect(() => {
    new Order(user);
  }).toThrow("CPF inválido");
});
