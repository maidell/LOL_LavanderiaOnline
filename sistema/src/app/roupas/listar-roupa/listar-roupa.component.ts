import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/models/roupa.model';
import { OrderService } from 'src/app/services';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-listar-roupa',
  templateUrl: './listar-roupa.component.html',
  styleUrls: ['./listar-roupa.component.scss']
})
export class ListarRoupaComponent implements OnInit{
  Roupas: Roupa[] = [];

  constructor(private titleService: TitleService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Roupas');
    // Fetch your Roupas data here and assign it to this.Roupas
  }

  remover(event: Event, roupa: any) { // Add this method
    // Implement your logic to remove a roupa
  }
}