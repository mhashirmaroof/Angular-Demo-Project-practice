import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsServicesComponent } from './views-services.component';

describe('ViewsServicesComponent', () => {
  let component: ViewsServicesComponent;
  let fixture: ComponentFixture<ViewsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
