import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consultaPedido.component.html',
  styleUrls: ['./consultaPedido.component.scss']
})
export class ConsultaPedidoComponent implements OnInit {
  ngOnInit(): void {
    this.titleService.setTitle('Consulta pedido');
  }
  pedidoNumero: number | undefined;
  pedido: Order | undefined;
  pedidos: Order[] = [];


  constructor(
    private titleService: TitleService,
    private orderService: OrderService) {}

  consultarPedido() {
    if (this.pedidoNumero) {
      this.pedidos = this.orderService.getOrdersById(this.pedidoNumero);
    }
  }

}
