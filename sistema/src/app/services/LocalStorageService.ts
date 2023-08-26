import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly ordersKey = 'orders';

  constructor() { }

  saveOrders(orders: Order[]): void {
    localStorage.setItem(this.ordersKey, JSON.stringify(orders));
  }

  getOrders(): Order[] {
    const ordersJSON = localStorage.getItem(this.ordersKey);
    return ordersJSON ? JSON.parse(ordersJSON) : [];
  }

  clearOrders(): void {
    localStorage.removeItem(this.ordersKey);
  }
}
