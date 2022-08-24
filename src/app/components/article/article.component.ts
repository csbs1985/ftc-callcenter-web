import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@app/shared/_index';
import { ClienteInterface } from '../../shared/interfaces/cliente.interface';

@Component({
  selector: 'ftc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public clienteAtual!: ClienteInterface;

  constructor(private clienteService: ClienteService) {
    this.clienteService.clienteAtual.subscribe((x) => (this.clienteAtual = x));
  }

  ngOnInit(): void {}
}
