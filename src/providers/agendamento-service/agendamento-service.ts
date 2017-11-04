import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AgendamentoDao } from './agendamento-dao';


@Injectable()
export class AgendamentoServiceProvider {

  constructor(public http: Http, private _dao: AgendamentoDao) {
  }

  agendar(agendamento: Agendamento) {
    let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.precoTotal}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
    return this.http
    .get(api)
    .toPromise()
    .then(() => agendamento.confirmado = true, err => console.log(err))
    .then(() => this._dao.salva(agendamento))
    .then(() => agendamento.confirmado);
  }

}
