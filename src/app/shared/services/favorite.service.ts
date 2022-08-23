import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FavoritesInterface } from '../interfaces/favorites.interface';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritesSubject: BehaviorSubject<FavoritesInterface[]> =
    new BehaviorSubject<FavoritesInterface[]>([]);

  public favorites: Observable<FavoritesInterface[]> =
    this.favoritesSubject.asObservable();

  readonly limitFavorites: number = 5;

  constructor(private notificationService: NotificationService) {}

  public getAllFavorites(): Observable<FavoritesInterface[]> {
    return JSON.parse(localStorage.getItem('favorites')!);
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
    this.notificationService.isNotification = false;

    if (
      favorites.some((element: FavoritesInterface) => element.url === item.url)
    ) {
      var index = favorites.findIndex(
        (value: FavoritesInterface) => value.url === item.url
      );
      favorites.splice(index, 1);
    } else {
      favorites.length >= this.limitFavorites
        ? (this.notificationService.isNotification = true)
        : favorites.push(item);
    }

    this.favoritesSubject.next(favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
