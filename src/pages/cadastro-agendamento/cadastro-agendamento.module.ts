import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroAgendamentoPage } from './cadastro-agendamento';

@NgModule({
  declarations: [
    CadastroAgendamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroAgendamentoPage),
  ],
})
export class CadastroAgendamentoPageModule {}
