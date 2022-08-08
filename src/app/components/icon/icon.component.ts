import { Component, Input, OnInit } from '@angular/core';

const BASE_PATH = 'assets/icons';

@Component({
  selector: 'ftc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() width: number = 24;
  @Input() height: number = 24;

  public iconPath!: string;

  @Input() set icon(value: string) {
    this.iconPath = `${BASE_PATH}/${value}.svg`;
  }

  constructor() {}

  ngOnInit(): void {}
}
