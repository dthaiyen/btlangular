import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector, private http: HttpClient) { 
    super(injector)
  }
  itemnew: any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      console.log("hello admin");
      this.http.get("https://localhost:44334/api/Item/get_sanpham_new").subscribe(res=>{
        this.itemnew = res;
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })     
  }
}
