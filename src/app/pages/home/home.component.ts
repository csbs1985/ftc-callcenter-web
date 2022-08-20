import { Component, OnInit } from '@angular/core';
import { VariablesService } from '@app/shared/_index';

@Component({
  selector: 'ftc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public loading: boolean = false;
  public errorMessage!: string;

  constructor(private variablesService: VariablesService) {}

  ngOnInit(): void {}

  public get showNews(): boolean {
    return this.variablesService.showNews;
  }

  public loadingOutput(value: boolean): void {
    this.loading = value;
  }
}
