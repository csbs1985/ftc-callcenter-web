import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/shared/interfaces/menu.interface';
import { AttendanceService } from 'src/app/shared/services/attendance.service';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'ftc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public menu!: MenuModel[];

  constructor(
    private attendanceService: AttendanceService,
    private client: HttpClient,
    private sessionService: SessionService
  ) {
    this.initMenu();
  }

  ngOnInit(): void {}

  protected initMenu() {
    const mySub = this.client
      .get('assets/mocks/menu.json')
      .subscribe((result: any) => {
        console.log(result.menu);

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

  public getItemFavorited(item: string): boolean {
    return false;
  }

  public toggle(item: string): void {
    console.log(item);
  }

  public valueToggle(value: boolean): void {
    document.body.classList.toggle('dark-theme');
  }

  public logout(): void {
    this.sessionService.logout();
  }
}
