import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consultaPedido.component.html',
  styleUrls: ['./consultaPedido.component.scss']
})
export class ConsultaPedidoComponent {
  pedidoNumero: number | undefined;
  pedido: Order | undefined;
  pedidos: Order[] = [];


  constructor(private orderService: OrderService) {}

  consultarPedido() {
    if (this.pedidoNumero) {
      this.pedidos = this.orderService.getOrdersById(this.pedidoNumero);
    }
  }
  
}
