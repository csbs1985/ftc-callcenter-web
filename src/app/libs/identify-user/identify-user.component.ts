import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ftc-identify-user',
  templateUrl: './identify-user.component.html',
  styleUrls: ['./identify-user.component.scss'],
})
export class IdentifyUserComponent implements OnInit {
  public userData: string = '';

  public cpf = '[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}';
  public cnpj = '[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}';
  public code = '';

  constructor() {}

  ngOnInit(): void {}
}
