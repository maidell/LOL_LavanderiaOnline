import { Component } from '@angular/core';
import { LoginService } from '../services';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.scss']
})
export class AutocadastroComponent {
  constructor(private loginService: LoginService) { }
  isLogged(): number {
    return this.loginService.isLoggedIn();
  }
}
