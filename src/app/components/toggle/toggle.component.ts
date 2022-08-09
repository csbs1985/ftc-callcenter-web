import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ftc-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() label!: string;
  @Input() value!: boolean;

  @Output() valueToggle = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    this.value = !this.value;
    this.valueToggle.emit(this.value);
  }
}
