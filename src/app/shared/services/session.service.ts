import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public sessionUser: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  public login(code: string, user: string, password: string): void {
    this.localStorageService.save('user', {
      user: user,
      password: password,
      code: code,
    });
    this.router.navigate(['/']);
  }

  public isLogged(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  public logout(): void {
    try {
      this.localStorageService.endSession();
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }
}
