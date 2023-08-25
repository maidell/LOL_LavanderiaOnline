import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import * as Pedido from './cliente/pedido';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './cliente';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login',component: LoginComponent},
  { path: 'autocadastro', component: AutocadastroComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'novopedido',component: Pedido.NovoPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
