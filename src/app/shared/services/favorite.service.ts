import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: string[] = [];

  constructor() {}

  public getFavorites(item: string): boolean {
    var favorites = localStorage.getItem('favorites');

    if (favorites) {
      this.favorites = JSON.parse(favorites);
      return this.favorites.includes(item) ? true : false;
    }
    return false;
  }

  public toggle(item: string) {
    if (this.favorites.includes(item)) {
      this.favorites = this.favorites.filter((obj) => {
        return obj !== item;
      });
    } else this.favorites.push(item);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));

    //TODO: salvar na api
  }
}
