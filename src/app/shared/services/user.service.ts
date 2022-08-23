import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CryptografyService,
  LocalStorageService,
  RouterEnum,
  UserInterface,
} from '../_index';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject!: BehaviorSubject<UserInterface>;

  public currentUser: Observable<UserInterface>;

  constructor(
    private cryptografyService: CryptografyService,
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.hasCurrentUser();
    this.currentUser = this.userSubject.asObservable();
  }

  public login(
    code: string,
    password: string,
    username: string
  ): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          this.localStorageService.save('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  private hasCurrentUser(): void {
    var user = localStorage.getItem('currentUser') ?? null;

    if (user) {
      this.userSubject = new BehaviorSubject<UserInterface>(
        JSON.parse(
          this.cryptografyService.decrypt(localStorage.getItem('currentUser'))
        )
      );
    } else {
      this.userSubject = new BehaviorSubject<UserInterface>(null!);
    }
  }

  public logout(): void {
    try {
      this.userSubject.next(null!);
      this.localStorageService.endSession();
      this.router.navigate([RouterEnum.LOGIN]);
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }

  public get userValue(): any {
    return this.userSubject.value;
  }
}
