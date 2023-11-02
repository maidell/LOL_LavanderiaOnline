import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from '../services';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AutocadastroComponent } from '../autocadastro/autocadastro.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public passwordVisible: boolean = false;
  public password: string = '';
  public email: string = '';
  loginError: boolean = false;

  constructor(public dialog: MatDialog, private authService: AuthService, private router: Router, private orderService: OrderService) { }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  Login(): void {
    this.authService.login(this.email, this.password).subscribe(usuario => {
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
    return this.authService.isLoggedIn();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AutocadastroComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

