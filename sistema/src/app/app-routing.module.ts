import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login',component: LoginComponent},
  { path: 'autocadastro', component: AutocadastroComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pedidos',component: PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
