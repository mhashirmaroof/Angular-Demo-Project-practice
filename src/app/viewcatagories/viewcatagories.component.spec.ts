import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcatagoriesComponent } from './viewcatagories.component';

describe('ViewcatagoriesComponent', () => {
  let component: ViewcatagoriesComponent;
  let fixture: ComponentFixture<ViewcatagoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcatagoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
