import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-aprovar-orcamento',
  templateUrl: './aprovar-orcamento.component.html',
  styleUrls: ['./aprovar-orcamento.component.scss']
})
export class AprovarOrcamentoComponent {

  newOrder: Order = new Order(0, 0);
  order: any;

  
  value: number; // Adicione esta linha
  time: number;  // Adicione esta linha

  constructor(private orderService: OrderService) {
    console.log(this.orderService.getPendingOrders());

    this.newOrder = this.orderService.getPendingOrders()[0];
    if (this.newOrder == undefined) {
      this.newOrder = new Order(0, 0);
    }
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
    alert(`Orçamento Rejeitado!\nNúmero de Pedido: ${order.id}`);
  }
}
