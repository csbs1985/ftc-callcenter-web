import { Injectable } from '@angular/core';
import { CryptografiaService } from './cryptography.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private cryptografiaService: CryptografiaService) {}

  save(key: string, value: any): void {
    const crypto = this.cryptografiaService.encrypt(value);
    localStorage.setItem(key, crypto);
  }

  find(key: string): string | null {
    return localStorage.getItem(key);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  hasKey(key: string): boolean {
    const response = localStorage.getItem(key);
    return response !== null;
  }

  public endSession(): boolean {
    localStorage.removeItem('user');
    localStorage.removeItem('theme');
    return true;
  }
}
