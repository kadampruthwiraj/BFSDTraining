import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleparentobjectComponent } from './handleparentobject.component';

describe('HandleparentobjectComponent', () => {
  let component: HandleparentobjectComponent;
  let fixture: ComponentFixture<HandleparentobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandleparentobjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandleparentobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
