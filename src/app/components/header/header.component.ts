import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import {
  UserService,
  UserInterface,
  VariablesService,
  ApiService,
} from '../../shared/_index';

@Component({
  selector: 'ftc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: UserInterface;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private variablesService: VariablesService
  ) {
    this.user = this.userService.userValue;
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    try {
      const mySub = this.apiService
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

  public toggleMenu(): void {
    this.variablesService.showMenu = true;
  }
}
