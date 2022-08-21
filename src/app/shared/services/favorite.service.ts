import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { FavoritesInterface } from '../interfaces/favorites.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public favorites = Subject<FavoritesInterface[]>;

  constructor() {}

  public getAllFavorites(): Observable<FavoritesInterface[]> {
    return of(JSON.parse(localStorage.getItem('favorites')!));
  }

  public getFavorite(item: FavoritesInterface): boolean {
    var favorites = JSON.parse(localStorage.getItem('favorites')!) ?? [];

    return favorites.some(
      (element: FavoritesInterface) => element.url === item.url
    )
      ? true
      : false;
  }

  public toggle(item: FavoritesInterface) {
    var favorites = JSON.parse(localStorage.getItem('favorites')!) ?? [];

    if (
      favorites.some(
        (element: FavoritesInterface) => element.url === item.url
      )
    ) {
      var index = favorites.findIndex(
        (x: FavoritesInterface) => x.url === item.url
      );
      favorites.splice(index, 1);
    } else {
      favorites.push(item);
    }

    this.favorites = favorites;

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
