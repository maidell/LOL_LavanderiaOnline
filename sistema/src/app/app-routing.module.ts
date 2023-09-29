import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import * as Pedido from './pedido';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './cliente';
import { NavbarComponent } from './navbar';
import { RelatoriosComponent } from './relatorios'

import * as Funcionario from './funcionario';
import * as Roupas from './roupas';
import { RelatorioClientesComponent } from './relatorios/clientes';
import { RelatorioReceitasComponent } from './relatorios/receitas';
import { RelatorioClientesFieisComponent } from './relatorios/clientes-fieis';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'autocadastro', component: AutocadastroComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'novopedido', component: Pedido.NovoPedidoComponent },
  { path: 'listarpedido', component: Pedido.ListarPedidoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consultapedido', component: Pedido.ConsultaPedidoComponent },
  {
    path: 'relatorios', component: RelatoriosComponent,
    children: [
      { path: 'relatorio-receitas', component: RelatorioReceitasComponent },
      { path: 'relatorio-clientes', component: RelatorioClientesComponent },
      { path: 'relatorio-clientesfieis', component: RelatorioClientesFieisComponent },
    ]
  },

  { path: 'funcionarios/listar', component: Funcionario.ListarFuncionarioComponent },
  { path: 'funcionarios/editar/:id', component: Funcionario.EditarFuncionarioComponent },
  { path: 'funcionarios/novo', component: Funcionario.InserirFuncionarioComponent },

  { path: 'roupas/listar', component: Roupas.ListarRoupaComponent },
  { path: 'roupas/editar/:id', component: Roupas.EditarRoupaComponent },
  { path: 'roupas/novo', component: Roupas.InserirRoupaComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
