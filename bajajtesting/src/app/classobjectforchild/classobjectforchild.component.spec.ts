import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassobjectforchildComponent } from './classobjectforchild.component';

describe('ClassobjectforchildComponent', () => {
  let component: ClassobjectforchildComponent;
  let fixture: ComponentFixture<ClassobjectforchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassobjectforchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassobjectforchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
