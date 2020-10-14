import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ChitietspComponent } from './chitietsp.component';
import { FormsModule } from "@angular/forms";

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
    RouterModule.forChild(approuter),
    FormsModule
  ]
})
export class ChitietspModule { }
