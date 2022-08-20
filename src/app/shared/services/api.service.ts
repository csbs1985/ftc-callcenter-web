import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../_index';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UserInterface[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get<UserInterface>(`${environment.apiUrl}/users/${id}`);
  }
}
