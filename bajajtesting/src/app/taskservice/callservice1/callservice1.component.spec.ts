import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Callservice1Component } from './callservice1.component';

describe('Callservice1Component', () => {
  let component: Callservice1Component;
  let fixture: ComponentFixture<Callservice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Callservice1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Callservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
