import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme: boolean = false;

  constructor() {}

  public toggle(): void {
    this.theme = !this.theme;
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', this.theme.toString());
  }

  public getTheme(): void {
    var theme = localStorage.getItem('theme') ?? false;

    if (theme === 'true') {
      this.theme = true;
      document.body.classList.add('dark-theme');
      return;
    }

    this.theme = false;
    document.body.classList.remove('dark-theme');
  }
}
