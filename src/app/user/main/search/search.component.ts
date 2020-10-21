import { BaseComponent } from '../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit {
  constructor(private injector: Injector, private rou:Router) { 
    super(injector)
  }
  page: any;
  pageSize: any;
  item:any;
  totalItems:any;
  search:any;
  listtotal = [];
  ngOnInit(): void {
    this.item = [];
    this.page = 1;
    this.pageSize = 8;
    this._route.params.subscribe(params=>{
      var search = this.rou.url.split('/')[2];
      this.search = search;
      this._api.post('/api/item/get_san_pham_search', { page: this.page, pageSize: this.pageSize, search: search}).subscribe(res => {
      this.item = res.data;
      this.totalItems = res.totalItems;
      console.log(this.item);
      var nava = parseInt((this.totalItems / this.pageSize).toFixed());
      for(var i = 1;i<=nava;i++){
        this.listtotal.push(i);  
      }
      }, err => { });       
    });
  }
  changepaize(i){
    console.log(this.search);
    var index = this.pageSize*(i-1);
    this._api.post('/api/item/get_san_pham_search', { page: i, pageSize: this.pageSize, search: this.search}).subscribe(res => {
      this.item = res.data;
      console.log(this.item);
      this.totalItems = res.totalItems;
    });
  }
}
