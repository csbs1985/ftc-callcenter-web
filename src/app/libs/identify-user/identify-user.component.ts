import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ftc-identify-user',
  templateUrl: './identify-user.component.html',
  styleUrls: ['./identify-user.component.scss'],
})
export class IdentifyUserComponent implements OnInit {
  public userData: string = '';

  constructor() {}

  ngOnInit(): void {}
}
