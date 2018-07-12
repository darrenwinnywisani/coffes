import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
 
Counter:number=1;
  quantity=1;
 CUBANO=17;

  milk=false;
  whippedcream=false;
  caramel=false;

  
  mmilk=5;
  mwhippedcream=7;
  mcaramel=10;
 
  totalprice=0.0;

  Quantity(value:number):void{
    this.Counter+=value;
  }
  
  purchase():void{
    this.calcCost();
  }

  calcCost():number{

this.totalprice=this.CUBANO*this.Counter;

if(this.caramel&&this.milk&&this.whippedcream&&this.CUBANO)

  this.totalprice=(this.mmilk + this.mcaramel + this.mwhippedcream + this.CUBANO)*this.Counter;

   
  else if(this.milk&&this.CUBANO)

    this.totalprice=(this.mmilk+ this.CUBANO)*this.Counter;
  

  else if(this.whippedcream&&this.CUBANO)

    this.totalprice=(this.mwhippedcream+ this.CUBANO)*this.Counter;
  

  else if(this.caramel&&this.CUBANO)

    this.totalprice=(this.mcaramel+ this.CUBANO)*this.Counter;
     
   return this.totalprice;


  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

Buy():void{this.navCtrl.push(OrderPage)}

Done():void{
  const confirm = this.alertCtrl.create({
    title: 'Ekasi Coffe Shop',
    message: 'are you sure your done buying or you want more?',
    buttons: [
      {
        text: 'no',
        handler: () => {
          console.log('no clicked');
          this.navCtrl.push(OrderPage);
        }
      },
      {
        text: 'yes',
        handler: () => {
          console.log('yes clicked');
          this.navCtrl.push(HomePage);
        }
      }
    ]
  });
  confirm.present()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
}
