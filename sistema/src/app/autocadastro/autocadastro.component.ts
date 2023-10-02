import { Component } from '@angular/core';
import { AuthService } from '../services';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.scss']
})
export class AutocadastroComponent {
  constructor(private authService: AuthService) { }
  isLogged(): number {
    return this.authService.isLoggedIn();
  }
}
