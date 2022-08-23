import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  CryptografyService,
  CustomerInterface,
  LocalStorageService,
  RouterEnum,
} from '../_index';

const customer: CustomerInterface = {
  cpf: 12345678901,
  cnpj: 12345678901234,
  firstName: 'airton',
  id: 1234567,
  lastName: 'senna da silva',
  rg: 123456789,
};

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customerSubject!: BehaviorSubject<CustomerInterface>;

  public currentCustomer: Observable<CustomerInterface>;

  constructor(
    private cryptografyService: CryptografyService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.hasCurrentClient();
    this.currentCustomer = this.customerSubject.asObservable();
  }

  public identify(value: number): Observable<CustomerInterface> | null {
    if (
      value === customer.cpf ||
      value === customer.id ||
      value === customer.cnpj
    ) {
      this.customerSubject.next(customer);
      this.localStorageService.save(
        'currentCustomer',
        JSON.stringify(customer)
      );
      return of(customer);
    }

    return null;
  }

  private hasCurrentClient(): void {
    var user = localStorage.getItem('currentCustomer') ?? null;

    if (user) {
      this.customerSubject = new BehaviorSubject<CustomerInterface>(
        JSON.parse(
          this.cryptografyService.decrypt(
            localStorage.getItem('currentCustomer')
          )
        )
      );
    } else {
      this.customerSubject = new BehaviorSubject<CustomerInterface>(null!);
    }
  }

  public logout(): void {
    try {
      this.customerSubject.next(null!);
      this.localStorageService.endSession();
      this.router.navigate([RouterEnum.LOGIN]);
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }

  public get userValue(): any {
    return this.customerSubject.value;
  }
}
