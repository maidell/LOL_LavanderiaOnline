import { Component, OnInit } from '@angular/core';
import { AuthService, OrderService } from 'src/app/services';
import { Order } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listOrder: Order[] = [];
  listOpenOrder: Order[] = [];
  isEmployee: boolean = false;

  constructor(public orderService: OrderService, private authService: AuthService) { }

  ngOnInit(): void {
    this.listOrder = this.orderService.listOrder;
    this.listOpenOrder = this.orderService.listOrder.filter(o => o.status == 'Em Aberto');
    this.isEmployee = !!this.authService.isEmployee();
  }

  recolherPedido(order: Order): void {
    order.status = 'Recolhido';
    this.orderService.updateOrder(order);

    const index = this.listOpenOrder.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.listOpenOrder.splice(index, 1);
    }

    alert(`Pedido Recolhido!\nNúmero de Pedido: ${order.id}`);
  }
}