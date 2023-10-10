import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isEmployee: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.isEmployee = !!this.loginService.isEmployee();
  }
  logout(): void {
    this.loginService.logout();
  }

}
