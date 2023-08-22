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
  showQuoteForm: boolean = false;
  deliveryDate: string = '';
  private total:number = 0;
  
  
  approveQuote(): void {
    this.showQuoteForm = false;
    const orderNumber = Math.floor(Math.random() * 1000) + 1;
    alert(`Orçamento Aprovado!\nNúmero de Pedido: ${orderNumber}`);
  }
  
  calculateTotal(): void {
    this.total = this.clothesList.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    let menor_prazo = this.clothesList[0].time;
    for (const element of this.clothesList) {
      menor_prazo = element.time < menor_prazo ? element.time : menor_prazo;
    }
    this.deliveryDate = menor_prazo.toString();
    this.showQuoteForm = true
  }

  get total_lavagem(): string {
    let total_str = 'R$ ' + this.total.toString() + ",00"
    return total_str
  }

  get tempo_lavagem() : string {
    return this.deliveryDate + ' minutos'
  }
}
