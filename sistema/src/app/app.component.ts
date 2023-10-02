import { Component } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema';
  constructor(private authService: AuthService) {
    //this
  }
  isLoggedIn(): number {
    return this.authService.isLoggedIn();
  }

  
}
