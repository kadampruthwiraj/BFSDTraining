import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestcallcomponentComponent } from './restcallcomponent.component';

describe('RestcallcomponentComponent', () => {
  let component: RestcallcomponentComponent;
  let fixture: ComponentFixture<RestcallcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestcallcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestcallcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
