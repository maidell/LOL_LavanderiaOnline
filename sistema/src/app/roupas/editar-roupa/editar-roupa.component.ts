import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Roupa } from 'src/app/models/roupa.model';
import { OrderService } from 'src/app/services';
import { RoupaService } from 'src/app/services/roupas.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-editar-roupa',
  templateUrl: './editar-roupa.component.html',
  styleUrls: ['./editar-roupa.component.scss']
})
export class EditarRoupaComponent implements OnInit{

  @ViewChild("formRoupa") formRoupa!: NgForm;

  roupa!: Roupa;
  loading!: boolean;

  constructor(
    private titleService: TitleService,
    private roupaService: RoupaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.titleService.setTitle('Editar roupa');

    this.loading = false;
    this.route.params.subscribe(params => {
      const id = +params['id']; // Converter o parâmetro 'id' para número
      this.carregarRoupa(id);
    });
  }

carregarRoupa(id: number): void {
  this.roupaService.buscarPorId(id).subscribe(
    roupa => {
      if (roupa !== null) {
        this.roupa = roupa;
      } else {
        throw new Error("Roupa não encontrada: id = " + id);
      }
    }
  );
}

  atualizar(): void {
    if (this.formRoupa.form.valid) {
      this.loading = true;
      this.roupaService.alterar(this.roupa).subscribe(
        roupa => {
          this.loading = false;
          this.router.navigate(['/roupas']);
        }
      );
    }
  }
}

