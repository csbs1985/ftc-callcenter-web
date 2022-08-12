import { Component } from '@angular/core';
import { SessionService } from './_services/session.service';
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'ftc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private sessionService: SessionService,
    private themeService: ThemeService
  ) {
    this.getTheme();
  }

  public getUser() {
    return this.sessionService.sessionUser;
  }

  public isLogin() {
    return this.sessionService.isLogged();
  }

  private getTheme(): void {
    this.themeService.getTheme();
  }
}
