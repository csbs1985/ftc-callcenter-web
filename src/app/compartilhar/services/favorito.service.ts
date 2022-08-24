import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FavoritoInterface } from '../interfaces/favorito.interface';
import { NotificacaoService } from './notificacao.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
  private favoritosSubject: BehaviorSubject<FavoritoInterface[]> =
    new BehaviorSubject<FavoritoInterface[]>([]);

  public favoritos: Observable<FavoritoInterface[]> =
    this.favoritosSubject.asObservable();

  readonly limitFavorites: number = 5;

  constructor(private notificacaoService: NotificacaoService) {}

  public getAllFavorites(): Observable<FavoritoInterface[]> {
    return JSON.parse(localStorage.getItem('favoritos')!);
  }

  public getFavorite(item: FavoritoInterface): boolean {
    var favoritos = JSON.parse(localStorage.getItem('favoritos')!) ?? [];

    return favoritos.some(
      (element: FavoritoInterface) => element.url === item.url
    )
      ? true
      : false;
  }

  public toggle(item: FavoritoInterface) {
    var favoritos = JSON.parse(localStorage.getItem('favoritos')!) ?? [];
    this.notificacaoService.isNotificacao = false;

    if (
      favoritos.some((element: FavoritoInterface) => element.url === item.url)
    ) {
      var index = favoritos.findIndex(
        (value: FavoritoInterface) => value.url === item.url
      );
      favoritos.splice(index, 1);
    } else {
      favoritos.length >= this.limitFavorites
        ? (this.notificacaoService.isNotificacao = true)
        : favoritos.push(item);
    }

    this.favoritosSubject.next(favoritos);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
}
