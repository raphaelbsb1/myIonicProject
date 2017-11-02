import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Escolha } from '../escolha/escolha';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  public carros;

  constructor(private http: Http,
    private _loading: LoadingController,
    private _alert: AlertController,
    public navCtrl: NavController,) {
    let carregando = _loading.create({ content: "Carregando carros..." });
    carregando.present();
    http.get('https://aluracar.herokuapp.com')
      .map(response => response.json())
      .subscribe(carros => {
        carregando.dismiss();
        this.carros = carros;
      },
      err => {
        console.log(err);
        carregando.dismiss();
        _alert.create({ 
          title: 'Falha na conexão', 
          buttons: ['Fechar'],
          subTitle: 'Tente mais tarde novamente.' }).present();
      });

  }

  seleciona(carro){
    this.navCtrl.push(Escolha, {carroSelecionado: carro});
  }
}
