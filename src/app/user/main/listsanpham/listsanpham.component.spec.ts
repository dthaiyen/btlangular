import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsanphamComponent } from './listsanpham.component';

describe('ListsanphamComponent', () => {
  let component: ListsanphamComponent;
  let fixture: ComponentFixture<ListsanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
