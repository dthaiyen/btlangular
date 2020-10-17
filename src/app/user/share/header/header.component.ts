import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  menus:any;
  total:any;
  items:any;
  totalprice:any;
  itemldm : any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this._api.get('/api/itemgroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
      console.log(this.menus);
    }); 
    this._api.get('/api/Loai/get-loai').subscribe(res=>{
      this.itemldm = res;
      setTimeout(()=>{
        this.loadScripts();
      })
    })

    this._cart.items.subscribe(res=>{
      this.items = res;
      var x =0;
      this.totalprice = 0;
      for(let i of this.items){
        x = x + 1;
        this.totalprice = this.totalprice + i.soluong * i.gia;
      }
      this.total = x;
    })
  }
  deleteItem(id) { 
    this._cart.deleteItem(id);
    alert('Xóa thành công');
  }

}
