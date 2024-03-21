import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytableforinputComponent } from './displaytableforinput.component';

describe('DisplaytableforinputComponent', () => {
  let component: DisplaytableforinputComponent;
  let fixture: ComponentFixture<DisplaytableforinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaytableforinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaytableforinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
