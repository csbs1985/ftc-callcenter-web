import { Component } from '@angular/core';
import { UserService, ThemeService, UserInterface } from './shared/_index';

@Component({
  selector: 'ftc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentUser!: UserInterface;

  constructor(
    private userService: UserService,

    private themeService: ThemeService
  ) {
    this.userService.currentUser.subscribe((x) => (this.currentUser = x));
    this.getTheme();
  }

  private getTheme(): void {
    this.themeService.getTheme();
  }
}
