export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    celular: string;
    salt: string;
    role: 'cliente' | 'funcionario';
  }
  