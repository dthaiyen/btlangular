import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent extends BaseComponent implements OnInit {

  constructor(private intecjor: Injector) {
    super(intecjor);
   }

  ngOnInit(): void {
  }
}
