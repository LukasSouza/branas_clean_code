import { validate } from "../src/validator";

test("must test a valid cpf", () => {
  const cpf = "389.177.260-20";
  expect(validate(cpf)).toBe(true);
});

test("must test an invalid cpf", () => {
  const cpf = "389.177.260-27";
  expect(validate(cpf)).toBe(false);
});

test.each(["389.177.260-20", "38917726020"])(
  "must test cpf lenght with with a valid cpf lenght",
  (cpf) => {
    expect(validate(cpf)).toBe(true);
  }
);

test.each(["389.177.260-2.0", "3.8.9.1.7.7.2.6.0.2-0"])(
  "must test cpf lenght with with an invalid cpf lenght",
  (cpf) => {
    expect(validate(cpf)).toBe(false);
  }
);

test("must not have same digit on all cpf", () => {
  const cpf = "999.999.999-99";
  expect(validate(cpf)).toBe(false);
});

test("must not have same digit on alsl cpf", () => {
  const cpf = "%$@.asd.vcd-po";
  expect(validate(cpf)).toBe(false);
});
