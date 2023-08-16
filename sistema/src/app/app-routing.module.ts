import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { DashboardComponent } from './cliente/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autocadastro',
    pathMatch: 'full'
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
