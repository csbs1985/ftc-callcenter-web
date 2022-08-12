import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/_services/favorite.service';
import { LocalStorageService } from '../../_services/local_storage.service';

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
