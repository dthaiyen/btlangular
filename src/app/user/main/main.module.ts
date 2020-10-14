import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module'
import { MainComponent } from './main.component';
import {Routes, RouterModule} from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';

const approuter : Routes =[
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'',
        component: BodyComponent
      },
      {
        path:'trangchu',
        component: BodyComponent
      },
      {
        path:'sanpham',
        loadChildren:()=>import('./chitietsp/chitietsp.module').then((m)=>m.ChitietspModule)
      },
      {
        path:'giohang',
        component: CartComponent
      }
    ]
  }
]
@NgModule({
  declarations: [MainComponent, BodyComponent, CartComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(approuter)
  ]
})
export class MainModule { }
