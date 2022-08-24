import { Component, OnInit } from '@angular/core';
import { ClienteInterface, ClienteService } from '@app/compartilhar/_index';

@Component({
  selector: 'ftc-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.scss'],
})
export class DadosClienteComponent implements OnInit {
  public clienteAtual!: ClienteInterface;

  constructor(private clienteService: ClienteService) {
    this.clienteService.clienteAtual.subscribe((x) => (this.clienteAtual = x));
  }

  ngOnInit(): void {
    // console.log(this.clienteAtual);
  }

  public closeService(): void {
    this.clienteService.closeService();
  }
}
