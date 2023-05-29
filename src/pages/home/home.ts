import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SLIDER_IMAGES, PRODUCTS_URL, BED_URL, BETHAK_URL, SOFA_URL, ARTICLE_URL, CHAIR_URL, DINING_URL, DOOR_URL, SWING_URL, TEMPLE_URL, DRESSING_URL, DISCOUNT_IMAGES_10 } from '../../constant/data.contants';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  image = "../assets/imgs/placeholder_image.png";
  images = ["../assets/imgs/placeholder_image.png", "../assets/imgs/placeholder_image.png", "../assets/imgs/placeholder_image.png", "../assets/imgs/placeholder_image.png"];
  titles = ["Harshad", "Chetan Bhagat", "Guru Nanak Dev", "Welcome This book store", "Welcome Value"];
  names: string;
  items: any = [];
  name:string;
  slider:any = [];
  datavalue:any=[];
  discount_10:any=[];
  loading: any;
  article:any=[];
  bed:any=[];
  bethak:any=[];
  chairs:any=[];
  table:any=[];
  door:any=[];
  dressing:any=[];
  sofa:any=[];
  swing:any=[];
  temple:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private loadingCtrl: LoadingController) {
    this.getData();
    this.getProducts();
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
    this.presentLoadingDefault();
    this.database.list(SLIDER_IMAGES).valueChanges().subscribe((data)=>{
      this.slider = data;
      console.log(this.slider);
      this.loading.dismiss();
    });
  }

  getData(): void {
    this.database.list(PRODUCTS_URL).valueChanges().subscribe((data) => {
      this.items = data;
      console.log(this.items.length);
    });

    this.database.list(DISCOUNT_IMAGES_10).valueChanges().subscribe((data) => {
      this.discount_10 = data;
      console.log(this.items.length);
    });
  }

  singleProductDetail(name,i):void{
    this.navCtrl.push('SingleProductDetailPage',{name:name,productId:i+1});
  }

  getProducts(): void {

    this.database.list(ARTICLE_URL).valueChanges().subscribe((data)=>{
      this.article = data;
    });

    this.database.list(BED_URL).valueChanges().subscribe((data)=>{
      this.bed = data;

    });

    this.database.list(BETHAK_URL).valueChanges().subscribe((data) => {
      this.bethak = data;
    });

    this.database.list(CHAIR_URL).valueChanges().subscribe((data)=>{
      this.chairs = data;
    });

    this.database.list(DINING_URL).valueChanges().subscribe((data)=>{
      this.table = data;
    });

    this.database.list(DOOR_URL).valueChanges().subscribe((data)=>{
      this.door = data;
    });

    this.database.list(DRESSING_URL).valueChanges().subscribe((data)=>{
      this.dressing = data;
    });

    this.database.list(SOFA_URL).valueChanges().subscribe((data)=>{
      this.sofa=data;
    });

    this.database.list(SWING_URL).valueChanges().subscribe((data)=>{
      this.swing = data;
    });

    this.database.list(TEMPLE_URL).valueChanges().subscribe((data)=>{
      this.temple = data;
    });

  } 

  nextSliderView(i){
    this.navCtrl.push('DetailPage',{type:this.items[i].name});
  }

  SecondDetailPage(value:String):void{
      this.navCtrl.push('DetailPage',{type:value});
  }

}
