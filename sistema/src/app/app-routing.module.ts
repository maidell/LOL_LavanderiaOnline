import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import * as Pedido from './pedido';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './cliente';
import { NavbarComponent } from './navbar';


import * as Funcionario from './funcionario';
import { DashboardFuncioComponent } from './dashboardFuncionario/dashboardFuncio.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'autocadastro', component: AutocadastroComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'novopedido', component: Pedido.NovoPedidoComponent },
  { path: 'listarpedido', component: Pedido.ListarPedidoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardFuncio', component: DashboardFuncioComponent },
  { path: 'consultapedido', component: Pedido.ConsultaPedidoComponent },

  { path: 'funcionarios/listar', component: Funcionario.ListarFuncionarioComponent },
  { path: 'funcionarios/editar/:id', component: Funcionario.EditarFuncionarioComponent },
  { path: 'funcionarios/novo', component: Funcionario.InserirFuncionarioComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
