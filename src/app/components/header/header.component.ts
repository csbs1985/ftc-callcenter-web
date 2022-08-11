import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ftc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user = 'charles.atento';

  constructor() {}

  ngOnInit(): void {}
}
