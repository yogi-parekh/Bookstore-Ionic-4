import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { PRODUCTS_URL } from '../../constant/data.contants';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  slider:any = [];
  loading:any;
  type:String='';
  size:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private loadingCtrl: LoadingController) {
    this.type =this.navParams.get('type');
    console.log("Type:"+this.type);
    this.getSliderImage();
  }

  presentLoadingDefault(): void {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading....'
    });
    this.loading.present();
  }

  singleProductDetail(i):void{
    this.navCtrl.push('SingleProductDetailPage',{name:this.type,productId:i+1});
  }

  getSliderImage():void{
    this.presentLoadingDefault();
    this.database.list(PRODUCTS_URL+this.type+"/Products/").valueChanges().subscribe((data)=>{
      this.slider = data;
      this.size = data.length.toString();
      this.loading.dismiss();
    });
  }

}
