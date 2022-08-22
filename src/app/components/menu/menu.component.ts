import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationEnum, NotificationInterface } from '@app/shared/_index';
import {
  UserService,
  AttendanceService,
  FavoriteService,
  ThemeService,
  MenuInterface,
  SubmenuInterface,
  VariablesService,
} from 'src/app/shared/_index';

@Component({
  selector: 'ftc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menu!: MenuInterface[];
  public theme!: boolean;
  public notification?: NotificationInterface = undefined;

  constructor(
    private attendanceService: AttendanceService,
    private userService: UserService,
    private client: HttpClient,
    private favoriteService: FavoriteService,
    private variablesService: VariablesService,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.initMenu();
    this.theme = this.themeService.theme;
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

  public canMenu(menu: boolean): boolean {
    var hasAttendance = this.attendanceService.hasAttendance();

    if (!menu) return true;
    else if (hasAttendance) return true;

    return false;
  }

  public getFavorited(item: SubmenuInterface): boolean {
    return this.favoriteService.getFavorite({ name: item.name, url: item.url })
      ? true
      : false;
  }

  public toggleFavorite(item: SubmenuInterface): void {
    this.favoriteService.toggle({ name: item.name, url: item.url });

    if (this.favoriteService.isNotification) this.modalOpen();
  }

  public valueTheme(): void {
    this.themeService.toggle();
  }

  public selectRoute(item: string): void {
    this.variablesService.showMenu = false;
    this.router.navigate([item]);
  }

  public logout(): void {
    this.userService.logout();
  }

  public toggleMenu(): boolean {
    return this.variablesService.showMenu ?? false;
  }

  public closedMenu(): void {
    this.variablesService.showMenu = false;
  }

  private modalOpen() {
    this.notification = {
      type: NotificationEnum.WARNING,
      title: 'Limite de 5 itens',
      text: 'para adicionar este item favor remover outro item dos favoritos.',
    };
  }
}
