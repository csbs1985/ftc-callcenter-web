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
  private usuario!: UsuarioInterface;

  public nome: string = 'usuário.atento';

  constructor(
    private usuarioService: UsuarioService,
    private variavelService: VariavelService
  ) {
    this.getUsuario();
  }

  ngOnInit(): void {}

  private getUsuario(): void {
    this.usuario = this.usuarioService.usuarioValor;
    this.nome = this.usuario.primeiroNome + '.' + this.usuario.sobrenome;
    console.log(this.usuario);
  }

  public toggleMenu(): void {
    this.variavelService.mostrarMenu = true;
  }
}
