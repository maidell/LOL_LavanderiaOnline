import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Roupa } from 'src/app/models/roupa.model';
import { OrderService } from 'src/app/services';
import { RoupaService } from 'src/app/services/roupas.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-inserir-roupa',
  templateUrl: './inserir-roupa.component.html',
  styleUrls: ['./inserir-roupa.component.scss'],
})
export class InserirRoupaComponent {
 
  @ViewChild('formCliente') formPessoa!: NgForm;
  novaRoupa: boolean = true;
  roupa: Roupa = new Roupa();
  id!: string;
  loading!: boolean;
  formRoupa: FormGroup;

  constructor(
     private titleService: TitleService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private roupaService: RoupaService,
    private router: Router
  ) {
    this.formRoupa = this.formBuilder.group({
      nome: [''],
      valor: [''],
      prazo: [''],
    });
  }

  ngOnInit(): void {
     this.titleService.setTitle('Inserir nova roupa');
    this.roupa = new Roupa();
    this.loading = false;
  }

  inserirRoupa(): void {
    this.loading = true;
    if (this.formRoupa.valid) {
      if (this.novaRoupa) {
        this.roupaService.inserirRoupa(this.roupa).subscribe(
          () => {
            this.loading = false;
            this.router.navigate(['/roupas']);
            alert('Peça cadastrada com sucesso!');
          },
          (error) => {
            this.loading = false;
            // Lógica de tratamento de erro
          }
        );
      } else {
        // Lógica de atualização da roupa existente
      }
    }
  }
}
