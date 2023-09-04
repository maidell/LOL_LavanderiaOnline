import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.scss']
})
export class InserirFuncionarioComponent {

  @ViewChild('formFuncionario') formPessoa!: NgForm;

  funcionario: Funcionario = new Funcionario();
  
  constructor(
    private pessoaService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
  }

  inserir(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.inserir(this.funcionario);
      this.router.navigate(["/funcionarios/listar"]);
    }
  }
  generateId(): string {
    const unixTimeStamp = Math.floor(new Date().getTime() / 1000);
    return 'id-' + unixTimeStamp;
  }
  formatarData(event: any) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;

    if (inputValue.length === 10) {
        const partesData = inputValue.split('/');
        if (partesData.length === 3) {
            const dia = partesData[0];
            const mes = partesData[1];
            const ano = partesData[2];

            if (this.isValidDate(dia, mes, ano)) {
                const novaData = `${dia}/${mes}/${ano}`;
                this.funcionario.dataNascimento = novaData;
            }
        }
    }
}

  
  isValidDate(day: string, month: string, year: string): boolean {
    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);
  
    if (
      parsedDay >= 1 && parsedDay <= 31 &&
      parsedMonth >= 1 && parsedMonth <= 12 &&
      parsedYear >= 1900 && parsedYear <= 2099
    ) {
      return true;
    }
    return false;
  }
  
}