import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NovoPedidoComponent } from './novoPedido/novoPedido.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login',component: LoginComponent},
  { path: 'autocadastro', component: AutocadastroComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'novopedido',component: NovoPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
