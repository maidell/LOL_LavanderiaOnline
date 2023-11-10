import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Roupa } from '../models/roupa.model';

@Injectable({
  providedIn: 'root',
})
export class RoupaService {
  private roupas: Roupa[] = [];

  constructor() {}

  adicionarRoupa(roupa: Roupa): void {
    this.roupas.push(roupa);
  }

  listarRoupas(): Observable<Roupa[]> {
    return of(this.roupas);
  }

  atualizarRoupa(roupa: Roupa): void {
    const index = this.roupas.findIndex((r) => r.name === roupa.name);
    if (index !== -1) {
      this.roupas[index] = roupa;
    }
  }

  removerRoupa(name: string): void {
    this.roupas = this.roupas.filter((r) => r.name !== name);
  }
}
