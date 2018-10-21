import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemswriteComponent } from './itemswrite.component';

describe('ItemswriteComponent', () => {
  let component: ItemswriteComponent;
  let fixture: ComponentFixture<ItemswriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemswriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemswriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
