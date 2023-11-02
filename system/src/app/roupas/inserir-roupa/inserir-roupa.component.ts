import { Component } from '@angular/core';
import { OrderService } from 'src/app/services';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-inserir-roupa',
  templateUrl: './inserir-roupa.component.html',
  styleUrls: ['./inserir-roupa.component.scss']
})
export class InserirRoupaComponent {
  constructor(private titleService: TitleService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Novo pedido');
  }
}
