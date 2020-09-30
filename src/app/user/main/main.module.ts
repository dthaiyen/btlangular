import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module'
import { MainComponent } from './main.component';

import {Routes, RouterModule} from '@angular/router';
import { BodyComponent } from './body/body.component';;
const approuter : Routes =[
  {
    path:'',
    component:MainComponent
  }
]
@NgModule({
  declarations: [MainComponent, BodyComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(approuter)
  ]
})
export class MainModule { }
