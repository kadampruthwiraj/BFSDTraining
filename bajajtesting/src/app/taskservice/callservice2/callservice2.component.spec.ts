import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Callservice2Component } from './callservice2.component';

describe('Callservice2Component', () => {
  let component: Callservice2Component;
  let fixture: ComponentFixture<Callservice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Callservice2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Callservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
