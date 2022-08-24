import { Component, OnInit } from '@angular/core';
import { VariavelService } from '@app/compartilhar/_index';

@Component({
  selector: 'ftc-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.scss'],
})
export class NovidadesComponent implements OnInit {
  constructor(private variavelService: VariavelService) {}

  ngOnInit(): void {}

  public closedNews(): boolean {
    return (this.variavelService.mostrarNovidades = false);
  }
}
