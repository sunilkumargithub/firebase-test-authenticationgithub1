import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsreadComponent } from './itemsread.component';

describe('ItemsreadComponent', () => {
  let component: ItemsreadComponent;
  let fixture: ComponentFixture<ItemsreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
