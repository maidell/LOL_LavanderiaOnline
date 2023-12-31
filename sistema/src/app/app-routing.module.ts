import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import * as Pedido from './pedido';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar';
import { RelatoriosComponent } from './relatorios'

import * as Funcionario from './funcionario';
import * as Roupas from './roupas';
import { RelatorioClientesComponent } from './relatorios/clientes';
import { RelatorioReceitasComponent } from './relatorios/receitas';
import { RelatorioClientesFieisComponent } from './relatorios/clientes-fieis';
import { DashboardComponent } from './dashboard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,
children: [
  { path: 'autocadastro', component: AutocadastroComponent },

] },
  
  { path: 'navbar', component: NavbarComponent },
  { path: 'novo-pedido', component: Pedido.NovoPedidoComponent },
  { path: 'listar-pedido', component: Pedido.ListarPedidoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consulta-pedido', component: Pedido.ConsultaPedidoComponent },


  {
    path: 'relatorios', component: RelatoriosComponent,
    children: [
      { path: 'relatorio-receitas', component: RelatorioReceitasComponent },
      { path: 'relatorio-clientes', component: RelatorioClientesComponent },
      { path: 'relatorio-clientesfieis', component: RelatorioClientesFieisComponent },
    ]
  },
  { path: 'funcionarios', component: Funcionario.ListarFuncionarioComponent },
  { path: 'funcionarios/listar', component: Funcionario.ListarFuncionarioComponent },
  { path: 'funcionarios/editar/:id', component: Funcionario.EditarFuncionarioComponent },
  { path: 'funcionarios/novo', component: Funcionario.InserirFuncionarioComponent },

  { path: 'roupas', component: Roupas.ListarRoupaComponent},
  { path: 'roupas/listar', component: Roupas.ListarRoupaComponent },
  { path: 'roupas/editar/:id', component: Roupas.EditarRoupaComponent },
  { path: 'roupas/novo', component: Roupas.InserirRoupaComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
