import { Injectable } from '@angular/core';
import { FavoritesInterface } from '../_interfaces/favorites.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: FavoritesInterface[] = [];

  constructor() {}

  // public getAllFavorites() {
  //   var favorites = localStorage.getItem('favorites');

  //   if (favorites) {
  //     this.favorites = JSON.parse(favorites);
  //     return this.favorites.includes(item) ? true : false;
  //   }
  //   return false;
  // }

  public getFavorites(item: FavoritesInterface): boolean {
    var favorites = localStorage.getItem('favorites');

    if (favorites) {
      this.favorites = JSON.parse(favorites);
      // return this.favorites.includes(item) ? true : false;
    }
    return false;
  }

  public toggle(item: FavoritesInterface) {
    var favorites = JSON.parse(localStorage.getItem('favorites')!) ?? [];

    favorites.find((element: FavoritesInterface) => {
      if (element.url === item.url) {
        this.favorites = favorites.filter((obj: FavoritesInterface) => {
          return obj !== item;
        });
      } else this.favorites.push(item);
    });

    localStorage.setItem('favorites', JSON.stringify(this.favorites));

    //TODO: salvar na api
  }
}
