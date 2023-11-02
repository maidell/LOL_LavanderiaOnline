import { Component } from '@angular/core';
import { AuthService } from '../services';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.scss'],
  
})
export class AutocadastroComponent {
  constructor(public dialogRef: MatDialogRef<AutocadastroComponent> ,private authService: AuthService) { }
  isLogged(): number {
    return this.authService.isLoggedIn();
  }



}
