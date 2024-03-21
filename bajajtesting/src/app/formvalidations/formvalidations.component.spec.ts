import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidationsComponent } from './formvalidations.component';

describe('FormvalidationsComponent', () => {
  let component: FormvalidationsComponent;
  let fixture: ComponentFixture<FormvalidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormvalidationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
