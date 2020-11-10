import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {

  constructor(private Injector:Injector, private http : HttpClient, private rout: Router) {
    super(Injector)
   }
   cart:any;
   totalpri:any;
  ngOnInit(): void {
    this._cart.items.subscribe(res=>{
      this.cart = res;
      this.totalpri = this._cart.totalIntem();
    })
  }
  checkout(hoten,noigiao,sdt,cart){
    var cart = JSON.parse(localStorage.getItem('cart'));
    var arr:any[]=[];
    cart.forEach(element => {
      var a = {
        masp: parseInt(element.masp),
        soluong: parseInt(element.soluong),
        gia:parseInt(element.gia)
      }
      arr.push(a);
    });
    var formdata = {
      ten_kh : hoten,
      noi_giao : noigiao, 
      sdt : sdt, 
      thanh_tien: this._cart.totalIntem(),
      listjson_chitiet : arr
    }
    this.http.post("https://localhost:44374/api/hoadon/Dat_Hang",formdata).subscribe(res=>{
      if(res){
        alert("Đặt hàng thành công");
        this._cart.clearCart();
        this.rout.navigate(["/trangchu"]);
      }
      else{
        alert("Đặt hàng thất bại");
      }
    })
  }
}
