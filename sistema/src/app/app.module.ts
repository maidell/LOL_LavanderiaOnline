import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import * as Pedido from './cliente/pedido';
import { FormsModule } from '@angular/forms';
import { DashboardComponent, LayoutComponent } from './cliente';
import { NavbarComponent } from './cliente';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent,
    Pedido.ListarPedidoComponent,
    Pedido.NovoPedidoComponent,
    LayoutComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent
  ],

  imports: [
    RouterModule.forRoot([
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'navbar', component: NavbarComponent},
    { path: 'login', component: LoginComponent},
    { path: 'autocadastro', component: AutocadastroComponent},
    { path: 'novo-pedido', component: Pedido.NovoPedidoComponent},
    { path: 'listar-pedido', component: Pedido.ListarPedidoComponent},
    { path: 'DashboardComponent', component: DashboardComponent}
    ]),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
