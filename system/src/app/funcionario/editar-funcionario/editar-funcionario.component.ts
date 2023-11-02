import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario.model';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.scss']
})
export class EditarFuncionarioComponent implements OnInit{

  @ViewChild("formEditarFuncionario") formFuncionario!: NgForm;

  funcionario: Funcionario = new Funcionario();
  id : number = 0;

  constructor(
    private titleService: TitleService,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.titleService.setTitle('Editar funcionario');


      //acesso ao parametro passado na url
      this.id = +this.route.snapshot.params['id'];

      //obter o funcionario pelo id
      const func = this.funcionarioService.buscarPorId(this.id);
      if(func !== undefined){
        this.funcionario = func;
      } else {
        throw new Error("Funcionário não encontrado: id = " + this.id);
      }

    }

    atualizar(): void {

      this.funcionarioService.remover(this.id);

      //verifica se form é válido
      if(this.formFuncionario.form.valid){
        //atualiza funcionario
        this.funcionarioService.inserir(this.funcionario);
        //redireciona
        this.router.navigate(['funcionarios/listar']);
      }
    }
}
