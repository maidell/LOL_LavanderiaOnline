import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isEmployee: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isEmployee = !!this.authService.isEmployee();
  }
  logout(): void {
    this.authService.logout();
  }

}
