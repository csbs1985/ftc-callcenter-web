import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  public tema: boolean = false;

  constructor() {}

  public toggle(): void {
    this.tema = !this.tema;
    document.body.classList.toggle('dark-tema');
    localStorage.setItem('tema', this.tema.toString());
  }

  public getTheme(): void {
    var tema = localStorage.getItem('tema') ?? false;

    if (tema === 'true') {
      this.tema = true;
      document.body.classList.add('dark-tema');
      return;
    }

    this.tema = false;
    document.body.classList.remove('dark-tema');
  }
}
