import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { Comp2FormtesingComponent } from './comp2.formtesing.component';

describe('Comp2FormtesingComponent', () => {
  let component: Comp2FormtesingComponent;
  let fixture: ComponentFixture<Comp2FormtesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp2FormtesingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp2FormtesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
