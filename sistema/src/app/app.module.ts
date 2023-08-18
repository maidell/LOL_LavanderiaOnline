import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NovoPedidoComponent } from './novoPedido/novoPedido.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AutocadastroComponent,
    NovoPedidoComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
