import { Component, OnInit } from '@angular/core';
import { AuthService, OrderService } from 'src/app/services';
import { Order } from '../models';

@Component({
    selector: 'app-dashboardFuncio',
    templateUrl: './dashboardFuncio.component.html',
    styleUrls: ['./dashboardFuncio.component.scss']
})
export class DashboardFuncioComponent implements OnInit {

    constructor(public orderService: OrderService, private authService: AuthService) { }
    listOrder: Order[] = this.orderService.listOrder
    listOpenOrder: Order[] = this.orderService.listOrder.filter(o => o.status == 'Em Aberto');
    isEmployee: boolean = false;

    ngOnInit(): void {

        this.listOrder = this.orderService.listOrder;
        this.isEmployee = !!this.authService.isEmployee();
    }

    recolherPedido(order: Order): void {
        order.status = 'Recolhido';
        this.orderService.updateOrder(order);
        alert(`Pedido Recolhido!\nNúmero de Pedido: ${order.id}`);
    }
}

