import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
  }

}
