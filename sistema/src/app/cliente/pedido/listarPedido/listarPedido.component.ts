import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listarPedido.component.html',
  styleUrls: ['./listarPedido.component.scss']
})
export class ListarPedidoComponent {
  constructor(public orderService: OrderService){ }
  listOrder: Order[] = this.orderService.listOrder;
  order: any;

  pagarPedido(order: Order): void {
    // Implemente aqui a lógica para pagar o pedido

  }

  cancelarPedido(order: Order): void {
    // Implemente aqui a lógica para cancelar o pedido
    this.orderService.setStatusOrder(order, 'Cancelado');
    
    alert(`Pedido Cancelado!\nNúmero de Pedido: ${order.id}`);

  }
  
  
}
