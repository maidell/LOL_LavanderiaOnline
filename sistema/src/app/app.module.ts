import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { ClienteModule } from './cliente';
import { LoginComponent } from './login/login.component';
import { NovoPedidoComponent } from './pedido/novoPedido/novoPedido.component';
import { FormsModule } from '@angular/forms';
import { cancelarPedidoComponent } from './pedido/cancelarPedido/cancelarPedidoComponent';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    AutocadastroComponent,
    NovoPedidoComponent,
    
    //cancelarPedidoComponent
  ],

  imports: [
    RouterModule.forRoot([
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login',component: LoginComponent},
    { path: 'autocadastro', component: AutocadastroComponent},
    { path: 'novo-pedido', component: NovoPedidoComponent}
    ]),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
