import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { AcessorioImpl } from '../../app/modelo/acessorioImpl';
import { CadastroAgendamentoPage } from '../cadastro-agendamento/cadastro-agendamento';

@Component({
    selector: 'escolha',
    templateUrl: 'escolha.html'
})
export class Escolha implements OnInit {

    public carro: Carro;
    public acessorios: Array<Acessorio>;
    private _precoTotal: number;

    constructor(public navParam: NavParams, 
        public navCtrl: NavController) {
        this.carro = navParam.get('carroSelecionado');
        this._precoTotal = this.carro.preco;
    }

    ngOnInit() {
        this.acessorios = [new AcessorioImpl('Freio-abs', 1000),
        new AcessorioImpl('Retrovisor eletrico', 800),
        new AcessorioImpl('Banco de couro', 3000)
        ];
    }

    calculaPrecoTotal(acessorioLigado: boolean, precoAcessorio: number) {
        if (acessorioLigado)
            this._precoTotal += precoAcessorio;
        else
            this._precoTotal -= precoAcessorio;
    }

    get precoTotal() {
        return this._precoTotal;
    }

    realizarAgendamento() {
        this.navCtrl.push(CadastroAgendamentoPage, 
            {carro: this.carro, precoTotal: this._precoTotal});
    }
}