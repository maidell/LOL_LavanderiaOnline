export class Funcionario {
  name!: string;
  idade: any;
  dataNascimento: any;
  email: string | undefined;
  password!: string;
  salt: string = '';
  role: 'funcionario' | undefined;
  constructor(
    public id?: number,
    public nome?: string,

  ) {
  }
}
