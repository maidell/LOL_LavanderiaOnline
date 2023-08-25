import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.scss']
})
export class ConsultaPedidoComponent {
  pedidoNumero: number | undefined;
  pedido: any
 
 
  consultarPedido() {
    // Aqui você deve implementar a lógica para buscar os detalhes do pedido pelo número informado
    // e atribuir os detalhes do pedido à variável 'pedido'
  }
}
