import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
    selector: 'app-relatorio-receitas',
    templateUrl: './relatorio-receitas.component.html',
    styleUrls: ['./relatorio-receitas.component.scss']
})

export class RelatorioReceitasComponent {
    public dataInicial?: Date
    public dataFinal?: Date;

    orders!: any;

    constructor(private orderService: OrderService) {
        this.orders = this.orderService.listOrder;

    }
    
    gerarRelatorio() {
    }
}