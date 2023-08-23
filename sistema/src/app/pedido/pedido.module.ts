import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPedidoComponent } from './listarPedido/listarPedido.component';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { AprovarPedidoComponent } from './aprovar-pedido/aprovar-pedido.component';

@NgModule({
  declarations: [
    ListarPedidoComponent,
    CancelarPedidoComponent,
    AprovarPedidoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
