import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import * as Pedido from './cliente/pedido';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './cliente';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login',component: LoginComponent},
  { path: 'autocadastro', component: AutocadastroComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'novopedido',component: Pedido.NovoPedidoComponent},
  { path: 'aprovarorcamento',component: Pedido.AprovarOrcamentoComponent},
  { path: 'listarpedido',component: Pedido.ListarPedidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
