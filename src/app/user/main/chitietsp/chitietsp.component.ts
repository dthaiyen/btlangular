import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})


export class ChitietspComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector, private http: HttpClient) { 
    super(injector)
  }
  sp : any;
  ctlq:any;
  txtsoluong: any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params["id"];
      this.http.get("https://localhost:44334/api/Item/get-by-id/"+id).subscribe(res=>{
        this.sp = res;
        setTimeout(()=>{
          this.loadScripts();
          this.http.get("https://localhost:44334/api/Item/Get_Sanpham_lq/"+this.sp.maloai).subscribe(res=>{
            this.ctlq = res;
          });
        })
      })
    })
  }
  add_cart(sp){
    this._cart.addToCartQuantity(sp,parseInt(this.txtsoluong));
    alert("thêm sản phẩm thành công");
  }
  changequantiti(sl){
    this.txtsoluong = sl;
  }
}
