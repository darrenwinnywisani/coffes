import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { OrderPage } from '../order/order';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {}

  Alert():void {
    let alert = this.alertCtrl.create({
      title: 'Ekasi Coffee Shop',
      subTitle: 'Welcome to Ekasi Coffee Shop You Can Order What Is In the Menu',
      buttons: ['Enter'],
    });
    alert.present();
    this.navCtrl.push(OrderPage)
  }
  
}

