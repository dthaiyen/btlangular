

import { BaseComponent } from 'src/app/user/lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-single-product',
  templateUrl: './listsanpham.component.html',
  styleUrls: ['./listsanpham.component.css']
})
export class SingleProductComponent extends BaseComponent implements OnInit {
  
  constructor(private _http:HttpClient, private _router: ActivatedRoute, private injector:Injector) {
    super(injector)
   }
  ct : any;
  ctlq:any;
  ngOnInit(): void {
    this._router.params.subscribe(params=>{
      let id = params["id"];
      this._http.get("https://localhost:44374/api/sanpham/get-by-id/"+id).subscribe(res=>{
        this.ct = res;
        this._http.get("https://localhost:44374/api/sanpham/Get_Sanpham_lq/"+this.ct.maloai).subscribe(res=>{
          this.ctlq = res;
          setTimeout(()=>{
            this.loadScripts();
          })
        });
      });
    })
  }
  changequantiti(){

  }
  add_cart(ct){

  }
}
