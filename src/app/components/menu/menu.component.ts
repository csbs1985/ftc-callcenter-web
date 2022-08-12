import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AuthenticationService,
  AttendanceService,
  FavoriteService,
  ThemeService,
  MenuInterface,
  SubmenuInterface,
} from 'src/app/shared/_index';

@Component({
  selector: 'ftc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menu!: MenuInterface[];
  public theme!: boolean;

  constructor(
    private attendanceService: AttendanceService,
    private client: HttpClient,
    private favoriteService: FavoriteService,
    private authenticationService: AuthenticationService,
    private themeService: ThemeService
  ) {
    this.initMenu();
    this.theme = this.themeService.theme;
  }

  ngOnInit(): void {}

  protected initMenu() {
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
    return this.favoriteService.getFavorites({ name: item.name, url: item.url })
      ? true
      : false;
  }

  public toggleFavorite(item: SubmenuInterface): void {
    this.favoriteService.toggle({ name: item.name, url: item.url });
  }

  public valueTheme(): void {
    this.themeService.toggle();
  }

  public logout(): void {
    this.authenticationService.logout();
  }
}
