import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import * as Pedido from './pedido';
import { FormsModule } from '@angular/forms';
import { DashboardComponent, LayoutComponent } from './cliente';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services';
import * as Funcionario from './funcionario';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent,
    Pedido.ListarPedidoComponent,
    Pedido.NovoPedidoComponent,
    Pedido.ConsultaPedidoComponent,
    LayoutComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    Pedido.FilterComponent,
    Funcionario.InserirFuncionarioComponent,
    Funcionario.ListarFuncionarioComponent,
    Funcionario.EditarFuncionarioComponent,
    //Funcionario.LayoutComponent

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


    ]),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
