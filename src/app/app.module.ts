import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule, Router} from '@angular/router';
import { NgModel } from '@angular/forms';
const approuter : Routes =[
  {
    path:'',
    loadChildren:()=>import('./user/main/main.module').then((m)=>m.MainModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approuter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
