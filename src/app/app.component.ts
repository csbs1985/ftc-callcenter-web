import { Component } from '@angular/core';
import { SessionService } from './shared/services/session.service';
import { ThemeService } from './shared/services/theme.service';

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
