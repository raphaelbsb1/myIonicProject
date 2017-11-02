import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { AgendamentoImpl } from '../../app/modelo/agendamentoImpl';
import { AgendamentoServiceProvider } from '../../providers/agendamento-service/agendamento-service';

@IonicPage()
@Component({
  selector: 'page-cadastro-agendamento',
  templateUrl: 'cadastro-agendamento.html',
})
export class CadastroAgendamentoPage {

  public agendamento: Agendamento;
  private _alert: Alert;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _agendamentoService: AgendamentoServiceProvider,
    private _alertCtrl: AlertController) {
    this.agendamento = new AgendamentoImpl();
    this.agendamento.carro = navParams.get('carro');
    this.agendamento.precoTotal = navParams.get('precoTotal');

    this._alert = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'OK', handler: () => { this.navCtrl.setRoot(HelloIonicPage) } }]
    });
  }

  agendar() {
    if (!this.agendamento.nome
      || !this.agendamento.endereco
      || !this.agendamento.email
      || !this.agendamento.data) {
      this._alertCtrl.create({
        title: 'Campos obrigatórios',
        subTitle: 'Preencha todos os campos do formulário',
        buttons: ['OK']
      }).present();
      return;
    }

    this._agendamentoService.agendar(this.agendamento)
      .then(() => {
        this._alert.setSubTitle('Agendamento realizado com sucesso!');
        this._alert.present();
      })
      .catch(erro => {
        this._alert.setSubTitle('Falha no agendamento!');
        this._alert.present();
      });
  }

}
