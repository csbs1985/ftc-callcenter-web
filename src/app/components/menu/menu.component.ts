import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/shared/interfaces/menu.interface';
import { AttendanceService } from 'src/app/shared/services/attendance.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'ftc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private favorites: any;

  public menu!: MenuModel[];

  constructor(
    private attendanceService: AttendanceService,
    private client: HttpClient,
    private favoriteService: FavoriteService,
    private sessionService: SessionService
  ) {
    this.initMenu();
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

  public getFavorited(item: string): boolean {
    return this.favoriteService.getFavorites(item) ? true : false;
  }

  public toggleFavorite(item: string): void {
    this.favoriteService.toggle(item);
  }

  public valueTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  public logout(): void {
    this.sessionService.logout();
  }
}
