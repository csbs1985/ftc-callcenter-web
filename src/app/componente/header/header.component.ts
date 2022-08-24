import { Component, OnInit } from '@angular/core';
import {
  UsuarioService,
  UsuarioInterface,
  VariavelService,
} from '../../shared/_index';

@Component({
  selector: 'ftc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
