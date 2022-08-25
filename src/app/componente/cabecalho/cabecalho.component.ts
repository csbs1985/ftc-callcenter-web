import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from '../../compartilhar/interfaces/cliente.interface';
import {
  ClienteService,
  UsuarioInterface,
  UsuarioService,
  VariavelService,
} from '@app/compartilhar/_index';

@Component({
  selector: 'ftc-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public clienteAtual!: ClienteInterface;
  public usuarioAtual!: UsuarioInterface;

  public nome: string = 'usuário.atento';

  constructor(
    private clienteService: ClienteService,
    private usuarioService: UsuarioService,
    private variavelService: VariavelService
  ) {
    this.clienteService.clienteAtual.subscribe((x) => (this.clienteAtual = x));
    this.usuarioService.usuarioAtual.subscribe((x) => (this.usuarioAtual = x));
    this.getUsuario();
  }

  ngOnInit(): void {}

  private getUsuario(): void {
    this.usuarioAtual = this.usuarioService.valorUsuario;
    this.nome =
      this.usuarioAtual.primeiroNome + '.' + this.usuarioAtual.sobrenome;
  }

  public toggleMenu(): void {
    this.variavelService.mostrarMenu = true;
  }
}
