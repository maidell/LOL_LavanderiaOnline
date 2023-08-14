import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autocadastro',
    pathMatch: 'full'
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
