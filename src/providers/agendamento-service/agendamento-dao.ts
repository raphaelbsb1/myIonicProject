import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class AgendamentoDao {

    constructor(private _storage: Storage) {

    }

    salva(agendamento: Agendamento) {
        let key = this._getKey(agendamento);
        return this._storage.set(key, agendamento);
    }

    private _getKey(agendamento: Agendamento) {
        return agendamento.email + agendamento.data.substr(0, 10);
    }

}