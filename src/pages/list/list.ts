import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { LoadingController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  postsCol: AngularFirestoreCollection<Post>;
  postsCol2: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  carregando: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _loading: LoadingController,
    private _afs: AngularFirestore) {
    this.carregando = _loading.create({ content: "Carregando posts..." });
  }

  ngOnInit() {
    this.carregando.present();
    //this.postsCol = this._afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.postsCol2 = this._afs.collection('posts');
    this.posts = this.postsCol2.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    this.carregando.dismiss();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
