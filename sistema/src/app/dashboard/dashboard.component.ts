import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  constructor(private orderService: OrderService){ }
  
  listOrder: Order[] = this.orderService.listOrder

  ngOnInit(): void{ }
}
