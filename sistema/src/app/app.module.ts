import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import * as Pedido from './pedido';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services';
import * as Funcionario from './funcionario';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { RelatorioReceitasComponent } from './relatorios/receitas';
import { DashboardComponent } from './dashboard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent,
    Pedido.ListarPedidoComponent,
    Pedido.NovoPedidoComponent,
    Pedido.ConsultaPedidoComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    Pedido.FilterComponent,
    Funcionario.InserirFuncionarioComponent,
    Funcionario.ListarFuncionarioComponent,
    Funcionario.EditarFuncionarioComponent,
    RelatoriosComponent,
    RelatorioReceitasComponent

  ],

  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'navbar', component: NavbarComponent },
      { path: 'login', component: LoginComponent },
      { path: 'autocadastro', component: AutocadastroComponent },
      { path: 'novo-pedido', component: Pedido.NovoPedidoComponent },
      { path: 'listar-pedido', component: Pedido.ListarPedidoComponent },
      { path: 'consulta-pedido', component: Pedido.ConsultaPedidoComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'relatorios', component: RelatoriosComponent }


    ]),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
