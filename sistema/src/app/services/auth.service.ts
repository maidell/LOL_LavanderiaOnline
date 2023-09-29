import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { User } from '../models';

const USERS_KEY = 'current_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];


  private hashPassword(password: string, salt: string): string {
    return CryptoJS.SHA256(password + salt).toString();
  }

  constructor() {
    this.initializeUsers();
  }


  private initializeUsers() {
    this.users = [
      {
        id: 1,
        name: 'Maria',
        email: 'maria@funcionario.com',
        password: '',
        cpf: '123.456.789-01',
        cep: '12345-678',
        rua: 'Rua Maria',
        numero: '123',
        bairro: 'Bairro Maria',
        cidade: 'Cidade Maria',
        estado: 'EM',
        celular: '(12) 34567-8901',
        salt: '',
        role: 'funcionario'
      },
      {
        id: 2,
        name: 'Mário',
        email: 'mario@funcionario.com',
        password: '',
        cpf: '987.654.321-01',
        cep: '98765-432',
        rua: 'Rua Mário',
        numero: '456',
        bairro: 'Bairro Mário',
        cidade: 'Cidade Mário',
        estado: 'EM',
        celular: '(98) 76543-2109',
        salt: '',
        role: 'funcionario'
      },
      {
        id: 3,
        name: 'João',
        email: 'joao@cliente.com',
        password: '',
        cpf: '111.222.333-44',
        cep: '54321-987',
        rua: 'Rua João',
        numero: '789',
        bairro: 'Bairro João',
        cidade: 'Cidade João',
        estado: 'EM',
        celular: '(11) 98765-4321',
        salt: '',
        role: 'cliente'
      },
      {
        id: 4,
        name: 'José',
        email: 'jose@cliente.com',
        password: '',
        cpf: '555.666.777-88',
        cep: '67890-123',
        rua: 'Rua José',
        numero: '101',
        bairro: 'Bairro José',
        cidade: 'Cidade José',
        estado: 'EM',
        celular: '(55) 67890-1234',
        salt: '',
        role: 'cliente'
      },
      {
        id: 5,
        name: 'Joana',
        email: 'joana@cliente.com',
        password: '',
        cpf: '999.888.777-66',
        cep: '45678-901',
        rua: 'Rua Joana',
        numero: '111',
        bairro: 'Bairro Joana',
        cidade: 'Cidade Joana',
        estado: 'EM',
        celular: '(99) 45678-9012',
        salt: '',
        role: 'cliente'
      },
      {
        id: 6,
        name: 'Joaquina',
        email: 'joaquina@cliente.com',
        password: '',
        cpf: '777.888.999-11',
        cep: '23456-789',
        rua: 'Rua Joaquina',
        numero: '222',
        bairro: 'Bairro Joaquina',
        cidade: 'Cidade Joaquina',
        estado: 'EM',
        celular: '(77) 23456-7890',
        salt: '',
        role: 'cliente'
      },
    ];

    this.users.forEach(user => {
      const salt = CryptoJS.lib.WordArray.random(16).toString();
      const hashedPassword = this.hashPassword('senha', salt); // Use 'senha' para teste
      user.salt = salt;
      user.password = hashedPassword;
    });
  }

  login(email: string, password: string): Observable<User | null> {
    const user = this.users.find(u => u.email === email);

    if (user) {
      const hashedPassword = this.hashPassword(password, user.salt);

      if (hashedPassword === user.password) {
        this.currentUser = user; // Define o usuário autenticado
        localStorage.setItem(USERS_KEY, JSON.stringify(this.currentUser));
        return of(user);
      }
    }
    return of(null);
  }

  register(user: User): Observable<User | null> {
    const salt = CryptoJS.lib.WordArray.random(16).toString();
    const hashedPassword = this.hashPassword(user.password, salt);
    user.salt = salt;
    user.password = hashedPassword;

    this.users.push(user);

    return of(user);
  }

  private currentUser: User | null = null;
  getCurrentUser(): User | null {
    const user = localStorage.getItem(USERS_KEY);
    return user ? JSON.parse(user) : null;
  }

  isEmployee(): boolean | null {
    const user = this.getCurrentUser();

    if (user && user.role === 'funcionario') {
      return true;
    }
    if (user && user.role === 'cliente') {
      return false;
    }
    return null;
  }
  isLoggedIn(): boolean {
    console.log(this.getCurrentUser());
    return this.getCurrentUser() !== null;
  }

  logout(): void {
    localStorage.removeItem(USERS_KEY);
  }

  getUsersByRole(role: string): User[] {
    return this.users.filter(user => user.role === role);
  }


}
