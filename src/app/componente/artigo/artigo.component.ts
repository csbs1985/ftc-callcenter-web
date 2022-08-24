import { Component, OnInit } from '@angular/core';
import { ClienteInterface, ClienteService } from '@app/compartilhar/_index';

@Component({
  selector: 'ftc-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss'],
})
export class ArtigoComponent implements OnInit {
  public clienteAtual!: ClienteInterface;

  constructor(private clienteService: ClienteService) {
    this.clienteService.clienteAtual.subscribe((x) => (this.clienteAtual = x));
  }

  ngOnInit(): void {}
}
