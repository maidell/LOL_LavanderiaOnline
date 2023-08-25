import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import * as Pedido from './cliente/pedido';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './cliente';
import { NavbarComponent } from './cliente';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    AutocadastroComponent,
    Pedido.ListarPedidoComponent,
    Pedido.cancelarPedidoComponent,
    Pedido.NovoPedidoComponent,
    LayoutComponent,
    Pedido.AprovarOrcamentoComponent,
    NavbarComponent,


  ],

  imports: [
    RouterModule.forRoot([
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'navbar', component: NavbarComponent},
    { path: 'login', component: LoginComponent},
    { path: 'autocadastro', component: AutocadastroComponent},
    { path: 'novo-pedido', component: Pedido.NovoPedidoComponent},
    { path: 'listar-pedido', component: Pedido.ListarPedidoComponent},
    { path: 'aprovar-orcamento', component: Pedido.AprovarOrcamentoComponent},
    ]),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
