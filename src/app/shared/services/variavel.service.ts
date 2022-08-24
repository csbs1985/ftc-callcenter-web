import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VariavelService {
  public mostrarMenu: boolean = false;
  public mostrarNovidades: boolean = true;

  constructor() {}
}
