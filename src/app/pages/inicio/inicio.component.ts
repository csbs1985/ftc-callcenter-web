import { Component, OnInit } from '@angular/core';
import { VariavelService } from '@app/shared/_index';

@Component({
  selector: 'ftc-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  public erroMensagem!: string;
  public isisCarregando: boolean = false;

  constructor(private variavelService: VariavelService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  public get mostrarNovidades(): boolean {
    return this.variavelService.mostrarNovidades;
  }

  public isCarregandoOutput(value: boolean): void {
    this.isisCarregando = value;
  }
}
