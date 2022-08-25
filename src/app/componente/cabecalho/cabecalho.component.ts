import { Component, OnInit } from '@angular/core';
import {
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
  public usuarioAtual!: UsuarioInterface;

  public nome: string = 'usuário.atento';

  constructor(
    private usuarioService: UsuarioService,
    private variavelService: VariavelService
  ) {
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
