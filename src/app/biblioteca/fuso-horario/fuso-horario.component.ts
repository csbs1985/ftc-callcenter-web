import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT);

@Component({
  selector: 'ftc-fuso-horario',
  templateUrl: './fuso-horario.component.html',
  styleUrls: ['./fuso-horario.component.scss'],
})
export class FusoHorarioComponent implements OnInit, OnDestroy {
  private dayWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  private month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  private intervalId: any;
  private subscription: Subscription = new Subscription();

  public brasilia = new Date('2021-04-23T10:00:00.000Z');
  public amazonas = new Date('2021-04-23T10:00:00.000Z');
  public acre = new Date('2021-04-23T10:00:00.000Z');
  public day: string = 'hoje';

  constructor() {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.getData();
    }, 1000);

    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time: Date) => {
        this.brasilia = new Date();
        this.amazonas = time;
        this.acre = time;
      });
  }

  private getData(): void {
    var day = this.dayWeek[this.brasilia.getDay()];
    var month = this.month[this.brasilia.getMonth()];

    this.day =
      day +
      ', ' +
      this.brasilia.getDate() +
      ' de ' +
      month +
      ' de ' +
      this.brasilia.getFullYear();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) this.subscription.unsubscribe();
  }
}
