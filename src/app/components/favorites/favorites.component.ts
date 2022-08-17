import { Component, OnInit } from '@angular/core';
import { FavoriteService, FavoritesInterface } from '@app/shared/_index';

@Component({
  selector: 'ftc-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public favorites!: FavoritesInterface[];

  constructor(private favoriteService: FavoriteService) {
    this.favorites = [
      {
        name: 'atendimento',
        url: '/atendimento/atendimento',
      },
      {
        name: 'priorização',
        url: '/atendimento/priorizacao',
      },
      {
        name: 'bloqueio de correspond./cobrança',
        url: '/cliente/bloqueio-cobranca',
      },
      {
        name: 'devices virtuais',
        url: '/dispositivo/devices-virtuais',
      },
      {
        name: 'faturas',
        url: 'string',
      },
    ];
  }

  ngOnInit(): void {
    // this.favorites = this.favoriteService.getAllFavorites();
  }
}
