import { Component, OnInit } from '@angular/core';
import { VariablesService } from '@app/shared/_index';

@Component({
  selector: 'ftc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public errorMessage!: string;
  public isLoading: boolean = false;

  constructor(private variablesService: VariablesService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  public get showNews(): boolean {
    return this.variablesService.showNews;
  }

  public loadingOutput(value: boolean): void {
    this.isLoading = value;
  }
}
