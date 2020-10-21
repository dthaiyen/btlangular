import { Component, OnInit, Injector } from '@angular/core';
import { inject } from '@angular/core/testing';
import {BaseComponent} from "../../lib/base-component"
@Component({
  selector: 'app-listsanpham',
  templateUrl: './listsanpham.component.html',
  styleUrls: ['./listsanpham.component.css']
})
export class ListsanphamComponent extends BaseComponent implements OnInit {

  constructor(private injector:Injector) { 
    super(injector)
  }
  allitem:any;
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var id = params["id"];
      // alert(id);
      this._api.get("/api/item/Get_Sanpham_idloai/"+id).subscribe(res=>{
        this.allitem = res;
        console.log(res);
        setTimeout(()=>{
          this.loadScripts();
        })
      })
    })
  }

}
