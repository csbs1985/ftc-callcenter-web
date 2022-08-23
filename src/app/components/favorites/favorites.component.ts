import { Component, OnInit } from '@angular/core';
import { FavoriteService, FavoritesInterface } from '@app/shared/_index';

@Component({
  selector: 'ftc-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public favorites: FavoritesInterface[] = [];

  constructor(private favoriteService: FavoriteService) {
    this.getFavorites();
  }

  ngOnInit(): void {}

  private getFavorites(): void {
    this.favoriteService.favorites.subscribe((result: FavoritesInterface[]) => {
      this.favorites = result ?? [];
      console.log('chamando...', this.favorites);
    });
  }
}
