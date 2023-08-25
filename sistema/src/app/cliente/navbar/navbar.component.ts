import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  OnInit {
  constructor(private orderService: OrderService){ }
  
  listOrder: Order[] = this.orderService.listOrder

  ngOnInit(): void{ }
}
