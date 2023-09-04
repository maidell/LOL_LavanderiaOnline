import { Component } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent {
  Funcionarios: Funcionario[] = [];

  constructor(private funcionarioService : FuncionarioService) {}

  ngOnInit(): void {
    this.Funcionarios = this.listarTodos();
  }

  listarTodos(): Funcionario [] {
   return this.funcionarioService.listarTodos();
    // return [
    //   new Funcionario(1, "Mateus", 30),
    //   new Funcionario(2, "Julia", 20),
    //   new Funcionario(1, "Jorge", 19),
    //   new Funcionario(1, "Daphne", 25),

    // ]
  }
  remover($event: any, pessoa: Funcionario): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
    this.funcionarioService.remover(pessoa.id!);
    this.Funcionarios = this.listarTodos();
    }
    }
}
