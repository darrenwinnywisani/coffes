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
      title: 'Ekasi Coffe Shop',
      subTitle: 'You Have Logedin To Ekasi Coffee Shop',
      buttons: ['Enter'],
    });
    alert.present();
    this.navCtrl.push(OrderPage)
  }
  
}

