import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-editar-roupa',
  templateUrl: './editar-roupa.component.html',
  styleUrls: ['./editar-roupa.component.scss']
})
export class EditarRoupaComponent implements OnInit{
  constructor(private titleService: TitleService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Editar roupa');
  }
}
