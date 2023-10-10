import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from '../services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public passwordVisible: boolean = false;
  public password: string = '';
  public email: string = '';
  loginError: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private orderService: OrderService) { }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  Login(): void {
    this.loginService.login(this.email, this.password).subscribe(usuario => {
      if (usuario) {
        console.log('Login bem-sucedido', usuario);
        this.loginError = false;


        this.router.navigate(['/dashboard']);
      } else {
        console.log('Login falhou');
        this.loginError = true;

      }
    });
  }
  Autocadastro():void {
    this.router.navigate(['/autocadastro']);
  }
  isLoggedIn(): number {
    return this.loginService.isLoggedIn();
  }
}
