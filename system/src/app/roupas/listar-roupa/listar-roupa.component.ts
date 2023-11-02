import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-listar-roupa',
  templateUrl: './listar-roupa.component.html',
  styleUrls: ['./listar-roupa.component.scss']
})
export class ListarRoupaComponent implements OnInit{
  constructor(private titleService: TitleService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Roupas');
  }

}
