import { Component, OnInit } from '@angular/core';
import { FavoritoInterface, FavoritoService } from '@app/compartilhar/_index';

@Component({
  selector: 'ftc-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent implements OnInit {
  public favoritos: FavoritoInterface[] = [];

  constructor(private favoritoService: FavoritoService) {
    this.getFavorites();
  }

  ngOnInit(): void {}

  private getFavorites(): void {
    this.favoritoService.favoritos.subscribe((result: FavoritoInterface[]) => {
      this.favoritos = result ?? [];
    });
  }
}
