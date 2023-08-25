import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.scss']
})
export class ConsultaPedidoComponent {
  pedidoNumero: number | undefined;
  pedido: any;

  consultarPedido() {
    
    // Exemplo hipotético de atribuição:
    this.pedido = {
      id: 123,
      status: 'Entregue',
      valorTotal: 150,
      prazo: 120,
      roupas: [
        { nome: 'Camisa', quantidade: 2 },
        { nome: 'Calça', quantidade: 1 }
      ]
    };
  }
}
