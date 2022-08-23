import { Component, OnInit } from '@angular/core';
import {
  UserService,
  UserInterface,
  VariablesService,
} from '../../shared/_index';

@Component({
  selector: 'ftc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private user!: UserInterface;

  public name: string = 'usuário.atento';

  constructor(
    private userService: UserService,
    private variablesService: VariablesService
  ) {
    this.getUser();
  }

  ngOnInit(): void {}

  private getUser(): void {
    this.user = this.userService.userValue;
    this.name = this.user.firstName + '.' + this.user.lastName;
    console.log(this.user);
  }

  public toggleMenu(): void {
    this.variablesService.showMenu = true;
  }
}
