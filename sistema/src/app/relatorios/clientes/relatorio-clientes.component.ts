import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { User } from 'src/app/models';
import { LoginService } from 'src/app/services';

@Component({
    selector: 'app-relatorio-clientes',
    templateUrl: './relatorio-clientes.component.html',
    styleUrls: ['./relatorio-clientes.component.scss']
})
export class RelatorioClientesComponent implements OnInit {
    clientes: User[] = [];

    constructor(private loginService: LoginService) { }

    ngOnInit(): void {
        this.clientes = this.loginService.getUsersByRole('cliente');
    }

    generatePDF() {
        const doc = new jsPDF();

        doc.text('Relatório de Clientes', 10, 10);

        const data = this.clientes.map(cliente => [
            cliente.name,
            cliente.email,
            cliente.cpf,
        ]);

        const columns = ['Nome', 'Email', 'CPF'];

        // @ts-ignore
        doc.autoTable({
            head: [columns],
            body: data,
            startY: 20
        });

        doc.save('relatorio_clientes.pdf');
    }
}