import { Component } from '@angular/core';
import { TemaService, UsuarioInterface, UsuarioService } from './shared/_index';

@Component({
  selector: 'ftc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public usuarioAtual!: UsuarioInterface;

  constructor(
    private temaService: TemaService,
    private usuarioService: UsuarioService
  ) {
    this.usuarioService.usuarioAtual.subscribe((x) => (this.usuarioAtual = x));
    this.getTheme();
  }

  private getTheme(): void {
    this.temaService.getTheme();
  }
}
