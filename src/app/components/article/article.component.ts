import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@app/shared/_index';
import { CustomerInterface } from '../../shared/interfaces/customer.interface';

@Component({
  selector: 'ftc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public currentCustomer!: CustomerInterface;

  constructor(private customerService: CustomerService) {
    this.customerService.currentCustomer.subscribe(
      (x) => (this.currentCustomer = x)
    );
  }

  ngOnInit(): void {}
}
