import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novoPedido.component.html',
  styleUrls: ['./novoPedido.component.css']
})
export class NovoPedidoComponent {
  clothesList = [
    { name: 'Camisa', price: 20, checked: false },
    { name: 'Calça', price: 20, checked: false },
    { name: 'Calça Jeans', price: 25, checked: false },
    { name: 'Jaqueta', price: 40, checked: false },
    { name: 'Meia', price: 5, checked: false },
    { name: 'Cueca', price: 5, checked: false },
    { name: 'Bermuda', price: 15, checked: false },
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
