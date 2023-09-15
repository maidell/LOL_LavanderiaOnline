import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listarPedido.component.html',
  styleUrls: ['./listarPedido.component.scss']
})
export class ListarPedidoComponent implements OnInit {
  constructor(public orderService: OrderService, private authService: AuthService) { }

  listOrder: Order[] = this.orderService.listOrder;
  isEmployee: boolean = false;

  ngOnInit(): void {
    this.listOrder = this.orderService.listOrder;
    this.listOrder.sort((a, b) => {
      const dateA = new Date(a.openDate);
      const dateB = new Date(b.openDate);
      return dateB.getTime() - dateA.getTime();
    });
    this.isEmployee = !!this.authService.isEmployee();
  }

  confirmarRecolhimento(order: Order): void {
    order.status = 'Recolhido';
    this.orderService.updateOrder(order);
    alert(`Pedido Recolhido!\nNúmero de Pedido: ${order.id}`);
  }

  confirmarLavagem(order: Order): void {
    order.status = 'Aguardando pagamento';
    this.orderService.updateOrder(order);
    alert(`Pedido Lavado!\nNúmero de Pedido: ${order.id}`);
  }

  finalizarPedido(order: Order): void {
    order.status = 'Finalizado';
    this.orderService.updateOrder(order);
    alert(`Pedido Finalizado!\nNúmero de Pedido: ${order.id}`);
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


}
