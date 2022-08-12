import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../interfaces/user.interface';
import { LocalStorageService } from './local_storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private currentUserSubject: BehaviorSubject<UserInterface>;

  public currentUser: Observable<UserInterface>;
  public sessionUser: boolean = false;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<UserInterface>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserInterface {
    return this.currentUserSubject.value;
  }

  public login(code: string, user: string, password: string) {
    // var user = this.localStorageService.save('currentUser', {
    //   user: user,
    //   password: password,
    //   code: code,
    // });

    // return user;

    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        user,
        password,
      })
      .pipe(
        map((user) => {
          if (user && user.token) {
            this.localStorageService.save(
              'currentUser',
              JSON.stringify({
                user: user,
                password: password,
              })
            );
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  public isLogged(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  public logout(): void {
    try {
      this.localStorageService.endSession();
      this.currentUserSubject.next(null!);
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }
}
