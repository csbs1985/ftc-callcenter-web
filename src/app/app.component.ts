import { Component } from '@angular/core';
import {
  AuthenticationService,
  ThemeService,
  UserInterface,
} from './shared/_index';

@Component({
  selector: 'ftc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentUser!: UserInterface;

  constructor(
    private authenticationService: AuthenticationService,

    private themeService: ThemeService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.getTheme();
  }

  private getTheme(): void {
    this.themeService.getTheme();
  }
}
