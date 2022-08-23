import { Component, OnInit } from '@angular/core';
import { CustomerInterface, CustomerService } from '@app/shared/_index';

@Component({
  selector: 'ftc-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss'],
})
export class CustomerDataComponent implements OnInit {
  public currentCustomer!: CustomerInterface;

  constructor(private customerService: CustomerService) {
    this.customerService.currentCustomer.subscribe(
      (x) => (this.currentCustomer = x)
    );
  }

  ngOnInit(): void {
    console.log(this.currentCustomer);
  }

  public closeService(): void {
    this.customerService.closeService();
  }
}
