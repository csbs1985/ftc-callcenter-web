import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import {
  AuthenticationService,
  UserInterface,
  UserService,
} from '../../shared/_index';

@Component({
  selector: 'ftc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: UserInterface;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.user = this.authenticationService.userValue;
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    try {
      const mySub = this.userService
        .getById(this.user.id!)
        .pipe(first())
        .subscribe((user) => {
          this.user = user;
          mySub.unsubscribe();
        });
    } catch (error) {
      console.log('ERRO = > não foi possivél identificar o usuário: ', error);
    }
  }
}
