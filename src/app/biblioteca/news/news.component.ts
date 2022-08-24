import { Component, OnInit } from '@angular/core';
import { VariavelService } from '@app/shared/_index';

@Component({
  selector: 'ftc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private variavelService: VariavelService) {}

  ngOnInit(): void {}

  public closedNews(): boolean {
    return (this.variavelService.mostrarNovidades = false);
  }
}
