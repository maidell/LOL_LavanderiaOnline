import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirRoupaComponent } from './inserir-roupa/inserir-roupa.component';
import { ListarRoupaComponent } from './listar-roupa/listar-roupa.component';
import { EditarRoupaComponent } from './editar-roupa/editar-roupa.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InserirRoupaComponent,
    ListarRoupaComponent,
    EditarRoupaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RoupasModule { }
