import { Injectable } from '@angular/core';
import { CriptografiaService } from './criptografia.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private criptografiaService: CriptografiaService) {}

  save(key: string, value: any): void {
    const crypto = this.criptografiaService.encrypt(value);
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
    localStorage.removeItem('clienteAtual');
    localStorage.removeItem('usuarioAtual');
    localStorage.removeItem('favoritos');
    localStorage.removeItem('tema');
    return true;
  }
}
