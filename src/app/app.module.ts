import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Escolha } from '../pages/escolha/escolha';
import { CadastroAgendamentoPage } from '../pages/cadastro-agendamento/cadastro-agendamento';
import { AgendamentoServiceProvider } from '../providers/agendamento-service/agendamento-service';

export const firebaseConfig = {
  apiKey: "AIzaSyASUFnx0L7lzzW18PZKZiugpBij1QmnQ5s",
  authDomain: "carros-92a1a.firebaseapp.com",
  databaseURL: "https://carros-92a1a.firebaseio.com",
  projectId: "carros-92a1a",
  storageBucket: "carros-92a1a.appspot.com",
  messagingSenderId: "1072296562246"

};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Escolha,
    CadastroAgendamentoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Escolha,
    CadastroAgendamentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgendamentoServiceProvider
  ]
})
export class AppModule {}
