import { Component, Input } from '@angular/core';

const BASE_PATH = 'assets/icons';

@Component({
  selector: 'ftc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() size: number = 24;

  public iconPath!: string;

  @Input() set icon(value: string) {
    this.iconPath = `${BASE_PATH}/${value}.svg`;
  }
}
