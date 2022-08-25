import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FusoHorarioComponent } from './fuso-horario/fuso-horario.component';
import { ContatoComponent } from './contatos/contatos.component';
import { NovidadesComponent } from './novidades/novidades.component';
import { IdentificarClienteComponent } from './identificar-cliente/identificar-cliente.component';
import { InputBotaoComponent } from './input-botao/input-botao.component';
import { InputTextComponent } from './input-texto/input-texto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SemPararComponent } from './sem-parar/sem-parar.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { LimiteDriveThruComponent } from './limite-drive-thru/limite-drive-thru.component';
import { ChecklistComponent } from './checklist/checklist.component';

import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    CallCenterComponent,
    ChecklistComponent,
    ContatoComponent,
    DadosClienteComponent,
    IdentificarClienteComponent,
    InputBotaoComponent,
    InputTextComponent,
    LimiteDriveThruComponent,
    NovidadesComponent,
    NotificacaoComponent,
    SemPararComponent,
    FusoHorarioComponent,
    OverlayComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    CallCenterComponent,
    ChecklistComponent,
    ContatoComponent,
    DadosClienteComponent,
    IdentificarClienteComponent,
    InputBotaoComponent,
    InputTextComponent,
    LimiteDriveThruComponent,
    NovidadesComponent,
    NotificacaoComponent,
    SemPararComponent,
    FusoHorarioComponent,
    OverlayComponent,
  ],
})
export class BibliotecaModule {}
