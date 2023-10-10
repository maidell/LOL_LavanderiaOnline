import { Component } from '@angular/core';
import { Order } from 'src/app/models';
import { LoginService, OrderService } from 'src/app/services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(public orderService: OrderService, private loginService: LoginService) { }
  ngOnInit(): void {

    this.listOrder = this.orderService.listOrder;
    this.isEmployee = !!this.loginService.isEmployee();

  }
  selectedOrderStatus: string = '';
  isEmployee: boolean = false;
  listOrder: Order[] = this.orderService.listOrder;
  
  foundMatchStatus(orderStatus: string): boolean {
    if (!this.selectedOrderStatus) {
      return true;
    }
    return orderStatus === this.selectedOrderStatus;
  }
  noMacthesFound(): boolean {
    if (!this.selectedOrderStatus) {
      return false;
    }
    return this.listOrder.every(o => o.status !== this.selectedOrderStatus);
  }
}
