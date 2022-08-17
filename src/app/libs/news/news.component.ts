import { Component, OnInit } from '@angular/core';
import { VariablesService } from '@app/shared/_index';

@Component({
  selector: 'ftc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private variablesService: VariablesService) {}

  ngOnInit(): void {}

  public closedNews(): boolean {
    return (this.variablesService.showNews = false);
  }
}
