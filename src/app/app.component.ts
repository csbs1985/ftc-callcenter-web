import { Component } from '@angular/core';
import { SessionService } from './shared/services/session.service';

@Component({
  selector: 'ftc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private sessionService: SessionService) {}

  getUser() {
    return this.sessionService.sessionUser;
  }

  isLogin() {
    return this.sessionService.isLogged();
  }
}
