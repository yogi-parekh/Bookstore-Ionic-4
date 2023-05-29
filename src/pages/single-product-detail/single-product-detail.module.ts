import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleProductDetailPage } from './single-product-detail';

@NgModule({
  declarations: [
    SingleProductDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleProductDetailPage),
  ],
})
export class SingleProductDetailPageModule {}
