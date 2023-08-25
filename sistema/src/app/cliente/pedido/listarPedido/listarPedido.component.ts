import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listarPedido.component.html',
  styleUrls: ['./listarPedido.component.scss']
})
export class ListarPedidoComponent {
  constructor(private orderService: OrderService){ }
  listOrder: Order[] = this.orderService.listOrder
}
