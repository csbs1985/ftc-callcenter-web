import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../_index';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<UserInterface>;
  public user: Observable<UserInterface>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserInterface>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserInterface {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    this.router.navigate(['/login']);
  }
}
