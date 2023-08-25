import { Injectable } from '@angular/core';
import { Clothing } from '../models/clothing.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  listOrder: Order[] = [];

  constructor() {
    this.listOrder = [];
  }

  createOrder(time:number, value: number) {
    return new Order(time, value)
  }

  setStatusOrder(order: Order, status: string) {
    order.status = status;
  }
  
  setClothing(order: Order, clothing: Clothing){
    order.clothings.push(clothing);
  }
  
  addOrder(order: Order) {
    this.listOrder.push(order);
  }
  getPendingOrders(): Order[] {
    return this.listOrder.filter(order => order.status === 'Em Aberto');
  }
  hasPendingOrders(): boolean {
    return this.listOrder.some(order => order.status === 'Em Aberto');
  }
  
  
}

