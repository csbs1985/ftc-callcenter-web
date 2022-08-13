import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CryptografiaService,
  LocalStorageService,
  UserInterface,
} from '../_index';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject!: BehaviorSubject<UserInterface>;
  public currentUser: Observable<UserInterface>;

  constructor(
    private cryptografiaService: CryptografiaService,
    private router: Router,
    private http: HttpClient,
    private localStorageService: LocalStorageService
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
          this.cryptografiaService.decrypt(localStorage.getItem('currentUser'))
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
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }

  public get userValue(): any {
    return this.userSubject.value;
  }
}