import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com3FormrouterComponent } from './com3.formrouter.component';

describe('Com3FormrouterComponent', () => {
  let component: Com3FormrouterComponent;
  let fixture: ComponentFixture<Com3FormrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Com3FormrouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Com3FormrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
