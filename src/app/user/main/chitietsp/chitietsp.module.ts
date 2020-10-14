import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ChitietspComponent } from './chitietsp.component';

const approuter : Routes =[
  {
    path:':id',
    component: ChitietspComponent
  }
]
@NgModule({
  declarations: [ChitietspComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(approuter)
  ]
})
export class ChitietspModule { }
