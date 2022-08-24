import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteInterface, ClienteService } from '@app/shared/_index';
import {
  NotificacaoEnum,
  NotificacaoInterface,
  NotificacaoService,
} from '@app/shared/_index';
import {
  UsuarioService,
  FavoritoService,
  TemaService,
  MenuInterface,
  SubmenuInterface,
  VariavelService,
} from 'src/app/shared/_index';

@Component({
  selector: 'ftc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public clienteAtual!: ClienteInterface;
  public menu!: MenuInterface[];
  public notification!: NotificacaoInterface;
  public tema!: boolean;

  constructor(
    private client: HttpClient,
    private clienteService: ClienteService,
    private favoritoService: FavoritoService,
    private router: Router,
    private notificacaoService: NotificacaoService,
    private temaService: TemaService,
    private usuarioService: UsuarioService,
    private variavelService: VariavelService
  ) {
    this.initMenu();
    this.tema = this.temaService.tema;
  }

  ngOnInit(): void {}

  private initMenu() {
    const mySub = this.client
      .get('assets/mocks/menu.json')
      .subscribe((result: any) => {
        this.menu = result.menu;
        mySub.unsubscribe();
      });
  }

  public canMenu(menu: MenuInterface): boolean {
    if (!menu.atendimentoAtivo) return true;

    this.clienteService.clienteAtual.subscribe((x) => (this.clienteAtual = x));

    if (this.clienteAtual) return true;

    return false;
  }

  public getFavorited(item: SubmenuInterface): boolean {
    return this.favoritoService.getFavorite({ nome: item.nome, url: item.url })
      ? true
      : false;
  }

  public toggleFavorite(item: SubmenuInterface): void {
    this.favoritoService.toggle({ nome: item.nome, url: item.url });

    if (this.notificacaoService.isNotificacao) this.modalOpen();
  }

  public valueTheme(): void {
    this.temaService.toggle();
  }

  public selectRoute(item: string): void {
    this.variavelService.mostrarMenu = false;
    this.router.navigate([item]);
  }

  public logout(): void {
    this.usuarioService.logout();
  }

  public toggleMenu(): boolean {
    return this.variavelService.mostrarMenu ?? false;
  }

  public closedMenu(): void {
    this.variavelService.mostrarMenu = false;
  }

  private modalOpen() {
    this.notificacaoService.isNotificacao = true;

    this.notification = {
      tipo: NotificacaoEnum.ALERTA,
      titulo: 'Limite de 5 itens',
      texto: 'para adicionar este item favor remover outro item dos favoritos.',
    };
  }

  public get isNotificacao(): boolean {
    return this.notificacaoService.isNotificacao;
  }
}
