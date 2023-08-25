import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-aprovar-pedido',
  templateUrl: './aprovar-pedido.component.html',
  styleUrls: ['./aprovar-pedido.component.scss']
})
export class AprovarPedidoComponent {
  newOrder: Order;
  value: number; // Adicione esta linha
  time: number;  // Adicione esta linha

  constructor(private orderService: OrderService) {
    this.newOrder = this.orderService.getPendingOrders()[0];
    this.value = this.newOrder.value; // Atribua o valor da ordem a 'value'
    this.time = this.newOrder.time;   // Atribua o tempo da ordem a 'time'
  }

  sendOrder(order: Order): void {
    this.orderService.setStatusOrder(order, 'Aprovado');
    this.orderService.addOrder(order);
    alert(`Orçamento Aprovado!\nNúmero de Pedido: ${order.id}`);
  }

  declineOrder(order: Order): void {
    this.orderService.setStatusOrder(order, 'Rejeitado');
    this.orderService.addOrder(order);
    alert(`Orçamento Rejeitado!`);
  }
}
