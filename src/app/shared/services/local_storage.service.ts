import { Injectable } from '@angular/core';
import { CryptografyService } from './cryptography.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private cryptografyService: CryptografyService) {}

  save(key: string, value: any): void {
    const crypto = this.cryptografyService.encrypt(value);
    localStorage.setItem(key, crypto);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  hasKey(key: string): boolean {
    const response = localStorage.getItem(key);
    return response !== null;
  }

  public endSession(): boolean {
    localStorage.removeItem('attendance');
    localStorage.removeItem('currentClient');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('favorites');
    localStorage.removeItem('theme');
    return true;
  }
}
