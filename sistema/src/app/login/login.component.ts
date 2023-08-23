import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public passwordVisible: boolean = false;
  public password: string = '';

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
