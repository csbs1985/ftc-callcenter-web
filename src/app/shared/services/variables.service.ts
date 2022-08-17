import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VariablesService {
  public showMenu: boolean = false;
  public showNews: boolean = true;

  constructor() {}
}
