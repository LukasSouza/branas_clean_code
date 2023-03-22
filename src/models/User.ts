import { validate } from "../validator";

export default class User {
  private name: string;
  private cpf: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }

  public validateCpf() {
    if (!validate(this.cpf)) {
      throw new Error("CPF inválido");
    }
    return true;
  }
}
