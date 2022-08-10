import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public favorites: string[] = [];

  constructor() {}

  public getFavorites(): string[] {
    return (this.favorites = []);
    // this.favorites = api.user;
  }

  public toggle(item: string) {
    if (this.favorites.includes(item)) {
      this.favorites = this.favorites.filter((obj) => {
        return obj !== item;
      });
    } else this.favorites.push(item);

    //TODO: salvar na api

    console.log(this.favorites);
  }
}
