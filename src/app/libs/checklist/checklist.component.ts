import { Component, OnInit } from '@angular/core';

const checklists = [
  'protocolo do atendimento: 202208231640',
  'Reforçar caracteristicas do plano atual e Beneficio do CashBack + Voucher',
  'Oferta Em Todo Lugar 2.0',
  'Na Cidade 2.0 Smart',
];

@Component({
  selector: 'ftc-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {
  public checklists: string[] = checklists;

  constructor() {}

  ngOnInit(): void {}

  public closedItem() {}
}
