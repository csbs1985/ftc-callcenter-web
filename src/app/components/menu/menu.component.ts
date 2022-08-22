import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NotificationEnum,
  NotificationInterface,
  NotificationService,
} from '@app/shared/_index';
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
  public notification!: NotificationInterface;
  public theme!: boolean;

  constructor(
    private attendanceService: AttendanceService,
    private client: HttpClient,
    private favoriteService: FavoriteService,
    private router: Router,
    private notificationService: NotificationService,
    private themeService: ThemeService,
    private userService: UserService,
    private variablesService: VariablesService
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

    if (this.notificationService.isNotification) this.modalOpen();
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
    this.notificationService.isNotification = true;

    this.notification = {
      type: NotificationEnum.SUCCESS,
      title: 'Limite de 5 itens',
      text: 'para adicionar este item favor remover outro item dos favoritos.',
    };
  }

  public get isNotification(): boolean {
    return this.notificationService.isNotification;
  }
}
