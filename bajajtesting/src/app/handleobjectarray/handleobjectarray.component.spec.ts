import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleobjectarrayComponent } from './handleobjectarray.component';

describe('HandleobjectarrayComponent', () => {
  let component: HandleobjectarrayComponent;
  let fixture: ComponentFixture<HandleobjectarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandleobjectarrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandleobjectarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
