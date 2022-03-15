import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatagoryComponent } from './addcatagory.component';

describe('AddcatagoryComponent', () => {
  let component: AddcatagoryComponent;
  let fixture: ComponentFixture<AddcatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcatagoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
