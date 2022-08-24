import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ftc-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  @Output() overlayOutput = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public toggleOverlay(): void {
    this.overlayOutput.emit(false);
  }
}
