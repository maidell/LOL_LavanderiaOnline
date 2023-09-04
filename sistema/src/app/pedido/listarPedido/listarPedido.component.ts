import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listarPedido.component.html',
  styleUrls: ['./listarPedido.component.scss']
})
export class ListarPedidoComponent implements OnInit{
  constructor(public orderService: OrderService, private authService: AuthService) { }
  listOrder: Order[] = this.orderService.listOrder;
  isEmployee: boolean = false;
  order: any;
  
  

  ngOnInit(): void {

    this.listOrder = this.orderService.listOrder;
    this.isEmployee = !!this.authService.isEmployee();
    
  }

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

  recolherPedido(order: Order): void {
    order.status = 'Recolhido';
    this.orderService.updateOrder(order);
    alert(`Pedido Recolhido!\nNúmero de Pedido: ${order.id}`);
  }
  
  
}
