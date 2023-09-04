import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listarPedido.component.html',
  styleUrls: ['./listarPedido.component.scss']
})
export class ListarPedidoComponent {
  constructor(public orderService: OrderService) { }
  listOrder: Order[] = this.orderService.listOrder;
  order: any;

  pagarPedido(order: Order): void {
    console.log(order);
    order.status = 'Pago';
    this.orderService.updateOrder(order);
    alert(`Pedido Pago!\nNúmero de Pedido: ${order.id}`);
  }

  cancelarPedido(order: Order): void {
    order.status = 'Cancelado';
    this.orderService.updateOrder(order);
    alert(`Pedido Cancelado!\nNúmero de Pedido: ${order.id}`);
  }

}
