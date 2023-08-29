export class User {
    
    id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    password!: string;
    cpf: string | undefined;
    cep: string | undefined;
    rua: string | undefined;
    numero: string | undefined;
    bairro: string | undefined;
    cidade: string | undefined;
    estado: string | undefined;
    celular: string | undefined;
    salt: string = '';
    role: 'cliente' | 'funcionario' | undefined;
  }
  