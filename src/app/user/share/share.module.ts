import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [BannerComponent,FooterComponent,HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BannerComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class ShareModule { }
