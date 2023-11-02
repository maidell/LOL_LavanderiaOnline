import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';
import { Order } from '../models';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listOrder: Order[] = [];
  listOpenOrder: Order[] = [];
  isEmployee: boolean = false;

  constructor(private titleService: TitleService, public orderService: OrderService, private authService: AuthService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
    this.listOrder = this.orderService.listOrder;
    this.isEmployee = !!this.authService.isEmployee();

    this.listOpenOrder = this.listOrder.filter(order => order.status === 'Em Aberto');
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

  getOpenOrdersForCustomer(): Order[] {
    return this.listOpenOrder;
  }

  pagarPedido(order: Order): void {
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
