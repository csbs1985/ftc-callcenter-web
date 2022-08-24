import { Component, OnInit } from '@angular/core';
import { FavoritoService, FavoritoInterface } from '@app/shared/_index';

@Component({
  selector: 'ftc-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public favoritos: FavoritoInterface[] = [];

  constructor(private favoritoService: FavoritoService) {
    this.getFavorites();
  }

  ngOnInit(): void {}

  private getFavorites(): void {
    this.favoritoService.favoritos.subscribe((result: FavoritoInterface[]) => {
      this.favoritos = result ?? [];
      console.log('chamando...', this.favoritos);
    });
  }
}
