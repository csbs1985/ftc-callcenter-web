import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CriptografiaService {
  constructor() {}

  encrypt(data: any) {
    try {
      return this.encryptData(JSON.stringify(data));
    } catch (e) {
      throw new Error('Erro ao criptografar informações.');
    }
  }

  decrypt(data: any): string {
    try {
      return this.decryptData(data);
    } catch (e) {
      throw new Error('Erro ao descriptografar informações.');
    }
  }

  private encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, '').toString();
  }

  private decryptData(data: string): string {
    const bytes = CryptoJS.AES.decrypt(data, '');

    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

    throw new Error('Erro ao decriptar informação.');
  }
}
