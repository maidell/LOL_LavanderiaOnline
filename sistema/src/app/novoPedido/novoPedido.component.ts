import { Component } from '@angular/core';

interface Clothing {
  name: string;
  price: number;
  quantity: number;
  time: number;
}

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novoPedido.component.html',
  styleUrls: ['./novoPedido.component.css']
})

export class NovoPedidoComponent {
  clothesList: Clothing[] = [
    { name: 'Camisa', price: 20, quantity: 0, time: 30 },
    { name: 'Calça', price: 20, quantity: 0, time: 40 },
    { name: 'Calça Jeans', price: 25, quantity: 0, time: 50 },
    { name: 'Jaqueta', price: 40, quantity: 0, time: 60 },
    { name: 'Meia', price: 5, quantity: 0, time: 15 },
    { name: 'Cueca', price: 5, quantity: 0, time: 20 },
    { name: 'Bermuda', price: 15, quantity: 0, time: 35 }
    // Adicionar mais roupas aqui
  ];

  calculateTotal(): number {
    return this.clothesList.reduce((sum, item) => sum + (item.checked ? item.price : 0), 0);
  }

  onSubmit(): void {
    const total = this.calculateTotal();
    alert(`Pedido Enviado!\nTotal: R$${total.toFixed(2)}`);
  }
}
