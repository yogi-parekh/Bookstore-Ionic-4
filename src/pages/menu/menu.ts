import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage:string="HomePage";
  image:string;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: "HOME", component: "HomePage", icon: "home" },
      { title: "PRODUCTS", component: "BethakPage", icon: "paper-plane" },
      { title: "ADD TO CART", component: "HomePage", icon: "shirt" }
    ]
    
    this.image = "https://www.androidheadlines.com/wp-content/uploads/2014/10/Chrome-Wallpaper.jpg";
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
