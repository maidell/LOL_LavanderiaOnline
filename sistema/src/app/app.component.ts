import { Component } from '@angular/core';
import { LoginService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema';
  constructor(private loginService: LoginService) {
    //this
  }
  isLoggedIn(): number {
    return this.loginService.isLoggedIn();
  }

  
}
