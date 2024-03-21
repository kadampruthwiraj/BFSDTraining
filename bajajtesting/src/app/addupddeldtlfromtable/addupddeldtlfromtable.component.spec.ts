import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupddeldtlfromtableComponent } from './addupddeldtlfromtable.component';

describe('AddupddeldtlfromtableComponent', () => {
  let component: AddupddeldtlfromtableComponent;
  let fixture: ComponentFixture<AddupddeldtlfromtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddupddeldtlfromtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddupddeldtlfromtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
