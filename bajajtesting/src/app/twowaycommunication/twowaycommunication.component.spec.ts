import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaycommunicationComponent } from './twowaycommunication.component';

describe('TwowaycommunicationComponent', () => {
  let component: TwowaycommunicationComponent;
  let fixture: ComponentFixture<TwowaycommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowaycommunicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwowaycommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
