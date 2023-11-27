import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/models/roupa.model';
import { RoupaService } from 'src/app/services/roupas.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-listar-roupa',
  templateUrl: './listar-roupa.component.html',
  styleUrls: ['./listar-roupa.component.scss']
})
export class ListarRoupaComponent implements OnInit {
 roupas: Roupa[] = [];

  constructor(private titleService: TitleService, private roupaService: RoupaService) { }

  ngOnInit(): void {
    this.roupas = [];
    this.listarRoupas();
     this.titleService.setTitle('Roupas');
  }

  listarRoupas(): Roupa[] {
    this.roupaService.listarRoupas().subscribe({
      next: (data: Roupa[]) => {
        if (data == null) {
          this.roupas = [];
        }
        else {
          this.roupas = data;
        }
      }
    });
    return this.roupas;
  }

  removerRoupa($event: any, roupa: Roupa): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover "' + roupa.name + '"?')) {
      this.roupaService.removerRoupa(roupa.id!).
        subscribe({
          complete: () => { this.listarRoupas(); }
        });
    }
  }

}