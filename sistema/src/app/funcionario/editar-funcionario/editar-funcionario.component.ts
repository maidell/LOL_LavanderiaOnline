import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.scss']
})
export class EditarFuncionarioComponent implements OnInit{

  @ViewChild("formEditarFuncionario") formFuncionario!: NgForm;

  funcionario: Funcionario = new Funcionario();

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }
  
    ngOnInit(): void {

      //acesso ao parametro passado na url
      let id = +this.route.snapshot.params['id'];

      //obter o funcionario pelo id
      const func = this.funcionarioService.buscarPorId(id);
      if(func !== undefined){
        this.funcionario = func;
      } else {
        throw new Error("Funcionário não encontrado: id = " + id);
      }

    }

    atualizar(): void {
      
      //verifica se form é válido
      if(this.formFuncionario.form.valid){
        //atualiza funcionario
        this.funcionarioService.atualizar(this.funcionario);
        //redireciona
        this.router.navigate(['funcionarios/listar']);
      }
    }
}
