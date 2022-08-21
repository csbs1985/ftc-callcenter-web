import { Component, OnInit } from '@angular/core';
import { FavoriteService, FavoritesInterface } from '@app/shared/_index';

@Component({
  selector: 'ftc-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public favorites: FavoritesInterface[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  private getFavorites(): void {
    this.favoriteService.getAllFavorites().subscribe((result) => {
      this.favorites = result;
    });
  }
}
