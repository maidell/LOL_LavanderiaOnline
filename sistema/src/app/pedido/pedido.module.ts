import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPedidoComponent } from './listarPedido/listarPedido.component';
import { cancelarPedidoComponent } from './cancelarPedido/cancelarPedidoComponent';
import { AprovarPedidoComponent } from './aprovar-pedido/aprovar-pedido.component';

@NgModule({
  declarations: [
    ListarPedidoComponent,
    cancelarPedidoComponent,
    AprovarPedidoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
