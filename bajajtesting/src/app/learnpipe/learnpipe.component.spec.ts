import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnpipeComponent } from './learnpipe.component';

describe('LearnpipeComponent', () => {
  let component: LearnpipeComponent;
  let fixture: ComponentFixture<LearnpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnpipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
