import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '@app/shared/_index';

@Component({
  selector: 'ftc-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public favorites!: string[];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    // this.favorites = this.favoriteService.getAllFavorites();
  }
}
