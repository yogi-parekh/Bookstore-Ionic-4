import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DISCOUNT_IMAGES_10, PRODUCTS_URL, MAIN_IMAGES, BED_URL } from '../../constant/data.contants';

/**
 * Generated class for the BethakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bethak',
  templateUrl: 'bethak.html',
})
export class BethakPage {

  image:string='';
  items: any = [];
  slider:any = [];
  loading:any;
  discount_10:any=[];
  bed:any=[];

  // tab1Root:string='HomePage';
  // tab2Root:string='HomePage';
  // tab3Root:string='HomePage';
  // tab4Root:string='HomePage';
  // tab5Root:string='HomePage';

  constructor(public navCtrl: NavController, private loadingCtrl:LoadingController,public navParams: NavParams, private database: AngularFireDatabase) {
    this.getData();
    this.getSliderImage();
  }

  secondPage(item){
    this.navCtrl.push('DetailPage',{type:item});
  }

  presentLoadingDefault(): void {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading....'
    });
    this.loading.present();
  }

  getData(): void {
    this.database.list(MAIN_IMAGES).valueChanges().subscribe((data) => {
      this.image = JSON.parse(JSON.stringify(data[0]));
      console.log(this.image);
    });
  }

  getSliderImage():void{
    this.presentLoadingDefault();
    // this.database.list('EcommerceApp/slider/').valueChanges().subscribe((data)=>{
    //   this.slider = data;
    //   this.loading.dismiss();
    // });

    this.database.list(BED_URL).valueChanges().subscribe((data)=>{
      for(let i=0;i<data.length % 10;i++){
        this.bed.push(data[i]);
      }
      this.loading.dismiss();
    });

    this.database.list(DISCOUNT_IMAGES_10).valueChanges().subscribe((data) => {
      this.discount_10 = data;
    });

  }

  singleProductDetail(name,i):void{
    this.navCtrl.push('SingleProductDetailPage',{name:name,productId:i+1});
  }

}
