import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { PRODUCTS_URL } from '../../constant/data.contants';

/**
 * Generated class for the SingleProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-product-detail',
  templateUrl: 'single-product-detail.html',
})
export class SingleProductDetailPage {

  productId:string;
  productType:string;
  items:any=[];
  loading: any;
  slider:any=[];


  constructor(public navCtrl: NavController,private loadingCtrl:LoadingController,private database:AngularFireDatabase, public navParams: NavParams) {
    this.productId=this.navParams.get('productId');
    this.productType = this.navParams.get('name');
    console.log(this.productId);
    console.log(this.productType);
    this.getData();
    this.getSliderImage();
    }

    presentLoadingDefault(): void {
      this.loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Loading....'
      });
      this.loading.present();
    }


    getSliderImage():void{
      this.database.list(PRODUCTS_URL+this.productType+"/Products/").valueChanges().subscribe((data)=>{
        this.slider = data;
      });
    }

    getData(): void {
      this.presentLoadingDefault();
      this.database.list(PRODUCTS_URL+this.productType+"/Products/"+this.productId).valueChanges().subscribe((data) => {
        this.items = data;
       // console.log(this.items);
        this.loading.dismiss();
      });
    }
}
