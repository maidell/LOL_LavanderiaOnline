import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario.model';

const LS_CHAVE:  string = "funcionarios";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  listarTodos(): Funcionario[] {
    const funcionarios = localStorage[LS_CHAVE];
    return funcionarios ? JSON.parse(funcionarios): [];
  }
  inserir(Funcionario: Funcionario): void {
    const funcionarios = this.listarTodos();

    Funcionario.id = new Date().getTime();

    funcionarios.push(Funcionario);

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  }
  atualizar(funcionario: Funcionario): void {
    const funcionarios: Funcionario[] = this.listarTodos();

    funcionarios.forEach( (obj,index,objs) => {
      if(funcionario.id === obj.id) {
        objs[index] = funcionario
      }
    });
  }
  remover(id: number): void {
    let funcionarios: Funcionario [] = this.listarTodos();

    funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  }
  buscarPorId(id: number): Funcionario | undefined {
    const funcionarios: Funcionario[] = this.listarTodos();

    return funcionarios.find(funcionario => funcionario.id ===id);
  }
}
