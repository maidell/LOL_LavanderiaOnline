import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit {
  Funcionarios: Funcionario[] = [];

  constructor(private titleService: TitleService,private funcionarioService : FuncionarioService) {}

  ngOnInit(): void {

    this.Funcionarios = this.listarTodos();
    this.titleService.setTitle('Funcionarios');
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
  remover($event: any, funcionario: Funcionario): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o funcionario ${funcionario.nome}?`)) {
    this.funcionarioService.remover(funcionario.id!);
    this.Funcionarios = this.listarTodos();
    }
    }
}
