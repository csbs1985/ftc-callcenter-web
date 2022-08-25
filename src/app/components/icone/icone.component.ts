import { Component, Input } from '@angular/core';

const BASE_PATH = 'assets/icons';

@Component({
  selector: 'ftc-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.scss'],
})
export class IconeComponent {
  @Input() size: number = 24;

  public iconPath!: string;

  @Input() set icone(value: string) {
    this.iconPath = `${BASE_PATH}/${value}.svg`;
  }
}
