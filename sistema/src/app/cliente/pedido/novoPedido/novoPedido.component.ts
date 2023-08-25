import { Component } from '@angular/core';
import { Clothing } from 'src/app/models/clothing.model';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novoPedido.component.html',
  styleUrls: ['./novoPedido.component.scss']
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
  ];

  showOrcamento: boolean = false;
  value: number = 0;
  time: number = 0;
  newOrder: Order = new Order(0, 0);
order: any;
  
  constructor(private orderService: OrderService) { }
  private orderNumberCounter: number = 1;
  
  calculateValue(): void {
    this.value = this.clothesList.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }

  calculateTime(): void {
    let short = this.clothesList[0].time;
    for (const element of this.clothesList) {
      short = element.time < short && element.quantity > 0 ? element.time : short;
    }
    this.time = short;
  }

  generateOrder(): void {
    this.calculateTime();
    this.calculateValue();

    this.newOrder = new Order(this.orderNumberCounter, this.value);
    this.orderNumberCounter++;

    this.newOrder.time = this.time;
    this.insertClothes(this.newOrder);
    this.showOrcamento = true;
  }

  insertClothes(order: Order): void {
    for (let clothing of this.clothesList) {
      if (clothing.quantity > 0){
        this.orderService.setClothing(order, clothing);
      }
    }
  }
  
  sendOrder(): void {
    this.showOrcamento = false;
    this.orderService.addOrder(this.newOrder);
    alert(`Orçamento Aprovado!\nNúmero de Pedido: ${this.newOrder.id}`);
    this.clothesList.forEach(item => item.quantity = 0);
    this.value = 0;
    this.time = 0;
    this.showOrcamento = false;
  }

  declineOrder(): void{
    this.showOrcamento = false;
    this.newOrder.status = 'Rejeitado';
    this.orderService.addOrder(this.newOrder);
    alert(`Orçamento Rejeitado!\nNúmero de Pedido: ${this.newOrder.id}`);
    this.clothesList.forEach(item => item.quantity = 0);
    this.value = 0;
    this.time = 0;
    this.showOrcamento = false;
    }
  
}
