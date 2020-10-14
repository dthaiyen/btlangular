import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector) {
    super(injector)
   }
  items:any;
  total : any;
  ngOnInit(): void {
    this._cart.items.subscribe(res=>{
      this.items = res;
      this.total = 0;
      for(let x of this.items){ 
        x.money = x.quantity * x.item_price;
        this.total += x.quantity * x.item_price;
      } 
    });
  }
  deleteItem(id) { 
    this._cart.deleteItem(id);
    alert('Xóa thành công');
  }

}
